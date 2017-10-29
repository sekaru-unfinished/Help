import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Chat from '@/components/Chat'
import VueSocketio from 'vue-socket.io'

Vue.use(Router)
Vue.use(VueSocketio, 'http://localhost:4000')

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Chat',
      component: Chat
    }
  ]
})
