import {
  createRouter,
  createWebHashHistory,
  NavigationGuardWithThis,
} from '../src'
const BoardPage = () => import('./views/BoardPage.vue')
const Home = () => import('./views/Home.vue')
const BiGeneric = () => import('./views/BiGeneric.vue')
const NotFound = () => import('./views/NotFound.vue')
const NoAuth = () => import('./views/NoAuth.vue')
const LeftSidebar = () => import('./views/layout/LeftSidebar.vue')
const TopNavbar = () => import('./views/layout/TopNavbar.vue')

const beforeEnter: NavigationGuardWithThis<undefined> = to => {
  const { meta } = to
  console.log(to)
  console.log('/路由的beforeEnter...')
  if (meta && meta.requiresAuth) {
    console.log('此页面需要权限校验')
    router.push('/403')
  } else {
    return
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        TopNavbar,
      },
      alias: ['/home', '/index', '/index.html', '/index.htm'],
      beforeEnter: [beforeEnter],
      meta: {
        name: '首页',
        requiresAuth: false,
      },
    },
    {
      path: '/biGeneric',
      components: {
        default: BiGeneric,
        TopNavbar,
      },
      beforeEnter: [beforeEnter],
      meta: {
        name: '通用分析页面',
        requiresAuth: false,
      },
    },
    {
      path: '/boards/:id',
      components: {
        default: BoardPage,
        TopNavbar,
        LeftSidebar,
      },
      props: true,
      meta: {
        name: '看板分析页面',
        requiresAuth: false,
      },
    },
    {
      path: '/403',
      component: NoAuth,
      props: true,
      beforeEnter: [beforeEnter],
      meta: {
        name: '403',
        requiresAuth: false,
      },
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
      path: '/:pathMatch(.*)*',
      component: NotFound,
      props: true,
      beforeEnter: [beforeEnter],
      meta: {
        name: '404',
        requiresAuth: false,
      },
    },
  ],
})

router.beforeEach((to, from) => {
  //TODO
  console.log('1')
  // throw '我是第1个路由，我出错啦'
})
router.beforeEach((to, from) => {
  //TODO
  console.log('2')
  // throw '我是第2个路由，我出错啦'
})
router.beforeResolve(() => {
  console.log('beforeResolve...')
})

router.onError(() => {
  //TODO
  console.log('error...')
})

router.afterEach((to, from) => {
  //TODO
  //   throw '我是after each...,我出错误啦'
  console.log('afterEach...')
})

export { router }
