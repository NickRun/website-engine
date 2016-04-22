import store from '../store'

// @param bool isSidebar: If function call comes from sidebar
var toggleMenu = function (isSidebar) {
  if (store.state.revealed === true) {
    store.state.revealed = false
  } else if (!isSidebar) {
    store.state.revealed = true
  }
}

export default toggleMenu
