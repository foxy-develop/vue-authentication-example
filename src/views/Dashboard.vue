<template>
  <Layout>
    <template v-slot:sidebar>
      <div class="sidebar__title">
        Cтатистика выдачи
      </div>
      <Counters/>
    </template>
    <template v-slot:title>
      Общая статистика выдачи
    </template>
    <template v-slot:content >
        <div class="content__main">
        <StatCharts></StatCharts>
        <div class="content__caption">
          <div class="content__legend">
            <span class="content__info content__info--danger">Негативные</span>
            <span class="content__info">Позитивные</span>
          </div>
          <router-link
            tag="button"
            to="/mentions"
            exact
            class="content__btn"
          >
            Выдача
          </router-link>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '../components/layout';
import StatCharts from '../components/chart';
import Counters from '../components/counters';

export default {
    name: "Dashboard",
    components: {
      Layout,
      StatCharts,
      Counters
    },
}
</script>

<style scoped lang="scss">
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

.content {
  z-index: 1;
  flex-grow: 1;
  flex-direction: column;
  padding-bottom: 4rem;
  box-sizing: border-box;
  display: flex;
  &__title {
    color: #fff;
    margin-bottom: 2rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 4rem;
    transition: .3s ease-in-out;
    display: none;
    @include tablet {
      display: flex;
    }
  }
  &__main {
    background: rgba(255, 255, 255, 0.05);
    border-radius: .8rem;
    flex-grow: 1;
    padding: 1rem;
    box-sizing: border-box;
    transition: .3s ease-in-out;
    flex-direction: column;
    display: flex;
    @include tablet {
      padding: 2rem;
    }
    @include desktop {
      padding: 3rem;
    }
    @include desktop-lg {
      padding: 4rem;
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
    &-btn {
      &:first-child {
        border-top-left-radius: .8rem;
        border-bottom-left-radius: .8rem
      }
      &:last-child {
        border-top-right-radius: .8rem;
        border-bottom-right-radius: .8rem
      }
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: calc(100% / 3);
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
        background: #03C7CD;
        box-shadow: 0px 5px 13px rgba(20, 78, 110, 0.1);
        &:hover {
          background: #03C7CD;
        }
      }
    }
  }
  &__caption {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    display: flex;
  }
  &__legend {
    flex-direction: row;
    display: flex;
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    line-height: 2;
    letter-spacing: 0.416667px;
    color: #FFFFFF;
    text-transform: uppercase;
    transition: .3s ease-in-out;
    margin: 0 auto;
    margin-bottom: 4rem;
    @include tablet {
      margin: 0;
    }
  }
  &__info {
    margin-left: 3rem;
    position: relative;
    display: flex;
    &:last-child {
      margin-left: 5.2rem;
    }
    &:before {
      position: absolute;
      left: -2.5rem;
      content: '';
      transform: translateY(-50%);
      top: 50%;
      border: #0ED6DC .4rem solid;
      border-radius: 100%;
      height: 1.2rem;
      width: 1.2rem;
      transition: .3s ease-in-out;
    }
    &--danger {
      &:before {
        border-color: #F17105;
      }
    }
  }
  &__btn {
    background: #0ED6DC;
    box-shadow: 0px 1px 9px rgba(11, 44, 55, 0.16);
    border-radius: 7rem;
    font-family: 'Rubik', sans-serif;
    letter-spacing: .1px;
    color: #fff;
    font-size: 1.8rem;
    line-height: 2rem;
    height: 4.8rem;
    width: 23rem;
    transition: .3s ease-in-out;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 75%;
    align-items: center;
    justify-content: center;
    @include tablet {
      position: static;
      transform: translateX(0);
      cursor: pointer;
      &:hover {
        background: #13B0B5;
      }
    }
  }
}
.body {
  &--dark {
    .content {
      &__title {
        color: #fff;
      }
      &__main {
        box-shadow: none;
        background: rgba(255, 255, 255, 0.05);
      }
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
      &__legend {
        color: #FFFFFF;
      }
    }
  }
  &--light {
    .content {
      &__title {
        color: #414D55;
      }
      &__main {
        background: #FFFFFF;
        box-shadow: 0px 1px 21px rgba(20, 46, 110, 0.1);
      }
      &__control-btn {
        background: #F3F9FA;
        color: #637172;
        &:hover {
          background: rgb(227, 229, 230);
        }
        &--active {
          background: #FFFFFF;
          color: #03C8CD;
          &:hover {
            background: #FFFFFF;
          }
        }
      }
      &__legend {
        color: #414D55;
      }
    }
  }
}
</style>
