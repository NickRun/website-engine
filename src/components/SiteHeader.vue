<template lang = "jade">
div.site-header
  div.g-wrapper
    i.fa.fa-bars.navicon.hide-lg(@click= "toggleMenu()")
    div.site-header__label.hide-lg
      a(v-link="{ name: 'home'}", title= "Homepost")
        logo
</template>

<script>
import store from '../store'
import Logo from './Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      sharedState: store.state
    }
  },
  methods: {
    toggleMenu: function () {
      if (this.sharedState.revealed === true) {
        this.sharedState.revealed = false
      } else {
        this.sharedState.revealed = true
      }
    }
  }
}
</script>

<style lang= "scss">
@import '../scss/variables';
@import '../scss/partials/header';
</style>
