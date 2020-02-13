<template>
  <div @click="toggle()" :class="['mentions-counter__item', {'mentions-counter__item--active': isActive}]"
       :title="'Отобразить ' + title">
    <number
      class="mentions-counter__num"
      :from="0"
      :to="countTo"
      :duration="1"
      easing="Power3.easeIn">
    </number>
    <div class="mentions-counter__text">{{ title }}</div>
  </div>
</template>

<script>
    import { MENTIONS_CHANGE_TYPE } from 'actions/mentions';
    export default {
        name: "Toggler",
        props: {
            to: [Number],
            name: [String],
            alt: [String],
            active: [Boolean]
        },
        data() {
            return {
                isActive: false,
                title: '',
                countTo: '',
                type: ''
            }
        },
        mounted () {
            this.title = this.name;
            this.countTo = this.to;
            this.isActive = this.active;
            this.type = this.alt;
        },
        methods: {
            toggle() {
                this.isActive = !this.isActive;
                const options = {
                    type: this.alt,
                    val: this.isActive
                };
                this.$store.dispatch(MENTIONS_CHANGE_TYPE, {options});
            }
        },
        watch: {
            to: function() {
                this.countTo = this.to;
            }
        }
    }
</script>
<style scoped>

</style>
