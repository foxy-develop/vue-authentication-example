import { Line } from 'vue-chartjs'

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
  extends: Line,
  props: ['chartData', 'theme'],
  data() {
    return {
      options: {
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
      },
      page: this.$route.path
    }
  },
  methods: {
    updateChart: function () {
      this.renderChart(this.chartData, this.options[this.theme]);
    }
  },
  mounted () {
    this.updateChart();
  },
  watch: {
    chartData () {
      this.updateChart();
    },
    theme () {
      this.updateChart();
    }
  }
}
