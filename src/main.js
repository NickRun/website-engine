import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Site from './components/Site.vue'
import Body from './components/Body.vue'
import Article from './components/Article.vue'

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

// Google Analytics
/*ignore jslint start*/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76044572-1', 'auto');
ga('send', 'pageview');
/*ignore jslint end*/