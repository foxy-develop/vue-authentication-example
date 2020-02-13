<template>
  <div class="btn-group">
    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.title !== undefined">
      <div class="dropdown-text">
        <span class="dropdown-title-text">{{ selectedOption.title }}</span>
      </div>
      <svg class="filter__chevron" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8125 1.21875C13.875 1.3125 13.9062 1.40625 13.9062 1.5C13.9062 1.625 13.875 1.6875 13.8125 1.75L7.28125 8.3125C7.1875 8.375 7.09375 8.40625 7 8.40625C6.875 8.40625 6.8125 8.375 6.75 8.3125L0.1875 1.75C0.125 1.6875 0.09375 1.625 0.09375 1.5C0.09375 1.40625 0.125 1.3125 0.1875 1.21875L0.8125 0.59375C0.875 0.53125 0.9375 0.5 1.0625 0.5C1.15625 0.5 1.25 0.53125 1.34375 0.59375L7 6.25L12.6562 0.59375C12.7188 0.53125 12.8125 0.5 12.9375 0.5C13.0312 0.5 13.125 0.53125 13.1875 0.59375L13.8125 1.21875Z" fill="#BBCDD9"/>
      </svg>
    </li>

    <li @click="toggleMenu()" class="dropdown-toggle" v-if="selectedOption.title === undefined">
      <div class="dropdown-text">
        <span class="dropdown-title-text">{{ placeholderText }}</span>
      </div>
      <svg class="filter__chevron" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.8125 1.21875C13.875 1.3125 13.9062 1.40625 13.9062 1.5C13.9062 1.625 13.875 1.6875 13.8125 1.75L7.28125 8.3125C7.1875 8.375 7.09375 8.40625 7 8.40625C6.875 8.40625 6.8125 8.375 6.75 8.3125L0.1875 1.75C0.125 1.6875 0.09375 1.625 0.09375 1.5C0.09375 1.40625 0.125 1.3125 0.1875 1.21875L0.8125 0.59375C0.875 0.53125 0.9375 0.5 1.0625 0.5C1.15625 0.5 1.25 0.53125 1.34375 0.59375L7 6.25L12.6562 0.59375C12.7188 0.53125 12.8125 0.5 12.9375 0.5C13.0312 0.5 13.125 0.53125 13.1875 0.59375L13.8125 1.21875Z" fill="#BBCDD9"/>
      </svg>
    </li>

    <ul class="dropdown-menu" v-if="showMenu">
      <li v-for="(option, idx) in options" :key="idx">
        <a href="javascript:void(0)" @click="updateOption(option)">
          {{ option.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'dropdown',
        data() {
            return {
                selectedOption: {
                    title: '',
                    id: ''
                },
                showMenu: false,
                placeholderText: 'Please select an item',
            }
        },
        props: {
            options: {
                type: [Array, Object]
            },
            selected: {},
            placeholder: [String],
            closeOnOutsideClick: {
                type: [Boolean],
                default: true,
            },
        },

        mounted() {
            this.selectedOption = this.selected;
            if (this.placeholder)
            {
                this.placeholderText = this.placeholder;
            }

            if (this.closeOnOutsideClick) {
                document.addEventListener('click', this.clickHandler);
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.clickHandler);
        },

        methods: {
            updateOption(option) {
                this.selectedOption = option;
                this.showMenu = false;
                this.$emit('updateOption', this.selectedOption);
            },

            toggleMenu() {
                this.showMenu = !this.showMenu;
            },

            clickHandler(event) {
                const { target } = event;
                const { $el } = this;

                if (!$el.contains(target)) {
                    this.showMenu = false;
                }
            },
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
  @mixin desktop-lg {
    @media (min-width: 1280px) { @content; }
  }
  .btn-group {
    max-width: 100%;
    height: 40px;
    position: relative;
    display: flex;
  }
  .btn-group a:hover {
    text-decoration: none;
  }
  .dropdown-text {
    max-width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dropdown-toggle {
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    line-height: 20px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    box-shadow: none;
    border-radius: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    transition: .3s ease-in-out;
    @include desktop-lg {
      font-size: 18px;
    }
  }
  .dropdown-toggle:hover {
    cursor: pointer;
  }

  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 100%;
    max-width: 315px;
    padding: 5px 0;
    margin: 2px 0 0;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
    background-clip: padding-box;
    max-height: 450px;
    overflow-y: auto;
    @include tablet {
      max-height: 400px;
      left: 0;
      max-width: 290px;
    }
    @include desktop {
      max-width: 400px;
    }
    &::-webkit-scrollbar {
      background-color: rgb(14, 214, 220);
      width: 5px
    }

    &::-webkit-scrollbar-track {
      background-color: #fff
    }

    &::-webkit-scrollbar-thumb {
      border: 5px solid rgb(14, 214, 220)
    }

    &::-webkit-scrollbar-button {
      display: none
    }
  }
  .filter__item.filter__item--keywords {
    .dropdown-menu {
      left: -85px;
      @include tablet {
        left: 0;
      }
    }
  }
  .filter__chevron {
    margin-left: 15px;
    flex-shrink: 0;
  }


  .dropdown-menu > li > a {
    padding: 10px 30px;
    font-family: 'Rubik', sans-serif;
    display: block;
    clear: both;
    font-weight: normal;
    line-height: 1.6;
    color: #fff;
    white-space: nowrap;
    text-decoration: none;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .dropdown-menu > li > a:hover {
    background: #efefef;
    color: #409FCB;
  }

  .dropdown-menu > li {
    overflow: hidden;
    width: 100%;
    position: relative;
    margin: 0;
  }

  li {
    list-style: none;
  }
  .body {
    &--dark {
      .dropdown-menu {
        background: radial-gradient(50% 69.11% at 50% 50%, rgb(72, 95, 97) 0%, rgb(47, 55, 57) 100%);
        border: rgba(255, 255, 255, 0.05);
        color: #fff;

        &::-webkit-scrollbar-track {
          background-color: rgb(47, 55, 57)
        }

        & > li > a {
          color: #fff;
          &:hover {
            background: rgba(255, 255, 255, 0.05);
            color: #fff;
          }
        }
      }
      .dropdown-toggle {
        color: #D6D8D8;
        &:hover {
          background: rgba(255, 255, 255, 0.05);
        }
      }
      .filter__chevron {
        fill: #727272;
      }
     }
     &--light {
       .dropdown-menu {
         background: #fff;
         border: 1px solid #ccc;
         & > li > a {
           color: #414D55;
           &:hover {
             color: #414D55;
             background: rgba(225,225,225, 0.2);
           }
         }
       }
       .dropdown-toggle {
         color: #414D55;
         &:hover {
           background: rgba(225,225,225, 0.2);
         }
       }
       .filter__chevron {
         fill: #BBCDD9;
       }
      }
  }
</style>
