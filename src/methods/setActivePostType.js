import store from '../store'

var setActivePostType = function (postType) {
  store.state.siteMeta.active_post_type = postType
  store.state.siteMeta.post_types.forEach(function (v, i, arr) {
    if (v.slug === postType) {
      arr[i].active = true
    } else {
      arr[i].active = false
    }
  })
}

export default setActivePostType
