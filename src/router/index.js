import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import About from '@/components/about/About'
import Service from '@/components/service/Service'
import Contact from '@/components/contact/Contact'
import Blog from '@/components/blog/Blog'
import Gallery from '@/components/gallery/Gallery'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: 'About Us'
      }
    },
    {
      path: '/service',
      name: 'Service',
      component: Service,
      meta: {
        title: 'Services'
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      meta: {
        title: 'Blogs'
      }
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
      meta: {
        title: 'Photo Gallery'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact Us'
      }
    }
  ]
})

