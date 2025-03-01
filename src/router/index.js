// 这里放置路由的相关代码

import { createWebHashHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import customList from '@/views/custom/list.vue'
import layoutIndex from '@/layout/index.vue'
import usersCreate from '@/views/users/create.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  
  {path:'/custom',component:layoutIndex,
    children:[
        {path:'/custom/list',component:customList},

    ]
  },
  {path:'/users/create',component:usersCreate}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;