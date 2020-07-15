import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'


Vue.use(Router)
export const constantRoutes: RouteConfig[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import(/* webpackChunkName: "redirect" */ '@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/auth-redirect',
    component: () => import(/* webpackChunkName: "auth-redirect" */ '@/views/login/auth-redirect.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/error-page/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/401',
    component: () => import(/* webpackChunkName: "401" */ '@/views/error-page/401.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/examinationPlan',
    meta: {
      title: 'education',
      icon: 'lock',
      roles: ['admin', 'editor'], // you can set roles in root nav
      alwaysShow: true // will always show the root menu
    },
    children: [
      {
        path: 'examinationPlan',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/education/examination/plan.vue'),
        name: 'Dashboard',
        meta: {
          title: 'examinationPlan',
          icon: 'dashboard',
          affix: true
        }
      },
      {
        path: 'classPlan',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/education/classOpen/classPlan.vue'),
        name: 'classPlan',
        meta: {
          title: 'classPlan',
          icon: 'dashboard',
          affix: true
        }
      },
      {
        path: 'addClassPlan',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/education/classOpen/addClassPlan.vue'),
        name: 'addClassPlan',
        meta: {
          title: 'addClassPlan',
          affix: true,
          hidden: true
        }
      }
    ]
  },
  {
    path: '/configuration',
    component: Layout,
    redirect: '/province',
    meta: {
      title: 'configuration',
      icon: 'lock',
      roles: ['admin', 'editor'], // you can set roles in root nav
      alwaysShow: true // will always show the root menu
    },
    children: [
      {
        path: 'college',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/configuration/college.vue'),
        name: 'Dashboard',
        meta: {
          title: 'college',
          icon: 'dashboard',
          affix: true
        }
      },
      {
        path: 'province',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/pages/configuration/province.vue'),
        name: 'Dashboard',
        meta: {
          title: 'province',
          icon: 'dashboard',
          affix: true
        }
      },
    ]
  },

]
export const asyncRoutes: RouteConfig[] = [
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    meta: {
      title: 'errorPages',
      icon: '404',
      hidden: true
    },
    children: [
      {
        path: '401',
        component: () => import(/* webpackChunkName: "error-page-401" */ '@/views/error-page/401.vue'),
        name: 'Page401',
        meta: {
          title: 'page401',
          noCache: true
        }
      },
      {
        path: '404',
        component: () => import(/* webpackChunkName: "error-page-404" */ '@/views/error-page/404.vue'),
        name: 'Page404',
        meta: {
          title: 'page404',
          noCache: true
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]

const createRouter = () => new Router({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
