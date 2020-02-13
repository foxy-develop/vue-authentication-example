<template>
  <div id="app"
       v-bind:class="[ 'body', 'body--'+this.$store.getters.theme ]">
    <Header v-if="this.$store.getters.isProfileLoaded" />
    <main v-bind:class="[ this.$store.getters.isAuthenticated
       ? 'main'
       : 'main main--bg' ]">
      <div class="main main__inner">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "components/header";
import { USER_REQUEST } from "actions/user";

export default {
  components: {
    Header
  },
  name: "app",
  created: function() {
    if (this.$store.getters.isAuthenticated && !this.$store.getters.isProfileLoaded) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700|Rubik:400,500&display=swap&subset=cyrillic');
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.35s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transition-timing-function: ease-out;
}

body, .body {
  font-size: 100%;
  font-stretch: normal;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  line-height: 1;
  min-height: 100vh;
  margin: 0;
}
button {
  border: 0;
  border-collapse: collapse;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  vertical-align: baseline;
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

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}
* {
  outline: none;
}
body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #F1F5F8;
  box-sizing: border-box;
  height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}
.body {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: #F1F5F8;
  box-sizing: border-box;
  &:before {
    position: fixed;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(50% 69.11% at 50% 50%, #485F61 0%, #2F3739 100%);
    z-index: 1;
    transition: .3s ease-in-out;
    opacity: 1;
  }
  &--dark {
    &:before {
      opacity: 1;
    }
  }
  &--light {
    &:before {
      opacity: 0;
    }
  }
}
.main {
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  z-index: 1;
  &--bg {
    background: url("assets/ART.svg");
    background-repeat: no-repeat;
    background-position: center;
    animation-fill-mode: forwards;
    animation: reveal;
    animation-duration: 1.4s;
    animation-timing-function: cubic-bezier(0,.31,.47,1.47);
    @include desktop {
      background-size: contain;
    }
  }
  &__inner {
    display: flex;
    padding: 1rem 1.5rem;
    max-width: 139rem;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    box-sizing: border-box;
    flex-grow: 1;
    @include desktop {
      flex-direction: row;
    }
  }
}
@keyframes reveal {
  from {
    background-position-y: 30%;
  }
  to {
    background-position-y: 50%;
  }
}
</style>
