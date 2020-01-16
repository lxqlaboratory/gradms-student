import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * 所有权限通用路由表
 * 如首页和登录页和一些不用权限的公共页面
 */
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/dashboard',
    component: Layout,
    hidden: true,
    redirect: '/dashboard/index',
    children: [{
      path: 'index',
      name: 'dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'route.dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/personInformation',
    component: Layout,
    redirect: '/personInformation',
    name: 'personInformation',
    meta: { title: 'route.personInformation', icon: 'form' },
    children: [
      {
        path: 'changePassword',
        name: 'changePassword',
        component: () => import('@/views/personInformation/changePassword'),
        meta: { title: 'route.changePassword', icon: 'form' }
      },
      {
        path: 'stuBaseInfo',
        name: 'stuBaseInfo',
        component: () => import('@/views/personInformation/stuBaseInfo'),
        meta: { title: ('baseInformationModal.baseInformation'), icon: 'form' }
      },
      {
        path: 'cultiveInfo',
        name: 'cultiveInfo',
        component: () => import('@/views/personInformation/cultiveInfo'),
        meta: { title: ('baseInformationModal.cultivationInformation'), icon: 'form' }
      },
      {
        path: 'preSchoolInfo',
        name: 'preSchoolInfo',
        component: () => import('@/views/personInformation/preSchoolInfo'),
        meta: { title: ('baseInformationModal.beforeSchool'), icon: 'form' }
      },
      {
        path: 'publishThesis',
        name: 'publishThesis',
        component: () => import('@/views/personInformation/publishThesis'),
        meta: { title: ('publishThesis.publishThesis'), icon: 'form' }
      },
      {
        path: 'thesisAdd',
        name: 'thesisAdd',
        hidden: true,
        component: () => import('@/views/personInformation/thesisAdd'),
        meta: { title: ('publishThesis.publishThesis'), icon: 'form' }
      },
      {
        path: 'remarkThesis',
        name: 'remarkThesis',
        hidden: true,
        component: () => import('@/views/personInformation/remarkThesis'),
        meta: { title: ('publishThesis.publishThesis'), icon: 'form' }
      },
      {
        path: 'patent',
        name: 'patent',
        component: () => import('@/views/personInformation/patent'),
        meta: { title: ('patent.note'), icon: 'form' }
      },
      {
        path: 'patentDetail',
        name: 'patentDetail',
        hidden: true,
        component: () => import('@/views/personInformation/patentDetail'),
        meta: { title: ('patent.note'), icon: 'form' }
      },
      {
        path: 'savePatentRemark',
        name: 'savePatentRemark',
        hidden: true,
        component: () => import('@/views/personInformation/savePatentRemark'),
        meta: { title: ('patent.note'), icon: 'form' }
      }
    ]
  },
  {
    path: '/pygl',
    component: Layout,
    name: 'pygl',
    meta: {
      title: ('route.pygl'),
      icon: 'form'
    },
    children: [
      {
        path: 'dyzxzm',
        component: () => import('@/views/pygl/xjhpygl/dyzxzm'),
        name: 'dyzxzm',
        meta: { title: ('route.dyzxzm'), icon: 'form' }
      },
      {
        path: 'pyfacx',
        component: () => import('@/views/pygl/pyfayxsgrjh/pyfacx'),
        name: 'pyfacx',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'showCultivate',
        hidden: true,
        component: () => import('@/views/pygl/pyfayxsgrjh/showCultivate'),
        name: 'showCultivate',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'showCourse',
        hidden: true,
        component: () => import('@/views/pygl/pyfayxsgrjh/showCourse'),
        name: 'showCourse',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'pyfadkcsz',
        hidden: true,
        component: () => import('@/views/pygl/pyfayxsgrjh/pyfadkcsz'),
        name: 'pyfadkcsz',
        meta: { title: ('route.pyfacx'), icon: 'form' }
      },
      {
        path: 'ckbrpyfa',
        component: () => import('@/views/pygl/pyfayxsgrjh/ckbrpyfa'),
        name: 'ckbrpyfa',
        meta: { title: ('route.ckbrpyfa'), icon: 'form' }
      },
      {
        path: 'zdckpyjh',
        component: () => import('@/views/pygl/pyfayxsgrjh/zdckpyjh'),
        name: 'ckbrpyfa',
        meta: { title: ('route.zdckpyjh'), icon: 'form' }
      },
      {
        path: 'insertPublicCourse',
        component: () => import('@/views/pygl/pyfayxsgrjh/insertPublicCourse'),
        name: 'insertPublicCourse',
        hidden: true,
        meta: { title: ('route.zdckpyjh'), icon: 'form' }
      },
      {
        path: 'allCourseQuery',
        component: () => import('@/views/pygl/pyfayxsgrjh/allCourseQuery'),
        name: 'allCourseQuery',
        hidden: true,
        meta: { title: ('route.zdckpyjh'), icon: 'form' }
      },
      {
        path: 'allCourseQueryDetail',
        component: () => import('@/views/pygl/pyfayxsgrjh/allCourseQueryDetail'),
        name: 'allCourseQueryDetail',
        hidden: true,
        meta: { title: ('route.zdckpyjh'), icon: 'form' }
      },
      {
        path: 'kccx',
        component: () => import('@/views/pygl/kcyxk/kccx'),
        name: 'kccx',
        meta: { title: ('route.kccx'), icon: 'form' }
      },
      {
        path: 'jxapdc',
        component: () => import('@/views/pygl/kcyxk/jxapdc'),
        name: 'jxapdc',
        meta: { title: ('route.jxapdc'), icon: 'form' }
      },
      {
        path: 'xsxk',
        component: () => import('@/views/pygl/kcyxk/xsxk'),
        name: 'xsxk',
        meta: { title: ('route.xsxk'), icon: 'form' }

      },
      {
        path: 'cjcx',
        component: () => import('@/views/pygl/cjgl/cjcx'),
        name: 'cjcx',
        meta: { title: ('route.cjcx'), icon: 'form' }
      },
      {
        path: 'tjktbg',
        component: () => import('@/views/pygl/zqkh/tjktbg'),
        name: 'cjcx',
        meta: { title: ('route.tjktbg'), icon: 'form' }
      }
    ]
  },
  {
    path: '/byhxwgl',
    component: Layout,
    name: 'byhxwgl',
    meta: { title: ('route.byhxwgl'), icon: 'form' },
    children: [
      {
        path: 'txxwxx',
        name: 'txxwxx',
        component: () => import('@/views/byhxwgl/txxwxx'),
        meta: { title: ('route.txxwxx'), icon: 'form' }
      },
      {// 填写论文工作与不足
        path: 'txlwgzybz',
        name: 'txlwgzybz',
        component: () => import('@/views/byhxwgl/txlwgzybz'),
        meta: { title: ('route.txlwgzybz'), icon: 'form' }
      },
      {// 填写博士论文自评表
        path: 'txbslwzpb',
        name: 'txbslwzpb',
        component: () => import('@/views/byhxwgl/txbslwzpb'),
        meta: {
          title: ('route.txbslwzpb'),
          icon: 'form',
          roles: [117]
        }
      },
      {
        path: 'tjbysq',
        name: 'tjbysq',
        component: () => import('@/views/byhxwgl/tjbysq'),
        meta: { title: ('route.tjbysq'), icon: 'form' }
      },
      {
        path: 'xxsclw',
        name: 'xxsclw',
        component: () => import('@/views/byhxwgl/xxsclw'),
        meta: { title: ('route.xxsclw'), icon: 'form' }
      },
      {
        path: 'cklwpyjg',
        name: 'cklwpyjg',
        component: () => import('@/views/byhxwgl/cklwpyjg'),
        meta: {
          title: ('route.cklwpyjg'),
          icon: 'form',
          roles: [0]
        }
      },
      {
        path: 'txbsdbgg',
        name: 'txbsdbgg',
        component: () => import('@/views/byhxwgl/txbsdbgg'),
        meta: {
          title: ('route.txbsdbgg'),
          icon: 'form',
          roles: [0]
        }
      },
      {
        path: 'lrdbjv',
        name: 'lrdbjv',
        component: () => import('@/views/byhxwgl/lrdbjv'),
        meta: {
          title: ('route.lrdbjv'),
          icon: 'form',
          roles: [0]
        }
      },
      {
        path: 'pydbxxck',
        name: 'pydbxxck',
        component: () => import('@/views/byhxwgl/pydbxxck'),
        meta: { title: ('route.pydbxxck'), icon: 'form' }
      },
      {
        path: 'byxxhd',
        name: 'byxxhd',
        component: () => import('@/views/byhxwgl/byxxhd'),
        meta: {
          title: ('route.byxxhd'),
          icon: 'form',
          roles: [0]
        }
      },
      {
        path: 'xwxxhd',
        name: 'xwxxhd',
        component: () => import('@/views/byhxwgl/xwxxhd'),
        meta: {
          title: ('route.xwxxhd'),
          icon: 'form',
          roles: [0]
        }
      }
    ]
  },

  {
    path: '/dagl',
    component: Layout,
    name: 'dagl',
    alwaysShow: true,
    meta: {
      title: ('route.dagl'),
      icon: 'form',
      roles: [117]
    },
    children: [
      {
        path: 'txqnml',
        name: 'txqnml',
        component: () => import('@/views/dagl/txqnml'),
        meta: {
          title: ('route.txqnml'),
          icon: 'form'
        }
      }
      // {
      //   path: 'test',
      //   name: 'test',
      //   component: () => import('@/views/dagl/test'),
      //   meta: {
      //     title: ('route.test'),
      //     icon: 'form'
      //   }
      // }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
/**
 * 异步挂载的路由
 * 动态需要根据权限加载的路由表
 */
export const asyncRoutes = [
  {
    path: '/dagl',
    component: Layout,
    name: 'dagl',
    alwaysShow: true,
    meta: {
      title: ('route.dagl'),
      icon: 'form',
      roles: ['1']
    },
    children: [
      {
        path: 'txqnml',
        name: 'txqnml',
        component: () => import('@/views/dagl/txqnml'),
        meta: {
          title: ('route.txqnml'),
          icon: 'form',
          roles: ['1']
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }

]

// 实例化vue的时候只挂载constantRouter
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
