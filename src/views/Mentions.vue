<template>
  <Layout>
    <template v-slot:sidebar>
    </template>
    <template v-slot:title>
      Топ выдачи
    </template>
    <template v-slot:content >
      <div class="content__caption">
        <div class="content__legend">
          <span class="content__info content__info--danger">Негативные</span>
          <span class="content__info">Позитивные</span>
        </div>
        <router-link
          tag="button"
          to="/"
          exact
          class="content__btn"
        >
          Назад
        </router-link>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '../components/layout';

export default {
  name: "Mentions",
  components: {
      Layout
  }
}
</script>

<style scoped>

</style>
