/** * Created by vouill on 11/13/17. */

<template>
  <div class="loader loader--style2">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="40px"
      height="40px"
      viewBox="0 0 50 50"
      style="enable-background:new 0 0 50 50;"
      xml:space="preserve"
    >
      <path
        fill="#000"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
    <span class="loader__text">Загрузка</span>
  </div>
</template>

<style lang="scss">
.loader {
  height: 100px;
  width: 100%;
  text-align: center;
  padding: 1em;
  margin: 0 auto 1em;
  display: flex;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;
  font-size: 14px;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  letter-spacing: 0.1px;
}
.loader__text {
  margin-top: 1rem;
  transition: .3s ease-in-out;
}
.body {
  &--light {
    .loader__text {
      color: rgba(65, 77, 85, 0.5);
    }
  }
  &--dark {
    .loader__text {
      color: rgba(243,249,250, 0.5);
    }
  }
}
.loader {
  svg path {
    fill: rgb(14, 214, 220);
  }
}

</style>

<script>
export default {
  name: "loading",
  props: {},
  components: {},
  data() {
    return {};
  }
};
</script>
