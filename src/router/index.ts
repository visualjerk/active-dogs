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
    redirect: '/tabs/customer',
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
    path: '/create-customer',
    component: () => import('@/views/CreateCustomer.vue'),
  },
  {
    path: '/customer/:id',
    component: () => import('@/views/CustomerDetail.vue'),
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/customer',
      },
      {
        path: 'customer',
        component: () => import('@/views/Customer.vue'),
      },
      {
        path: 'courses',
        component: () => import('@/views/Courses.vue'),
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
