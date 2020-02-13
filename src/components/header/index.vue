<template>
  <header class="header">
    <div class="header__inner">
      <div v-if="this.$store.getters.isProfileLoaded" class="header__logo">
        <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="157" height="22" viewbox="0 0 157 22" fill="none">
          <path d="M55.5831 13.5236H51.6522V20.9299H55.5831V13.5236Z" fill="#0ED6DC"></path>
          <path d="M45.5983 1.31079V5.01394H51.4946H55.8186H61.7149V1.31079H45.5983Z" fill="#0ED6DC"></path>
          <path class="logo--color" d="M83.5709 4.14724C81.7627 2.25628 79.4827 1.31079 76.7311 1.31079H70.1272V5.01394H76.7311C78.4607 5.01394 79.8758 5.56547 80.9765 6.74733C82.0771 7.92918 82.6275 9.34741 82.6275 11.1596C82.6275 12.9718 82.0771 14.4688 80.9765 15.5718C79.8758 16.6749 78.4607 17.3052 76.7311 17.3052H70.1272V21.0084H76.7311C79.4827 21.0084 81.7627 20.0629 83.5709 18.1719C85.3791 16.281 86.3225 13.9173 86.3225 11.1596C86.3225 8.32313 85.3791 6.03821 83.5709 4.14724Z"></path>
          <path class="logo--color" d="M130.349 21.3238C127.361 21.3238 124.845 20.3783 122.88 18.4086C120.914 16.4388 119.971 13.9963 119.971 11.1599C119.971 8.24463 120.914 5.80212 122.88 3.91115C124.845 1.9414 127.282 0.995911 130.349 0.995911C132.157 0.995911 133.808 1.38986 135.38 2.25656C136.874 3.12325 138.132 4.22632 138.918 5.64454L135.537 7.6143C135.066 6.74761 134.358 6.0385 133.415 5.56575C132.471 5.09301 131.449 4.85664 130.349 4.85664C128.383 4.85664 126.811 5.48696 125.631 6.66882C124.452 7.85067 123.823 9.42648 123.823 11.3174C123.823 13.2084 124.452 14.7842 125.631 15.9661C126.811 17.1479 128.383 17.7783 130.349 17.7783C131.449 17.7783 132.55 17.5419 133.415 17.0691C134.358 16.5964 135.066 15.8873 135.537 15.0206L138.918 16.9904C138.053 18.4086 136.874 19.5117 135.38 20.3783C133.886 20.9299 132.235 21.3238 130.349 21.3238Z"></path>
          <path class="logo--color" d="M157 20.9296H152.44L144.578 10.8444L152.126 1.31079H156.686L149.138 10.8444L157 20.9296Z"></path>
          <path d="M35.2994 13.5233C36.4787 12.9718 37.4221 12.1839 38.1297 11.1596C38.8372 10.1353 39.1517 9.03225 39.1517 7.7716C39.1517 5.95942 38.5228 4.46241 37.1863 3.20176C35.9284 1.94111 34.356 1.31079 32.4692 1.31079H22.8778L24.4502 4.93515H32.5478C33.2554 4.93515 33.9629 5.25031 34.4346 5.80184C34.985 6.35337 35.2208 7.06249 35.2208 7.85039C35.2208 8.6383 34.985 9.34741 34.4346 9.89894C33.8843 10.4505 33.2554 10.7656 32.5478 10.7656H29.7962L34.356 21.0084H38.5228L35.2994 13.5233Z"
                fill="#0ED6DC"></path>
          <path d="M12.5002 1.31079H8.3335L15.016 17.2264H5.81773L7.39008 13.5233H3.14472L0 20.9296H3.45919H4.24537H16.5884H17.2173H20.8337L12.5002 1.31079Z" fill="#0ED6DC"></path>
          <path class="logo--color" d="M110.615 3.9109C108.571 1.94114 106.134 0.91687 103.304 0.91687V4.69881C105.112 4.69881 106.685 5.32913 107.864 6.51099C109.122 7.69284 109.751 9.26865 109.751 11.1596C109.751 13.0506 109.122 14.5476 107.864 15.8083C106.606 16.9901 105.112 17.6204 103.304 17.6204C101.496 17.6204 99.9234 16.9901 98.7441 15.8083C97.4862 14.6264 96.9359 13.0506 96.8573 11.2384H92.9264C92.9264 14.0749 93.9484 16.5174 95.9139 18.4871C97.8793 20.4569 100.395 21.4812 103.225 21.4812C106.134 21.4812 108.571 20.4569 110.615 18.4871C112.659 16.5174 113.603 14.0749 113.603 11.2384C113.603 8.24438 112.659 5.88066 110.615 3.9109Z"></path>
        </svg>
      </div>
      <div v-if="this.$store.getters.isProfileLoaded" class="header__userboard">
        <Switcher class="header__switcher"/>
        <div class="header__user">
          <svg class="header__userlogo" xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewbox="0 0 20 21" fill="none">
            <path d="M19.2154 17.1377C18.7137 15.9589 17.9856 14.8881 17.0718 13.985C16.1607 13.0794 15.0814 12.3573 13.8936 11.8587C13.883 11.8534 13.8723 11.8508 13.8617 11.8455C15.5186 10.6583 16.5957 8.7245 16.5957 6.54271C16.5957 2.92839 13.6436 0 10 0C6.35641 0 3.4043 2.92839 3.4043 6.54271C3.4043 8.7245 4.48142 10.6583 6.13832 11.8481C6.12769 11.8534 6.11705 11.856 6.10641 11.8613C4.91493 12.3599 3.84579 13.0749 2.92824 13.9877C2.01524 14.8914 1.2873 15.962 0.784636 17.1403C0.290815 18.2939 0.0244864 19.5306 6.65049e-05 20.7837C-0.000643344 20.8118 0.00433542 20.8398 0.0147096 20.8661C0.0250837 20.8923 0.0406433 20.9162 0.0604714 20.9363C0.0802996 20.9565 0.103995 20.9725 0.130162 20.9834C0.156329 20.9944 0.184437 21 0.212831 21H1.80857C1.92559 21 2.01867 20.9077 2.02133 20.7942C2.07452 18.7575 2.89898 16.8501 4.35642 15.4044C5.86439 13.9085 7.86704 13.0854 10 13.0854C12.133 13.0854 14.1356 13.9085 15.6436 15.4044C17.101 16.8501 17.9255 18.7575 17.9787 20.7942C17.9813 20.9103 18.0744 21 18.1914 21H19.7872C19.8156 21 19.8437 20.9944 19.8698 20.9834C19.896 20.9725 19.9197 20.9565 19.9395 20.9363C19.9594 20.9162 19.9749 20.8923 19.9853 20.8661C19.9957 20.8398 20.0006 20.8118 19.9999 20.7837C19.9733 19.5226 19.71 18.2959 19.2154 17.1377V17.1377ZM10 11.0804C8.77926 11.0804 7.63033 10.6082 6.76598 9.75075C5.90162 8.89334 5.42556 7.75364 5.42556 6.54271C5.42556 5.33178 5.90162 4.19209 6.76598 3.33467C7.63033 2.47726 8.77926 2.00503 10 2.00503C11.2207 2.00503 12.3697 2.47726 13.234 3.33467C14.0984 4.19209 14.5744 5.33178 14.5744 6.54271C14.5744 7.75364 14.0984 8.89334 13.234 9.75075C12.3697 10.6082 11.2207 11.0804 10 11.0804Z"></path>
          </svg>
          <span>{{ name }}</span>
          <button @click="logout" class="header__exit">
            <svg width="18" height="14" viewbox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.7002 4V2.5C11.7002 2.10218 11.5422 1.72064 11.2609 1.43934C10.9796 1.15804 10.5981 1 10.2002 1H3.00024C2.60242 1 2.22089 1.15804 1.93958 1.43934C1.65828 1.72064 1.50024 2.10218 1.50024 2.5V11.5C1.50024 11.8978 1.65828 12.2794 1.93958 12.5607C2.22089 12.842 2.60242 13 3.00024 13H10.2002C10.5981 13 10.9796 12.842 11.2609 12.5607C11.5422 12.2794 11.7002 11.8978 11.7002 11.5V10"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M14.1001 4L17.1001 7L14.1001 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.86304 7H17.1005" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(-120px);
  } to {
      opacity: 1;
      transform: translateY(0);
    }
}
@function rem($px) {
  @return $px / 10 * 1rem;
}

@mixin tablet {
  @media (min-width: 768px) { @content; }
}
@mixin desktop {
  @media (min-width: 1024px) { @content; }
}

@mixin desktop-lg {
  @media (min-width: 1200px) { @content; }
}

$white: #fff;
$main: #0ED6DC;
$main-hover: #13B0B5;
$grey: #C0C6CA;
$shadow-color: #142e6e;
$bg-light: #F9FBFD;
$bg-dark: rgba(249, 251, 253, 0.05);
.body {
  &--light {
    .header {
      &__switch {
        .dark {
          display: none;
          transform: translateY(-100%);
          opacity: 0;
        }
        .light {
          display: block;
          transform: translateY(0);
          opacity: 1;
        }
      }
      &__user {
        color: #414D55;
      }
      &__userlogo {
        fill: #7B868C;
      }
      &__exit {
        stroke: #95A4AA;
      }
    }
  }
  &--dark {
    .header {
      &__switch {
        .light {
          display: none;
          transform: translateY(-100%);
          opacity: 0;
        }
        .dark {
          display: block;
          transform: translateY(0);
          opacity: 1;
        }
      }
      &__user {
        fill: #7B868C;
        color: #D6D8D8;
      }
      &__userlogo {
        fill: #7B868C;
      }
      &__exit {
        stroke: #7B868C;
      }
    }
  }
}
.logo {
  width: 15.7rem;
  height: 2.2rem;
  &--color {
    transition: .3s ease-in-out;
    fill: #fff;
  }
}
.body {
  &--dark {
    .logo {
      &--color {
        fill: #fff;
      }
    }
  }
  &--light {
    .logo {
      &--color {
        fill: #000;
      }
    }
  }
}
.header {
  display: flex;
  flex-grow: 0;
  align-items: center;
  z-index: 2;
  box-sizing: border-box;
  &__logo {
    animation: reveal;
    animation-duration: .3s;
    animation-timing-function: ease-in;
  }
  &__userboard {
    display: flex;
    animation: reveal;
    animation-duration: .3s;
    animation-timing-function: ease-in;
  }
  &__inner {
    display: flex;
    padding: 3rem 1.5rem;
    max-width: 139rem;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  &__user {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.25;
    transition: .3s ease-in-out;
    box-sizing: border-box;
    color: #D6D8D8;
    transition: .3s ease-in-out;
    span {
      display: none;
      @include tablet {
        display: inline;
      }
    }
    @include tablet {
      margin-left: 4rem;
    }
  }
  &__userlogo {
    display: none;
    @include tablet {
      display: inline;
      margin-right: 2rem;
      transition: .3s ease-in-out;
      fill: #7B868C;
    }
  }
  &__exit {
    transition: .3s ease-in-out;
    height: 4rem;
    width: 4rem;
    stroke: #7B868C;
    background: rgba(255,255,255,0);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
    &:hover {
      stroke: $main;
    }
  }
}
</style>

<script>
import { mapGetters, mapState } from "vuex";
import { AUTH_LOGOUT } from "actions/auth";
import Switcher from "components/switcher";

export default {
  name: "navigation",
  components: { Switcher },
  methods: {
    logout: function() {
      this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push("/login"));
    }
  },
  computed: {
    ...mapGetters(["getProfile", "isAuthenticated", "isProfileLoaded"]),
    ...mapState({
      authLoading: state => state.auth.status === "loading",
      name: state => `${state.user.profile.name}`
    })
  }
};
</script>
