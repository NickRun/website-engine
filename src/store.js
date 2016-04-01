var store = {
  state: {
    activePostSrc: '',
    activePost: {},
    siteMeta: {},
    revealed: false,
    dataLoading: true
  },
  methods: {
    setActivePostType: function (postType) {
      //
      store.state.siteMeta.active_post_type = postType
      //
      store.state.siteMeta.post_types.forEach(function (v, i, arr) {
        if (v.slug === postType) {
          arr[i].active = true
        } else {
          arr[i].active = false
        }
      })
    },
    isVisible: function (postType) {
      return postType === store.state.siteMeta.active_post_type
    },
    toggleMenu: function () {
      if (this.sharedState.revealed === true) {
        this.sharedState.revealed = false
      }
    }
  }
}

export default store
