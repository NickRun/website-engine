<template lang = "jade">
aside.sidebar
  div.sidebar__control.site-brand.hide.show-lg
    h1.sidebar__label
      a(v-link="{ name: 'home'}", @click= "toggleMenu", title= "Homepost")
        logo
  div.sidebar__control.site-nav
    div.site-nav__type-select
      div.pill
        template(v-for= "postType in sharedState.siteMeta.post_types")
          span.btn(
            v-bind:class= "{ 'active': postType.active }"
            @click= "this.setActivePostType(postType.slug)")
              i.fa.fa-user(v-if= "postType.slug === 'about'")
              i.fa.fa-sticky-note(v-if= "postType.slug === 'notes'")
              {{ postType.name }}
    nav.site-nav__post-list
      ul
        template(v-for= "post in sharedState.siteMeta.posts")
          li(
            v-if= "isVisible(post.post_type)"
            transition= "staggered"
            stagger="100"
            v-bind:class= "{ 'active': post.active }")
            i.fa.fa-square
            a(v-link="{ name: 'about', params: { postSrc: post.src }}"
              v-if= "post.post_type === 'about'"
              @click= "toggleMenu")= "{{ post.name }}"
            a(v-link="{ name: 'notes', params: { postSrc: post.src }}"
              v-if= "post.post_type === 'notes'"
              @click= "toggleMenu")= "{{ post.name }}"
            div.site-nav__post-list__li__date(v-if= "post.post_type === 'notes'")= "{{ post.readable_date }}"
  div.sidebar__contact-card.hide.show-sm
    div.sidebar__contact-card__destination
      i.fa.fa-envelope
      span email@nick.run
</template>

<script>
import store from '../store.js'
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
  methods: store.methods
}
</script>

<style lang= "scss">
@import '../scss/variables';
@import '../scss/mixins/btn-sizes';
@import '../scss/mixins/clearfix';
@import '../scss/mixins/media-queries';
@import '../scss/partials/sidebar';

.staggered-transition {
    transition: all .5s ease;
    overflow: hidden;
    margin: 0;
    height: 60px;
}
.staggered-enter, .staggered-leave {
    opacity: 0;
    height: 0;
}
</style>
