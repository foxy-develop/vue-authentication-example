<template>
  <div class="chart-wrapper">
    <div class="content__control" v-show="this.$store.getters.isDataLoaded">
      <label class="content__control-item">
        <input type="radio" value="day" name="day" v-model="period" @change="setPeriod">
        <span class="content__control-btn">День</span>
      </label>
      <label class="content__control-item">
        <input type="radio" value="week" v-model="period" @change="setPeriod">
        <span class="content__control-btn">Неделя</span>
      </label>
      <label class="content__control-item">
        <input type="radio" value="month" v-model="period" @change="setPeriod">
        <span class="content__control-btn">Месяц</span>
      </label>
    </div>
    <div class="content__chart" v-if="this.$store.getters.isDataLoaded">
      <line-chart
        class="content__chart-inner"
        :chart-data="data"
        :theme = "this.$store.getters.theme"
        :options="options.default"
        :height="100"
      ></line-chart>
    </div>
  </div>
</template>
<script>
import LineChart from "./LineChart";
import { DATA_SWITCH } from "../../store/actions/charts";
import axios from "axios";

const prepareDatasets = response => {
    const dataset = response.data;
    const periods = ['day', 'week', 'month'];
    const datasets = {};
    periods.forEach(period => {
        datasets[period] = {
            labels: dataset[period].dates,
            xAxisID: 'Дата',
            yAxisID: 'Количество',
            datasets: [
                {
                    label: ['Позитивные'],
                    data: dataset[period].positive.values,
                    backgroundColor: 'rgba(14, 214, 220, 0.05)',
                    borderColor: '#0ED6DC',
                    borderWidth: 2
                },
                {
                    label: ['Негативные'],
                    data: dataset[period].negative.values,
                    backgroundColor:'rgba(241, 117, 78, 0.1)',
                    borderColor:'#F17105',
                    borderWidth: 2
                }
            ]
        }
    });
    return datasets;
}

const colors = {
    'dark': {
        'font': '#fff',
        'line': 'rgba(255,255,255,0.1)'
    },
    'light': {
        'font': '#414D55',
        'line': 'rgba(0,0,0,0.1)'
    }
};


export default {
  name: 'StatCharts',
  components: {
    LineChart,
  },
  data() {
      return {
          period: '',
          data: null,
          allData: null,
          theme: this.$store.getters.theme,
          options: {
              default: {
                maintainAspectRatio: false,
                aspectRatio: 1.8,
                tooltips: {
                  displayColors: false
                },
                legend: {
                  display: false,
                },
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      suggestedMin: 0,
                      stepSize: 500
                    }
                  }]
                }
              },
              dark: {
                  maintainAspectRatio: false,
                  aspectRatio: 1.8,
                  tooltips: {
                      displayColors: false
                  },
                  legend: {
                      display: false,
                  },
                  scales: {
                      yAxes: [{
                          gridLines: {
                              zeroLineColor: 'rgba(255, 255, 255, 0)',
                              color: 'rgba(0,0,0,0)'
                          },
                          ticks: {
                              fontColor: colors.dark.font,
                              beginAtZero: true,
                              suggestedMin: 0,
                              stepSize: 500
                          }
                      }],
                      xAxes: [{
                          gridLines: {
                              zeroLineColor: 'rgba(255, 255, 255, 0)',
                              color: colors.dark.line
                          },
                          ticks: {
                              fontColor: colors.dark.font,
                              maxTicksLimit: 10
                          }
                      }]
                  }
              },
              light: {
                  maintainAspectRatio: false,
                  aspectRatio: 1.8,
                  tooltips: {
                      displayColors: false
                  },
                  legend: {
                      display: false,
                  },
                  scales: {
                      yAxes: [{
                          gridLines: {
                              zeroLineColor: 'rgba(255, 255, 255, 0)',
                              color: 'rgba(0,0,0,0)'
                          },
                          ticks: {
                              fontColor: colors.light.font,
                              beginAtZero: true,
                              suggestedMin: 0,
                              stepSize: 500
                          }
                      }],
                      xAxes: [{
                          gridLines: {
                              zeroLineColor: 'rgba(255, 255, 255, 0)',
                              color: colors.light.line
                          },
                          ticks: {
                              fontColor: colors.light.font,
                              maxTicksLimit: 10
                          }
                      }]
                  }
              }
          }
      }
  },
  mounted () {
    this.theme = this.$store.getters.theme;
    this.period = this.$store.getters.getPeriod;
    this.getData();
  },
  methods: {
    getData: function () {
      if ( !this.$store.getters.getData ) {
        axios.get(`mentions/stats`).then(response => {
          if (response.data.status) {
            this.allData = prepareDatasets(response);
            this.data = this.allData[this.period];
          }
        })
      } else {
        this.data = this.$store.getters.getData;
      }
    },
    updateData: function () {
      this.data = this.$store.getters.getData;
    },
    setPeriod: function () {
      const { period } = this;
      this.$store.dispatch(DATA_SWITCH, { period }).then(() => {
        this.updateData();
      });
    }
  }
}
</script>

<style lang="scss">
  @mixin tablet {
    @media (min-width: 768px) { @content; }
  }
  @mixin desktop {
    @media (min-width: 1024px) { @content; }
  }
  .chart-wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-height: 100%;
    box-sizing: border-box;
  }
  .content {
    &__chart-inner {
      display: flex;
      flex-grow: 1;
    }
    &__chart {
      flex-grow: 1;
      padding-bottom: 4rem;
      box-sizing: border-box;
      min-height: 60vh;
      max-width: 100%;
      &-inner {
        max-width: 100%;
      }
      display: flex;
      @include tablet {
        min-height: unset;
      }
    }
    &__control {
      display: flex;
      flex-direction: row;
      height: 4rem;
      max-width: 32.6rem;
      width: 100%;
      margin-bottom: 2rem;
      @include tablet {
        margin-bottom: 4rem;
      }
      @include desktop {
        margin-bottom: 5rem;
      }
      &-item {
        position: relative;
        display: flex;
        flex-basis: calc(100% / 3);
        height: 4rem;
        /*overflow: hidden;*/
        &:first-child {
          .content__control-btn {
            border-top-left-radius: .8rem;
            border-bottom-left-radius: .8rem
          }

        }

        &:last-child {
          .content__control-btn {
            border-top-right-radius: .8rem;
            border-bottom-right-radius: .8rem
          }
        }

        input {
          display: none;
          pointer-events: all;
          position: absolute;
          height: 100%;
          width: 100%;
          &:checked + .content__control-btn {
            color: #fff;
            background: #03C7CD;
            box-shadow: 0px 5px 13px rgba(20, 78, 110, 0.1);
          }
        }

      }
      &-btn {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        line-height: 2rem;
        color: #D6D8D8;
        transition: .3s ease-in-out;
        background: rgba(54, 66, 68, 0.3);
        cursor: pointer;
        &:hover {
          background: rgba(54, 66, 68, 0.5);
        }
        &--active {
          &:hover {
            background: #03C7CD;
          }
        }
      }
    }
  }
  .body {
    &--dark {
      .content {
        &__control-btn {
          background: rgba(54, 66, 68, 0.3);
          color: #D6D8D8;

          &:hover {
            background: rgba(54, 66, 68, 0.5);
          }

          &--active {
            background: #03C7CD;

            &:hover {
              background: #03C7CD;
            }
          }
        }
      }
    }

    &--light {
      .content {
        &__control-item {
          input {
            &:checked + .content__control-btn {
              background: #FFFFFF;
              color: #03C8CD;

              &:hover {
                background: #FFFFFF;
              }
            }
          }
        }
        &__control-btn {
          background: #F3F9FA;
          color: #637172;

          &:hover {
            background: rgb(227, 229, 230);
          }
        }
      }
    }
  }
</style>
