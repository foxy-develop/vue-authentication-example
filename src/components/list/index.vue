<template>
  <transition-group class="mentions" tag="div" name="list" v-if="this.$store.getters.isDataLoaded">
    <div class="mentions__item" v-for="(mention, index) in this.$store.getters.getMentions"
         :key="mention.hash"
         :style="{animationDelay: index < 25 ? index * 100 + 'ms' : 100 + 'ms' }">

      <div :class="['mentions__icon', mention.content_type ]">
        <img :src=mention.favicon :alt=mention.domain  >
      </div>
      <div class="mentions__title"> {{ mention.title }} </div>
      <div class="mentions__rating">
        <strong :class=" mention.content_type ">{{ mention.position }}</strong>
        <span>рейтинг</span>
      </div>
      <a :href=mention.link class="mentions__link" title="Перейти">
        <span>...</span>
      </a>
    </div>
  </transition-group>
  <loading v-else></loading>
</template>

<script>
    import loading from "../lib/loading";
    export default {
        name: "List",
        components: {
            loading
        },
        data() {
            return {
                mentions: null,
            }
        },
        methods: {
            fillMentions: function () {
                this.mentions = this.$store.getters.getMentions;
            }
        },
        mounted() {
          this.fillMentions();
        },
    }
</script>

<style lang="scss">
  @keyframes reveal {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @mixin tablet {
    @media (min-width: 768px) { @content; }
  }
  .content__mentions {
    padding-left: 0;
    padding-right: 0;
    position: relative;
  }
  .mentions {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #414D55;
    padding: 0 3rem;
    &:empty {
      padding: 5rem 1rem;
      &:after {
        content: 'Не найдено упоминаний по запросу...';
        position: absolute;
        width: 100%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        text-align: center;
        background: rgba(255,255,255,0);
        transition: .3s ease-in-out;

      }

    }
    @include tablet {
      max-height: calc(100vh - 484px);
      overflow-y: auto;
    }
    &::-webkit-scrollbar {
      background-color: rgba(255,255,255,0);
      width: 5px
    }

    &::-webkit-scrollbar-track {
      background-color: rgba(255,255,255,0);
    }

    &::-webkit-scrollbar-thumb {
      border: 5px solid rgb(14, 214, 220)
    }

    &::-webkit-scrollbar-button {
      display: none
    }
    &__item {
      display: flex;
      box-sizing: border-box;
      border-radius: 8px;
      background: #F8FAFB;
      height: 60px;
      margin-bottom: 15px;
      padding: 10px;
      width: 100%;
      flex-direction: row;
      align-items: center;
      animation: reveal;
      animation-duration: .3s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
      opacity: 0;
      transform: translateX(30px);
    }
    &__link {
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      background: #fff;
      border-radius: 100%;
      color: #0ED6DC;
      font-size: 20px;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      span {
        height: 2px;
        position: relative;
        top: -13px;
      }
    }
    &__rating {
      display: flex;
      flex-shrink: 0;
      flex-direction: row;
      font-family: 'Rubik', sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 20px;
      align-items: center;
      margin-right: 20px;
      margin-left: auto;
      strong {
        font-weight: normal;
        font-size: 16px;
        margin-right: 10px;
      }
    }
    &__title {
      margin-right: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__icon {
      width: 40px;
      margin-right: 20px;
      display: flex;
      flex-shrink: 0;
      position: relative;
      &:after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        border-radius: 100%;
        border: 2px solid #F8FAFB;
        width: 12px;
        height: 12px;
        bottom: 0;
        transform: translateX(-50%) translateY(50%);
        left: 50%;
        transition: .3s ease-in-out;
      }
      img {
        width: 100%;
        max-width: 100%;
        height: auto;
      }
    }
  }
  .positive {
    color: #0ED6DC;
    &:after {
      background: #0ED6DC;
    }

  }
  .negative:after {
    color: #F1754E;
    &:after {
      background: #F1754E;
    }
  }

  .body {
    &--light {

    }
    &--dark {
      .mentions {
        color: #D6D8D8;
      }
      .mentions__item {
        background: rgba(248, 250, 251, 0.1);
        color: #D6D8D8;
      }
      .mentions__link {
        background: #444F55;

      }
    }
  }
</style>
