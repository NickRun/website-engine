import store from '../store'
import getPost from './getPost'

var startTransitionAnimation = function () {
  store.dataLoading = true // initiate loading animation
  setTimeout(function () {
    getPost() // retrieve post data after .5 sec
  }, 500)
}

export default startTransitionAnimation
