import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/layout/Home'
import store from '@/store'
import getMenuRoute from '@/utils/routerRoot'
import user from '../api/user'

Vue.use(VueRouter)

// 异步加载路由，通过路由匹配后动态加载
const anyscRoute = [
  {
    path: '/product',
    name: 'Product',
    component: Home,
    children: [{
      path: 'list',
      name: 'ProductList',
      meta: {
        title: '商品列表',
        icon: 'unordered-list',
        hidden: false,
      },
      component: () => import('@/views/page/productList.vue'),
    }]
  },
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/statistics',
    meta: {
      title: '首页'
    },
    children: [{
      path: 'statistics',
      name: 'Statistics',
      meta: {
        title: '统计',
        icon: 'number',
        hidden: false,
      },
      component: () => import('../views/page/statistics.vue')
    }],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import('../views/layout/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let isAddRoutes = false;
router.beforeEach((to, from, next) => {
  // console.log(to.path);
  if (to.path !== '/login') {
    if (store.state.userInfo.appkey && store.state.userInfo.username && store.state.userInfo.role) {
      if (!isAddRoutes) {
        const userRoutes = getMenuRoute(store.state.userInfo.role, anyscRoute);
        // console.log(userRoutes)
        const finalRoutes = routes.concat(userRoutes);
        // dispatch返回一个promiese,成功之后添加路由
        // router.addRoutes
        store.dispatch('changeUserRoutes', finalRoutes).then(() => {
          router.addRoutes(finalRoutes);
          next()
        }); 
        isAddRoutes = true;
      }
      return next()
    }
    return next('/login')
  }
  return next()
})

export default router
