<template lang = "jade">
div.site-header
  div.g-wrapper
    i.fa.fa-bars.navicon.hide-lg(@click= "toggleMenu()")
    div.site-header__label.hide-lg
      a(v-link="{ name: 'home'}", title= "Homepost")
        logo
</template>

<script>
// Global Store
import store from '../store'
// Components
import Logo from './Logo.vue'
// Methods
import toggleMenu from '../methods/toggleMenu'

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
    toggleMenu
  }
}
</script>

<style lang= "scss">
@import '../scss/variables';
@import '../scss/mixins/media-queries';
@import '../scss/partials/header/header';
</style>
