<template>
  <transition name="fade" mode="out-in">
    <div v-bind:class="[this.$store.getters.hasError ? 'form-wrapper has-error' : 'form-wrapper']">
      <form v-if="!this.$store.getters.isPhoneApproved" class="login-form__form" @submit.prevent="getPass">
        <imask-input
          class="login-form__input phone-input"
          v-model="phone"
          :mask="mask"
          :unmask="false"
          :value="value"
          placeholder="телефон"
        />
        <button class="login-form__btn" type="submit">Отправить</button>
      </form>
      <form v-else class="login-form__form no-delay" @submit.prevent="login">
        <input
          class="login-form__input"
          v-bind:required="!this.$store.getters.isPhoneApproved"
          v-model="password"
          type="password"
          placeholder="Пароль"
        />
        <button class="login-form__btn" type="submit">Войти</button>
      </form>
      <div v-show="this.$store.getters.hasError" class="login-form__notif"> {{ this.$store.getters.getMessage }} </div>
    </div>
  </transition>
</template>

<script>
import { PASS_REQUEST } from "actions/pass";
import { AUTH_REQUEST } from "actions/auth";
import { IMaskComponent } from 'vue-imask';

export default {
  name: "Form",
  data() {
    return {
      password: "000000",
      phone: "+38 (063) 307-67-19",
      phoneChecked: false,
      value: "",
      mask: '+00 (000) 000-00-00'
    };
  },
  components: {
    'imask-input': IMaskComponent
  },
  methods: {
    login: function() {
        const { password, phone } = this;
        this.$store.dispatch(AUTH_REQUEST, { password, phone }).then(() => {
          this.$router.push("/");
        });
    },
    getPass: function() {
      const { phone } = this;
      this.$store.dispatch(PASS_REQUEST, phone );
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
.form-wrapper {
  width: 100%;
  position: relative;
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
  &__notif {
    color: red;
    position: absolute;
    top: 5.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    transform: translateX(-50%);
    left: 50%;
    opacity: 0;
    transition: .3s ease-in-out;
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
  &__input, &__btn {
    animation: reveal-form;
    animation-duration: .6s;
    animation-delay: 1.2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    transform-origin: top;
    transform: translate(0, -50%);
    opacity: 0;
  }
  &__btn {
    animation-delay: 1.4s;
    animation-duration: .5s;
  }
}
.no-delay {
  .login-form {
    &__input, &__btn {
      animation-duration: .3s;
      animation-delay: 0.1s;
    }
  }
}
@keyframes reveal-form {
  from{
    transform: translate(0, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0, 0);
    opacity: 1;
  }
}
.has-error {
  .login-form__input {
    border-color: rgba(132, 30, 30, .5);
    &:not(:focus) {
      background: rgba(236, 34, 34, 0.05);
      &::placeholder {
        color: rgba(255, 190, 183, 0.84);
      }
    }
  }
  .login-form__notif {
    opacity: 1;
    transition: .3s ease-in-out;
  }
}
</style>
