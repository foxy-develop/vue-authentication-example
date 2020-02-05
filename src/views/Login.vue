<template>
  <section class="login-form">
    <img class="login-form__img" src="../assets/crystal.png" alt="crystal">
    <img class="login-form__logo" src="../assets/logo.svg" alt="ARTDOCK">
    <Form />
  </section>
</template>

<script>

import { PASS_REQUEST } from "actions/pass";
import { AUTH_REQUEST } from "actions/auth";
import Form from "../components/form";

export default {
  name: "Login",
  components: {Form},
  data() {
    return {
      password: "",
      phoneNumber: "",
      phoneChecked: false,
    };
  },
  methods: {
    askPassword: function () {
      const { phoneNumber } = this;
      this.$store.dispatch(PASS_REQUEST, { phoneNumber }).then(() => {
        this.$router.push("/");
      });
    },
    login: function () {
      const { password } = this;
      this.$store.dispatch(AUTH_REQUEST, { password }).then(() => {
        this.$router.push("/");
      });
    }
  }
}

</script>

<style scoped lang="scss">
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

.login-form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  font-family: 'Rubik', sans-serif;
  line-height: 2rem;
  letter-spacing: 0.1px;
  z-index: 1;
  &__img {
    height: auto;
    max-height: 20.5rem;
    max-width: 24.85rem;
    width: 100%;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    left: -3rem;
    @include tablet {
      margin-bottom: 3rem;
    }
  }
  &__logo {
    margin-left: auto;
    margin-right: auto;
    max-width: 22.7rem;
    width: 100%;
    height: auto;
    margin-bottom: 7rem;
    @include tablet {
      margin-bottom: 10rem;
    }
    @include desktop-lg {
      margin-bottom: 12rem;
    }
    @include desktop-lg {
      margin-bottom: 16rem;
    }
  }
}
</style>
