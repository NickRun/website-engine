import store from '../store'

var isVisible = function (postType) {
  return postType === store.state.siteMeta.active_post_type
}

export default isVisible
