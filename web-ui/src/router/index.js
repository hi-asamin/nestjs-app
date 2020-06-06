
import Vue from 'vue'
import Router from 'vue-router'

// import components
import Index from '@/components/Index'
import UserList from '@/components/UserList'
import TenantList from '@/components/TenantList'

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Index },
    { path: '/users', component: UserList },
    { path: '/tenants', component: TenantList },
  ]
})

export default router