import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Login from '@/components/Login'
import Register from '@/components/Register'
import My from '@/components/My'
import MyView from '@/components/MyView'
import MySetting from '@/components/MySetting'
import MySettingAddress from '@/components/MySettingAddress'
import Item from '@/components/Item'
import ItemView from '@/components/ItemView'
import ItemComment from '@/components/ItemComment'
import Feedback from '@/components/Feedback'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/my',
      component: My,
      children: [{
        path: '',
        component: MyView
      }, {
        path: 'setting',
        component: MySetting
      }, {
        path: 'setting/address',
        component: MySettingAddress
      }]
    },
    {
      path: '/item',
      component: Item,
      children: [{
        path: '',
        component: ItemView
      }, {
        path: 'comment',
        component: ItemComment,
        beforeEnter (to, from, next) {
          window.scrollTo(0, 0)
          next()
        }
      }]
    }, {
      path: '/feedback',
      component: Feedback
    }
  ]
})
