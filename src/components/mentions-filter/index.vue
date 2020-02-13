<template>
  <div class="filter" >
    <div class="filter__item filter__item--keywords" v-if="this.$store.getters.isDataLoaded">
      <svg class="filter__icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9166 35C12.7399 35 12.5616 34.9634 12.395 34.8849C11.9501 34.6817 11.6666 34.2383 11.6666 33.75V20.5484C11.6666 20 11.4435 19.4617 11.0565 19.075L1.34338 9.36829C0.476685 8.50342 0 7.35168 0 6.12671V2.91656C0 1.30829 1.30829 0 2.91656 0H29.1666C30.7751 0 32.0834 1.30829 32.0834 2.91656V6.09161C32.0834 7.32819 31.5732 8.5318 30.6833 9.38995L20.6384 19.0817C20.2316 19.4733 20 20.0201 20 20.5832V27.2168C20 28.5565 19.4168 29.8251 18.4 30.6967L13.7317 34.6982C13.5001 34.8965 13.2101 35 12.9166 35ZM2.91656 2.5C2.68677 2.5 2.5 2.68677 2.5 2.91656V6.12671C2.5 6.68335 2.71667 7.20673 3.11157 7.60162L12.8232 17.3065C13.6768 18.1583 14.1666 19.3399 14.1666 20.5484V31.0333L16.7715 28.8C17.2333 28.4033 17.5 27.8284 17.5 27.2183V20.585C17.5 19.3484 18.0099 18.1451 18.9001 17.2867L28.945 7.59491C29.35 7.2049 29.5816 6.65833 29.5816 6.09497V2.91656C29.5816 2.68677 29.3951 2.5 29.165 2.5H2.91656Z" fill="#9C50BF"/>
        <path d="M37.084 40H26.2505C24.6423 40 23.334 38.6917 23.334 37.0834V22.9166C23.334 21.3083 24.6423 20 26.2505 20H37.084C38.6923 20 40.0005 21.3083 40.0005 22.9166V37.0834C40.0005 38.6917 38.6923 40 37.084 40ZM26.2505 22.5C26.0204 22.5 25.834 22.6868 25.834 22.9166V37.0834C25.834 37.3132 26.0204 37.5 26.2505 37.5H37.084C37.3138 37.5 37.5005 37.3132 37.5005 37.0834V22.9166C37.5005 22.6868 37.3138 22.5 37.084 22.5H26.2505Z" fill="#9C50BF"/>
        <path d="M33.7505 28.75H29.584C28.894 28.75 28.334 28.19 28.334 27.5C28.334 26.81 28.894 26.25 29.584 26.25H33.7505C34.4406 26.25 35.0005 26.81 35.0005 27.5C35.0005 28.19 34.4406 28.75 33.7505 28.75Z" fill="#9C50BF"/>
        <path d="M33.7505 33.75H29.584C28.894 33.75 28.334 33.19 28.334 32.5C28.334 31.81 28.894 31.25 29.584 31.25H33.7505C34.4406 31.25 35.0005 31.81 35.0005 32.5C35.0005 33.19 34.4406 33.75 33.7505 33.75Z" fill="#9C50BF"/>
      </svg>
      <div class="filter__title">
        <Dropdown
                  :options="this.$store.getters.getFilter.keywords"
                  :selected="keywords"
                  v-on:updateOption="updateSelectedKeywords"
                  :placeholder="'Ключевое слово'">
        </Dropdown>
      </div>
    </div>
    <div class="filter__item" v-if="this.$store.getters.isDataLoaded">
      <svg class="filter__icon" width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.6584 15.9543L43.658 15.9542L30.3791 14.7783L29.5824 14.7077L29.2616 13.975L24.0147 1.99253C24.0145 1.99209 24.0143 1.99165 24.0141 1.9912C23.8471 1.61305 23.4583 1.35 23 1.35C22.5403 1.35 22.1529 1.61413 21.9887 1.98964L21.9884 1.99029L16.7406 13.975L16.4197 14.7077L15.623 14.7783L2.34403 15.9541C2.34382 15.9541 2.3436 15.9541 2.34339 15.9541C1.89078 15.9951 1.53085 16.2901 1.40066 16.6756C1.27458 17.0556 1.38706 17.4792 1.71105 17.7564C1.71108 17.7564 1.71112 17.7565 1.71115 17.7565L11.7488 26.342L12.3721 26.8751L12.1861 27.674L9.22685 40.3878C9.2268 40.3881 9.22675 40.3883 9.2267 40.3885C9.13612 40.7807 9.28757 41.1936 9.64036 41.4424L9.64305 41.4443C9.83453 41.58 10.062 41.65 10.2961 41.65C10.496 41.65 10.6937 41.5982 10.8692 41.4958L10.8695 41.4956L22.3199 34.8172L23.0001 34.4205L23.6803 34.8172L35.1281 41.4954C35.5126 41.7195 35.9982 41.6978 36.3585 41.4432L36.3597 41.4424C36.7122 41.1938 36.8637 40.7813 36.7735 40.3893L43.6584 15.9543ZM43.6584 15.9543C44.1107 15.9942 44.4702 16.2891 44.5986 16.6733C44.726 17.0561 44.6132 17.4789 44.2887 17.7567L34.2513 26.342L33.628 26.8751L33.8139 27.674L36.7732 40.3878L43.6584 15.9543Z" stroke="#F2CC6A" stroke-width="2.7"/>
      </svg>
      <div class="filter__title">
        <Dropdown
                  :options="this.$store.getters.getFilter.limit_options"
                  :selected="this.$store.getters.getFilter.limit_options[0]"
                  v-on:updateOption="updateSelectedTop"
                  :placeholder="'ТОП'">
        </Dropdown>
      </div>
    </div>
    <div class="filter__item" v-if="this.$store.getters.isDataLoaded">
      <svg class="filter__icon" width="43" height="32" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.6654 9.85889C25.0122 9.85889 24.3591 10.0934 24.3591 10.646V16.3398L21.6462 11.1652C21.0097 9.94266 20.6581 9.85889 19.7203 9.85889C19.0671 9.85889 18.4141 10.1101 18.4141 10.6627V21.2966C18.4141 21.8326 19.0671 22.1005 19.7203 22.1005C20.3734 22.1005 21.0265 21.8326 21.0265 21.2966V15.6029L24.2083 21.3972C24.5265 21.9833 25.0624 22.1006 25.6653 22.1006C26.3183 22.1006 26.9714 21.8326 26.9714 21.2967V10.6459C26.9714 10.0934 26.3183 9.85889 25.6654 9.85889Z" fill="#9CD059"/>
        <path d="M16.4872 12.1364C16.9896 12.1364 17.2744 11.6006 17.2744 10.981C17.2744 10.445 17.0398 9.85889 16.4872 9.85889H10.5255C9.9561 9.85889 9.38672 10.1268 9.38672 10.6627V21.2967C9.38672 21.8326 9.9561 22.1006 10.5255 22.1006H16.4872C17.0398 22.1006 17.2744 21.5144 17.2744 20.9785C17.2744 20.359 16.9896 19.8231 16.4872 19.8231H11.9992V16.9762H14.5112C15.0639 16.9762 15.2983 16.4403 15.2983 15.9882C15.2983 15.4523 15.0136 14.9666 14.5112 14.9666H11.9992V12.1364H16.4872Z" fill="#9CD059"/>
        <path d="M36.8069 15.9999L42.8381 3.30267C43.0848 2.7831 43.0482 2.17322 42.7409 1.68703C42.4335 1.20084 41.8983 0.906006 41.3231 0.906006H1.74351C0.817245 0.906006 0.0664062 1.65684 0.0664062 2.58311V29.4167C0.0664062 30.343 0.817245 31.0939 1.74351 31.0939H41.3231C41.8983 31.0939 42.4335 30.799 42.7408 30.3128C43.0481 29.8266 43.0848 29.2168 42.838 28.6972L36.8069 15.9999ZM3.42061 27.7396V4.26021H38.6698L33.4352 15.2804C33.219 15.7357 33.219 16.2642 33.4352 16.7195L38.6698 27.7396H3.42061Z" fill="#9CD059"/>
      </svg>
      <div class="filter__title">
        <Dropdown
                  :options="this.$store.getters.getFilter.countries"
                  :selected="this.$store.getters.getFilter.countries[0]"
                  v-on:updateOption="updateSelectedCountry"
                  :placeholder="'Страна'">
        </Dropdown>
      </div>
    </div>
  </div>
</template>


<script>
    import Dropdown from '../dropdown/Dropdown';
    import {MENTIONS_CHANGE_FILTER} from "../../store/actions/mentions";
    export default {
        name: "MentionsFilter",
        components: {
            Dropdown
        },
        data() {
            return {
              data: '',
              per_page: '',
              country: '',
              keywords:''
            }
        },
        methods: {
            saveFilter: function () {
                const options = {
                    keyword_id: this.keywords,
                    per_page: this.per_page,
                    region_id: this.country
                };
                this.$store.dispatch(MENTIONS_CHANGE_FILTER, { options });
            },
            updateSelectedCountry(payload) {
                this.country = payload.id;
            },
            updateSelectedTop(payload) {
                this.per_page = payload.id;
            },
            updateSelectedKeywords(payload) {
                this.keywords = payload.id;
            }
        },
        watch: {
            keywords: function() {
                this.saveFilter();
            },
            per_page: function() {
              this.saveFilter();
            },
            country: function() {
                this.saveFilter();
            }
        }

    }
</script>

<style lang="scss">
  @mixin desktop-lg {
    @media (min-width: 1280px) { @content; }
  }
  @mixin desktop {
    @media (min-width: 1024px) { @content; }
  }
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
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  font-family: 'Rubik', sans-serif;

  @include desktop{
    flex-direction: row;
    height: 135px;
  }
  &__list {
    position: absolute;
    top: 100%;
    width: 100%;
    padding-left: 35px;
    padding-right: 50px;
    box-sizing: border-box;
    margin: 0;
    background: #fff;
  }
  &__item {
    display: flex;
    box-sizing: border-box;
    height: 100px;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0px 1px 8px rgba(20, 46, 110, 0.1);
    position: relative;
    cursor: pointer;
    padding: 0 25px;
    transition: .3s ease-in-out;
    letter-spacing: 0.1px;
    margin-bottom: 25px;
    z-index: 102;
    width: 100%;
    animation: reveal;
    animation-duration: .35s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateX(30px);
    @include desktop {
      height: 110px;
      flex: 1 1 33%;
      max-width: calc(33% - 3rem / 3);
      margin-right: 15px;
    }
    @include desktop-lg {
      padding: 0 35px;
      margin-right: 25px;
    }
    &:nth-child(2) {
      animation-delay: .25s;
      z-index: 101;
    }
    &:last-child {
      margin-right: 0;
      animation-delay: .5s;
      z-index: 100;
    }
  }
  &__icon {
    margin-right: 15px;
    flex-shrink: 0;
    width: 30px;
    @include desktop-lg {
      width: 40px;
      margin-right: 30px;
      font-size: 18px;
    }
  }
  &__chevron {
    transition: .3s ease-in-out;
  }
  &__title {
    position: relative;
    width: calc(100% - 55px);
    @include desktop-lg {
      width: calc(100% - 70px);
    }
  }
}

.body {
  &--dark {
    .filter {
      &__item {
        background: rgba(255, 255, 255, 0.05);
        color: #D6D8D8;
      }
      &__chevron {
        fill: #727272;
      }
    }
  }
  &--light {
    .filter {
      &__item {
        background: #fff;
        color: #414D55;
      }
      &__chevron {
        fill: #BBCDD9;
      }
    }
  }
}

</style>
