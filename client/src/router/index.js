import Vue from 'vue'
import VueRouter from 'vue-router'

// 認証機能マスク
// import Main from '@/components/pages/Main'
// import Auth from '@/components/pages/Auth'
import Goal from '@/components/pages/Goal'
import Todo from '@/components/pages/Todo'
import Achive from '@/components/pages/Achive'
import Chat from '@/components/pages/Chat'
import Report from '@/components/pages/Report'
import Employee from '@/components/pages/Employee'

Vue.use(VueRouter)

const routes = [
  // 認証機能マスク
  // {
  //   path: '/',
  //   name: 'Main',
  //   component: Main
  // },
  // {
  //   path: '/auth',
  //   name: 'Auth',
  //   component: Auth
  // },
  {
    path: '/',
    name: 'Goal',
    component: Goal
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/achive',
    name: 'Achive',
    component: Achive
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/report',
    name: 'Report',
    component: Report
  },
  {
    path: '/employee',
    name: 'Employee',
    component: Employee
  },
]

const router = new VueRouter({
  routes
})

export default router
