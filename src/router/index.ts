import { supabase } from '@/api'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import RegisterSuccess from '../views/RegisterSuccess.vue'
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
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
    path: '/',
    redirect: '/tabs/course',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/course',
      },
      {
        path: 'course',
        redirect: '/tabs/course/overview',
        component: () => import('@/views/course/Index.vue'),
        children: [
          {
            path: 'overview',
            component: () => import('@/views/course/Overview.vue'),
          },
          {
            path: 'create',
            component: () => import('@/views/course/Create.vue'),
          },
          {
            path: ':id',
            component: () => import('@/views/course/Detail.vue'),
          },
          {
            path: ':id/editcustomer',
            component: () => import('@/views/course/EditCustomer.vue'),
          },
          {
            path: ':id/createcoursedate',
            component: () => import('@/views/course/CreateCourseDate.vue'),
          },
        ],
      },
      {
        path: 'customer',
        redirect: '/tabs/customer/overview',
        component: () => import('@/views/customer/Index.vue'),
        children: [
          {
            path: 'overview',
            component: () => import('@/views/customer/Overview.vue'),
          },
          {
            path: 'create',
            component: () => import('@/views/customer/Create.vue'),
          },
          {
            path: ':id',
            component: () => import('@/views/customer/Detail.vue'),
          },
        ],
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
