import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Body from './components/Body.vue'
import Site from './Site.vue'
import Article from './components/Article.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  history: true,
  hashbang: false,
  transitionOnLoad: false
})

router.redirect({
  '/': '/about/nick-scipione-public-notebook',
  '*': '/about/nick-scipione-public-notebook'
})

router.map({
  '/': {
    component: Body,
    name: 'home'
  },
  '/about': {
    component: Body,
    subRoutes: {
      '/:postSrc': {
        name: 'about',
        component: Article
      }
    }
  },
  '/notes': {
    component: Body,
    subRoutes: {
      '/:postSrc': {
        name: 'notes',
        component: Article
      }
    }
  }
})

router.start(Site, 'body')
