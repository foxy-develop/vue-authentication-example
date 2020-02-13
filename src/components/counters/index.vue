<template>
  <div class="sidebar__content">
    <ul class="sidebar__data" v-if="this.$store.getters.isDataLoaded">
      <li class="sidebar__item">
        <number
          class="sidebar__num"
          :from="0"
          :to="this.$store.getters.getData.datasets[0].total.links"
          :duration="1"
          easing="Power3.easeIn">
        </number>
        <span class="sidebar__desc">адресов</span>
      </li>
      <li class="sidebar__item">
        <number
          class="sidebar__num"
          :from="0"
          :to="this.$store.getters.getData.datasets[0].total.domains"
          :duration="1"
          easing="Power3.easeIn">
        </number>
        <span class="sidebar__desc">доменов</span>
      </li>
    </ul>
    <ul class="sidebar__data" v-if="this.$store.getters.isDataLoaded">
      <li class="sidebar__item sidebar__item--danger">
        <number
          class="sidebar__num"
          :from="0"
          :to="this.$store.getters.getData.datasets[1].total.links"
          :duration="1"
          easing="Power3.easeIn">
        </number>
        <span class="sidebar__desc">адресов</span>
      </li>
      <li class="sidebar__item sidebar__item--danger">
        <number
          class="sidebar__num"
          :from="0"
          :to="this.$store.getters.getData.datasets[1].total.domains"
          :duration="1"
          easing="Power3.easeIn">
        </number>
        <span class="sidebar__desc">доменов</span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "Counters",
      data() {
          return {
            period: this.$store.getters.getPeriod
          }
      }
    }
</script>

<style lang="scss">
  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateY(-20px);
    } to {
        opacity: 1;
        transform: translateY(0);
      }
  }

  @function rem($px) {
    @return $px / 10 * 1rem;
  }

  @mixin tablet-sm {
    @media (min-width: 640px) { @content; }
  }
  @mixin tablet {
    @media (min-width: 768px) { @content; }
  }
  @mixin tablet-lg {
    @media (min-width: 992px) { @content; }
  }
  @mixin desktop {
    @media (min-width: 1024px) { @content; }
  }

  @mixin desktop-lg {
    @media (min-width: 1200px) { @content; }
  }
  .sidebar {
    z-index: 1;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    @include desktop {
      flex-basis: 23rem;
      display: flex;
      justify-content: center;
      max-width: 23rem;
    }
    &__content {
      display: flex;
      flex-grow: 1;
      flex-direction: row;
      justify-content: space-around;
      @include desktop  {
        justify-content: center;
        flex-direction: column;
      }
    }
    &__title {
      font-family: 'Rubik', sans-serif;
      font-size: 2.8rem;
      line-height: 4rem;
      margin-bottom: 2rem;
      font-weight: 500;
      color: #fff;
      transition: .3s ease-in-out;
      display: flex;
      justify-content: center;
      @include tablet {
        justify-content: flex-start;
      }
      @include desktop  {
        display: none;
      }
    }
    &__data {
      display: flex;
      flex-direction: column;
      list-style: none;
      animation: reveal;
      animation-duration: .5s;
      animation-timing-function: ease-in;
      animation-fill-mode: forwards;
      @media (min-width: 600px) and (orientation: landscape) {
        flex-direction: row;
      }
      @include tablet {
        flex-direction: row;
      }
      @include desktop {
        flex-direction: column;
        padding-left: 2rem;
        margin-bottom: 40%;
        margin-left: 1.5rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
      @include desktop-lg {
        margin-left: 0;
      }
    }
    &__item {
      flex-direction: column;
      display: flex;
      margin-bottom: 2rem;
      @media (min-width: 600px) and (orientation: landscape) {
        margin-left: 4rem;
      }
      @include tablet {
        margin-left: 0;
      }
      &:last-child {
        @include tablet {
          margin-left: 5rem;
        }
        @include desktop {
          margin-left: 0;
        }
      }
      &--danger {
        .sidebar__num:before {
          background: #F1754E;
          box-shadow: -2px 3px 7px rgba(11, 45, 55, 0.12);
        }
      }
    }
    &__num {
      display: flex;
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 4rem;
      line-height: 4rem;
      color: #fff;
      margin-bottom: .5rem;
      opacity: 0.8;
      position: relative;
      transition: .3s ease-in-out;
      @include tablet {
        font-size: 5rem;
      }
      &:before {
        content: '';
        position: absolute;
        left: -2rem;
        width: 1.2rem;
        height: 1.2rem;
        transform: translateY(-50%);
        top: 50%;
        border-radius: 100%;
        background: #0ED6DC;
        box-shadow: -2px 3px 7px rgba(11, 45, 55, 0.12);
      }
    }
    &__desc {
      font-family: 'Roboto', sans-serif;
      font-size: 1.4rem;
      line-height: 1.25;
      color: #fff;
      opacity: 0.5;
      transition: .3s ease-in-out;
    }
  }

  .body {
    &--light {
      .sidebar {
        &__num {
          color: #414D55;
          opacity: 1;
        }
        &__desc {
          color: #414D55;
        }
        &__title {
          color: #414D55;
        }
      }
    }
  }
</style>
