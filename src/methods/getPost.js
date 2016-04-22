import store from '../store'
import setActivePostType from './setActivePostType'

var getPost = function (vm) {
  // GET request
  var postPath = 'http://nickrun.github.io/data/posts/'
  var postFileName = this.$route.params.postSrc + '.json'
  var post_jsonURL = postPath + postFileName
  var self = vm
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

export default getPost
