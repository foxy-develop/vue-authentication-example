<template>
  <div class="mentions-counter" v-if="this.$store.getters.isDataLoaded">
    <Toggler
      :to="this.$store.getters.getMentionsTotal.positive"
      :name="'позитив'"
      :alt="'positive'"
      :active=" this.$store.getters.getTypes.positive === '' ">
    </Toggler>
    <Toggler
      :to="this.$store.getters.getMentionsTotal.negative"
      :name="'негатив'"
      :alt="'negative'"
      :active=" this.$store.getters.getTypes.negative === '' ">
    </Toggler>
  </div>
</template>

<script>
  import Toggler from '../toggler';
    export default {
        name: "MentionsCounters",
        components: {
            Toggler
        }
    }
</script>

<style lang="scss">
  @mixin tablet {
    @media (min-width: 768px) { @content; }
  }
  @mixin desktop {
    @media (min-width: 1024px) { @content; }
  }
  .mentions-counter {
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    transition: .3s ease-in-out;
    animation: reveal;
    animation-fill-mode: forwards;
    animation-duration: .3s;
    animation-delay: .3s;
    opacity: 0;
    transform: translateX(30px);
    margin-bottom: 3rem;
    @include tablet {
      margin-bottom: 0;
    }
    @include desktop {
      flex-direction: column;
    }
    &__item {
       display: flex;
       flex-direction: column;
       height: 100px;
       align-items: center;
       justify-content: center;
       background: #F9FBFD;
       width: 100%;
       position: relative;
       transition: .3s ease-in-out;
       cursor: pointer;
        @include desktop {
          height: 134px;
        }
      &:after {
         content: '';
         position: absolute;
         left: 50%;
         transform: translateX(-50%) translateY(50%);
         height: 25px;
         width: 25px;
         border-radius: 100%;
         border: 5px solid #F9FBFD;
         background: #fff;
         bottom: 0;
         box-sizing: border-box;
         transition: .3s ease-in-out;
         z-index: 102;
       }
        &--active {
           background: #FFF;
           box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
           transition: .3s ease-in-out;

         }
        &:first-child {
           border-top-left-radius: 8px;
           border-bottom-left-radius: 8px;
           z-index: 101;
           &.mentions-counter__item--active {
             &:after {
               background: #0ED6DC;
             }
           }
           @include desktop {
             border-top-right-radius: 8px;
             border-bottom-left-radius: 0;
           }
            .mentions-counter__num {
              color: #0ED6DC;
            }
        }
        &:last-child {
             border-top-right-radius: 8px;
             border-bottom-right-radius: 8px;
          &.mentions-counter__item--active {
            &:after {
              background: #F1754E;
            }
          }
             @include desktop {
               border-bottom-left-radius: 8px;
               border-top-right-radius: 0;
             }
            .mentions-counter__num {
              color: #F1754E;
            }
          }
    }
    &__num {
       font-style: normal;
       font-weight: bold;
       font-size: 40px;
       line-height: 20px;
       margin-bottom: 12px;
     }
    &__text {
       font-size: 8px;
       line-height: 9px;
       text-align: center;
       letter-spacing: 0.8px;
       text-transform: uppercase;
       color: #636D73;
       transition: .3s ease-in-out;
     }
    }
    .body {
    &--dark {
    .mentions-counter {
      &__item {
         background: rgba(249, 251, 253, 0.05);
      &:after {
         border-color: #64737A;
       }
      &--active {
         background: rgba(255, 255, 255, 0.1);
         box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
       }
      }
      &__text {
         color: #D6D8D8;
       }
      }
    }
  }


  @keyframes reveal-title {
    from {
      opacity: 0;
      transform: translateX(30px);
    } to {
        opacity: 1;
        transform: translateX(0);
      }
  }
</style>
