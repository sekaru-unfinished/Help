import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Chat from '@/components/Chat'
import VueSocketio from 'vue-socket.io'

Vue.use(Router)
Vue.use(VueSocketio, 'http://localhost:4000')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
