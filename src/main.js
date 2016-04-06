import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Site from './components/Site.vue'
import Body from './components/Body.vue'
import Article from './components/Article.vue'
import analtyics from './analytics'

analtyics()

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
  history: true,
  hashbang: false,
  transitionOnLoad: false
})

router.redirect({
  '/': '/about/about-this-website',
  '*': '/about/about-this-website'
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
