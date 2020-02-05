<template>
  <transition name="fade" mode="out-in">
    <div class="login-form">
      <form v-if="!this.$store.getters.isPhoneApproved"
        class="login-form__form"
        @submit.prevent="login"
      >
        <input
          class="login-form__input phone-input"
          type="tel"
          placeholder="телефон"
          v-bind:required="this.$store.getters.isPhoneApproved"
          v-model="phoneNumber"
        />
        <button class="login-form__btn" type="submit">Отправить</button>
      </form>
      <form v-else
        class="login-form__form"
        @submit.prevent="login"
      >
        <input
          class="login-form__input"
          v-bind:required="!this.$store.getters.isPhoneApproved"
          v-model="password"
          type="password"
          placeholder="Пароль"
        />
        <button class="login-form__btn" type="submit">Войти</button>
      </form>
    </div>
  </transition>
</template>

<script>
import { PASS_REQUEST } from "actions/pass";
import { AUTH_REQUEST } from "actions/auth";
export default {
  name: "Form",
  data() {
    return {
      password: "",
      phoneNumber: "",
      phoneChecked: false
    };
  },
  methods: {
    login: function() {
      if (this.$store.getters.isPhoneApproved) {
        const { password } = this;
        this.$store.dispatch(AUTH_REQUEST, { password }).then(() => {
          this.$router.push("/");
        });
      } else {
        const { phoneNumber } = this;
        this.$store.dispatch(PASS_REQUEST, { phoneNumber });
      }
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

.body {
  &--light {
    .login-form__input {
      background: rgba($grey, 0.5);
      box-shadow: 0 0.1rem 0.8rem rgba($shadow-color, 0.02);
      &::placeholder {
        color: $white;
      }
    }
  }
}
.login-form {
  width: 100%;
  &__form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    transition: .2s ease-in-out;
  }
  &__input {
    background: rgba($white, 0.05);
    box-shadow: 0 0.1rem 0.8rem rgba($shadow-color, 0.02);
    border-radius: 3.7rem;
    border: 1px solid rgba($white, 0.04);
    height: 4.8rem;
    padding: 1.4rem;
    max-width: 34rem;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    font-size: 1.6rem;
    color: rgba($white, 0.8);
    transition: .15s ease-in-out;
    &::placeholder {
      color: $white;
      transition: border .15s ease-in-out;
      opacity: 1;
    }
    &:focus {
      box-shadow: 0 0.1rem 0.8rem rgba($shadow-color, 0.06);
      border: 1px solid rgba($white, 0.12);
      &::placeholder {
        opacity: 0.1;
      }
    }
    margin-bottom: 6rem;
    @include tablet {
      margin-bottom: 8rem;
    }
    @include desktop-lg {
      margin-bottom: 16rem;
    }
    &--password {
      margin-bottom: 2rem;
      @include tablet {
        margin-bottom: 4rem;
      }
      @include desktop-lg {
        margin-bottom: 4rem;
      }
    }
  }
  &__text {
    color: $grey;
    font-size: 1.4rem;
    text-decoration: none;
    cursor: pointer;
    opacity: 0.5;
    margin-bottom: 4rem;
    text-transform: lowercase;
    transition: .25s ease-in-out;
    padding: 1.5rem 0;
    @include desktop-lg {
      margin-bottom: 12rem;
    }
    &:hover {
      color: rgba($white, .8);
    }
  }
  &__btn {
    color: $white;
    background: $main;
    box-shadow: 0 0.1rem 0.8rem rgba($shadow-color, 0.1);
    border-radius: 3.7rem;
    height: 4.8rem;
    box-sizing: border-box;
    padding: 0 1.4rem;
    font-weight: 500;
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 23rem;
    width: 100%;
    transition: .3s ease-in-out;
    &:hover {
      background: $main-hover;
    }
  }
}
</style>
