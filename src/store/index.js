import Vue from 'vue'
import Vuex from 'vuex'
import {setCookie,getUserCookie,removeUserCookie} from '../utils/userCookies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 导航的收放状态 false为展开  true为收起来
    isCollapse: false,
    // 通过cookie获取用户信息
    userInfo: getUserCookie(),
    //用户有权限的路由
    userRoutes:[]
  },
  mutations: {
    //改变状态栏
    changeCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    //储存用户信息
    setUserInfo(state, userObj) {
      state.userInfo = userObj;
    },
    // 用户登出
    logout(state) {
      state.userInfo = {
        appkey:"",
        email:"",
        role:"",
        username:""
      }
    },
    //从router.js中赋值用户有权限的路由
    changeUserRoutes(state,routes){
      state.userRoutes = routes
    }
  },
  actions: {
    changeCollapse({ commit }) {
      commit('changeCollapse')
    },
    setUserInfo({ commit }, userObj) {
      commit('setUserInfo', userObj);
      setCookie(userObj)
    },
    logout ({ commit }) {
      commit('logout');
      removeUserCookie()
    },
    changeUserRoutes({ commit },routes){
      commit('changeUserRoutes',routes);
    }
  },
  modules: {
  }
})