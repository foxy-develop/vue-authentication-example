<template>
  <Layout>
    <template v-slot:sidebar>
      <div class="sidebar__content sidebar__content--mentions">
        <MentionsCounters></MentionsCounters>
      </div>
    </template>
    <template v-slot:mentionsHeader>
      <div class="sidebar__header">
        <router-link
          tag="button"
          to="/"
          exact
          class="back-btn"
          title="На главную"
        >
          <svg width="36" height="8" viewBox="0 0 36 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="back-btn__arrow"  d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM36 3.5L1 3.5V4.5L36 4.5V3.5Z" />
          </svg>
        </router-link>
        <span>Топ выдачи</span>
      </div>

    </template>
    <template v-slot:title>Топ выдачи</template>
    <template v-slot:filter>
      <MentionsFilter></MentionsFilter>
    </template>
    <template v-slot:content >
      <div class="content__main content__mentions">
        <List></List>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '../components/layout';
import MentionsFilter from '../components/mentions-filter';
import List from '../components/list';
import MentionsCounters from '../components/mentions-counter';
export default {
  name: "Mentions",
  components: {
      Layout,
      MentionsFilter,
      List,
      MentionsCounters
  }
}
</script>

<style lang="scss">
  @mixin desktop {
    @media (min-width: 1024px) { @content; }
  }
  .sidebar__header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    @include desktop {
      justify-content: center;
    }
    height: 80px;
    span {
      margin-left: 2rem;
      font-family: 'Rubik', sans-serif;
      font-size: 2.8rem;
      line-height: 4rem;
      font-weight: 500;
      color: #fff;
      transition: .3s ease-in-out;
      display: flex;
      justify-content: center;
      animation: reveal;
      animation-fill-mode: forwards;
      animation-duration: .3s;
      animation-delay: .3s;
      opacity: 0;
      transform: translateX(30px);
      @include desktop {
        display: none;
      }
    }
  }

  .sidebar__content.sidebar__content--mentions {
    flex-grow: 1;
    align-items: center;
    box-sizing: border-box;
    justify-content: flex-start;
    @include desktop {
      padding-right: 20px;
    }
  }

  .body {
    &--light {
      .sidebar__header span {
        color: #414D55;
      }
    }
  }
.back-btn {
  padding: 20px 10px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 120px;
  box-sizing: border-box;
  cursor: pointer;
  animation: reveal;
  animation-fill-mode: forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  opacity: 0;
  transform: translateX(30px);
  &__arrow {
    transition: .3s ease-in-out;
    fill: #9BA9AE;
  }
  &:hover {
    .back-btn__arrow {
      fill: #0ED6DC;
    }
  }
}

</style>
