<template>
  <div class="main__inner">
    <aside class="sidebar">
      <slot name="mentionsHeader"></slot>
      <slot name="sidebar"></slot>
    </aside>
    <section class="content">
      <h1 class="content__title">
        <slot name="title"></slot>
      </h1>
      <slot name="filter"></slot>
      <slot name="content"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style lang="scss">
@function rem($px) {
  @return $px / 10 * 1rem;
}
@mixin tablet-sm {
  @media (min-width: 640px) { @content; }
}
@mixin tablet {
  @media (min-width: 768px) { @content; }
}
@mixin tablet-lg {
  @media (min-width: 992px) { @content; }
}
@mixin desktop {
  @media (min-width: 1024px) { @content; }
}
@mixin desktop-lg {
  @media (min-width: 1200px) { @content; }
}

@keyframes reveal-title {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes reveal-side {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.content {
  z-index: 1;
  flex-grow: 1;
  flex-direction: column;
  padding-bottom: 4rem;
  box-sizing: border-box;
  display: flex;
  @include desktop {
    max-width: calc(100% - 23rem);
  }
  &__title {
    color: #fff;
    margin-bottom: 2rem;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 2.8rem;
    line-height: 4rem;
    transition: .3s ease-in-out;
    display: none;
    animation: reveal-title;
    animation-duration: .3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateX(-20px);
    @include tablet {
      display: flex;
    }
  }
  &__main {
    background: rgba(255, 255, 255, 0.05);
    border-radius: .8rem;
    flex-grow: 1;
    padding: 1rem;
    box-sizing: border-box;
    transition: .3s ease-in-out;
    flex-direction: column;
    display: flex;
    animation: reveal-title;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateX(-20px);
    animation-delay: .3s;
    @include tablet {
      padding: 2rem;
    }
    @include desktop {
      padding: 3rem;
    }
    @include desktop-lg {
      padding: 4rem;
    }
  }
}
.body {
  &--dark {
    .content {
      &__title {
        color: #fff;
      }
      &__main {
        box-shadow: none;
        background: rgba(255, 255, 255, 0.05);
      }
      &__control-btn {
        background: rgba(54, 66, 68, 0.3);
        color: #D6D8D8;
        &:hover {
          background: rgba(54, 66, 68, 0.5);
        }
        &--active {
          background: #03C7CD;
          &:hover {
            background: #03C7CD;
          }
        }
      }
      &__legend {
        color: #FFFFFF;
      }
    }
  }
  &--light {
    .content {
      &__title {
        color: #414D55;
      }
      &__main {
        background: #FFFFFF;
        box-shadow: 0px 1px 21px rgba(20, 46, 110, 0.1);
      }
      &__legend {
        color: #414D55;
      }
    }
  }
}
.sidebar {
  z-index: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  @include desktop {
    flex-basis: 23rem;
    display: flex;
    justify-content: center;
    max-width: 23rem;
  }
  &__content {
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-around;
    @include desktop  {
      justify-content: center;
      flex-direction: column;
    }
  }
  &__title {
    font-family: 'Rubik', sans-serif;
    font-size: 2.8rem;
    line-height: 4rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: #fff;
    transition: .3s ease-in-out;
    display: flex;
    justify-content: center;
    animation: reveal-side;
    animation-duration: .35s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(20px);
    @include tablet {
      justify-content: flex-start;
    }
    @include desktop  {
      display: none;
    }
  }
}

.body {
  &--light {
    .sidebar {
      &__num {
        color: #414D55;
        opacity: 1;
      }
      &__desc {
        color: #414D55;
      }
      &__title {
        color: #414D55;
      }
    }
  }
}
</style>
