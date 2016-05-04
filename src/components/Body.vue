<template lang = "jade">
sidebar
main.on-canvas(
  v-bind:class="{'reveal' : sharedState.revealed}")
  div.overlay(v-if= "sharedState.revealed", @click= "toggleMenu()")
  data-loading-animation
  site-header
  router-view
</template>

<script>
// Global Store
import store from '../store'
// Components
import Sidebar from './Sidebar.vue'
import SiteHeader from './SiteHeader.vue'
import DataLoadingAnimation from './DataLoadingAnimation.vue'
// Methods
import toggleMenu from '../methods/toggleMenu'
import setActivePostType from '../methods/setActivePostType'
// Vendor
import $ from 'jquery'

export default {
  components: {
    Sidebar, SiteHeader, DataLoadingAnimation
  },
  data () {
    return {
      sharedState: store.state
    }
  },
  init: function () {
    var self = this
    this.$http.get('http://nickrun.github.io/data/meta.json').then(function (response) {
      store.state.siteMeta = response.data
    }, function (response) {
      console.log('error retrieving json')
    }).then(function () {
      self.startTransitionAnimation()
    })
  },
  methods: {
    toggleMenu: toggleMenu,
    startTransitionAnimation: function () {
      $('.on-canvas').animate({ scrollTop: 0 })
      this.sharedState.dataLoading = true // initiate loading animation
      var self = this
      setTimeout(function () {
        self.getPost() // retrieve post data after .5 sec
      }, 500)
    },
    getPost: function () {
      // GET request
      var postPath = 'http://nickrun.github.io/data/posts/'
      var postFileName = this.$route.params.postSrc + '.json'
      var post_jsonURL = postPath + postFileName
      var self = this
      self.$http.get(post_jsonURL).then(function (response) {
        store.state.activePost = response.data
        var activePostType = store.state.activePost.post_type
        store.state.siteMeta.active_post_type = activePostType
        setActivePostType(activePostType)
        setTimeout(function () {
          self.sharedState.dataLoading = false // ends animation after .4 seconds
        }, 400)
      }, function (response) {
        // error callback
        console.log('error retrieving json')
      }).then(function () {
        // activate post
        store.state.siteMeta.posts.forEach(function (v, i, arr) {
          if (v.src === store.state.activePostSrc) {
            arr[i].active = true
          } else {
            arr[i].active = false
          }
        })
      })
      store.state.activePostSrc = self.$route.params.postSrc
    }
  },
  watch: {
    $route: function () {
      this.dataLoading = true // initiate loading animation
      this.startTransitionAnimation()
    },
    'sharedState.activePost.title': function () {
      document.title = 'Nick.Run: ' + this.sharedState.activePost.title
    }
  }
}
</script>
