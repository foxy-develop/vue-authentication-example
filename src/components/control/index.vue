<template >
  <div class="content__control">
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
</template>

<script>
  import {DATA_SWITCH} from "../../store/actions/charts";

  export default {
    name: "ChartControl",
    data() {
      return {
        period: '',
      }
    },
    methods: {
      setPeriod: function () {
        const { period } = this;
        this.$store.dispatch(DATA_SWITCH, { period });
      }
    },
    mounted() {
      this.period = this.$store.getters.getPeriod;
    },
  }
</script>

<style lang="scss">
  @function rem($px) {
    @return $px / 10 * 1rem;
  }

  @mixin tablet-sm {
    @media (min-width: 640px) {
      @content;
    }
  }

  @mixin tablet {
    @media (min-width: 768px) {
      @content;
    }
  }

  @mixin tablet-lg {
    @media (min-width: 992px) {
      @content;
    }
  }

  @mixin desktop {
    @media (min-width: 1024px) {
      @content;
    }
  }

  @mixin desktop-lg {
    @media (min-width: 1200px) {
      @content;
    }
  }

  .content {
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
