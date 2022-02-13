import { supabase } from '@/api'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterSuccess from '../views/RegisterSuccess.vue'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
    meta: {
      public: true,
    },
  },
  {
    path: '/login',
    component: Login,
    meta: {
      public: true,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      public: true,
    },
  },
  {
    path: '/register-success',
    component: RegisterSuccess,
    meta: {
      public: true,
    },
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue'),
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, form, next) => {
  if (!to.meta.public && !supabase.auth.user()) {
    return next('/login')
  }
  next()
})

export default router
