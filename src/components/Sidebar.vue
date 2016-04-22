<template lang = "jade">
aside.sidebar
  div.sidebar__control.site-brand.hide.show-lg
    h1.sidebar__label
      a(v-link="{ name: 'home'}", @click= "toggleMenu(true)", title= "Homepost")
        logo
  div.sidebar__control.site-nav
    div.site-nav__type-select
      div.pill
        template(v-for= "postType in sharedState.siteMeta.post_types")
          span.btn(
            v-bind:class= "{ 'active': postType.active }"
            @click= "setActivePostType(postType.slug)")
              i.fa.fa-user(v-if= "postType.slug === 'about'")
              i.fa.fa-sticky-note(v-if= "postType.slug === 'notes'")
              {{ postType.name }}
    nav.site-nav__post-list
      ul
        template(v-for= "post in sharedState.siteMeta.posts")
          li(
            v-if= "isVisible(post.post_type)"
            v-bind:class= "{ 'active': post.active, 'pt-about': post.post_type === 'about' }")
            i.fa.fa-square
            a(v-link="{ name: 'about', params: { postSrc: post.src }}"
              v-if= "post.post_type === 'about'"
              @click= "toggleMenu(true)")= "{{ post.name }}"
            a(v-link="{ name: 'notes', params: { postSrc: post.src }}"
              v-if= "post.post_type === 'notes'"
              @click= "toggleMenu(true)")= "{{ post.name }}"
            div.site-nav__post-list__li__date(v-if= "post.post_type === 'notes'")= "{{ post.readable_date }}"
  div.sidebar__contact-card.hide.show-sm
    div.sidebar__contact-card__destination
      i.fa.fa-envelope
      span.email(data-emluser= "liame", data-emldomain= "nur.kcin")
</template>

<script>
// Components
import store from '../store.js'
import Logo from './Logo.vue'
// Methods
import toggleMenu from '../methods/toggleMenu'
import isVisible from '../methods/isVisible'
import setActivePostType from '../methods/setActivePostType'

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
    toggleMenu: toggleMenu,
    isVisible: isVisible,
    setActivePostType: setActivePostType
  }
}
</script>

<style lang= "scss">
@import '../scss/variables';
@import '../scss/mixins/btn-sizes';
@import '../scss/mixins/clearfix';
@import '../scss/mixins/media-queries';
@import '../scss/partials/sidebar/sidebar';
</style>
