import Vue from 'vue'
import Router from 'vue-router'
import Help from '@/components/Help'
import Chat from '@/components/Chat'
import VueSocketio from 'vue-socket.io'

Vue.use(Router)
Vue.use(VueSocketio, 'http://localhost:4000')

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'Home',
      component: Help
    },
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
