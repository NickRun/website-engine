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
import Sidebar from './Sidebar.vue'
import SiteHeader from './SiteHeader.vue'
import DataLoadingAnimation from './DataLoadingAnimation.vue'
import store from '../store'

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
    startTransitionAnimation: function () {
      this.sharedState.dataLoading = true // initiate loading animation
      var self = this
      setTimeout(function () {
        self.getPost() // retrieve post data after .5 sec
      }, 500)
    },
    toggleMenu: function () {
      if (this.sharedState.revealed === true) {
        this.sharedState.revealed = false
      } else {
        this.sharedState.revealed = true
      }
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
        store.methods.setActivePostType(activePostType)
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
    }
  }
}
</script>
