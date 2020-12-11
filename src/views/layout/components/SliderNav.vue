<template>
  <div class="slider-nav">
    <div class="group">
      <el-radio-group
        class="menubtn"
        v-model="isCollapse"
        @change="toggleCollapsed"
      >
        <el-radio-button :label="false"
          ><i class="el-icon-s-unfold"></i
        ></el-radio-button>
        <el-radio-button :label="true"
          ><i class="el-icon-s-fold"></i
        ></el-radio-button>
      </el-radio-group>
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <ul class="user-info">
      <li class="user-name">
        {{$store.state.userInfo.username}}
        <i class="el-icon-arrow-down"></i>
      </li>
      <li class="login-out" @click="logout">退出</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isCollapse:this.$store.state.isCollapse
    };
  },
  computed: {
    //无法直接在vuex中使用v-model,会抛出错误
    isCollapse: {
      get() {
        return this.$store.state.isCollapse;
      },
      set() {},
    },
  },
  created () {
    // console.log(this.$store.state.userInfo)
  },
  methods: {
    //   改变左侧导航栏的展开
    toggleCollapsed(status) {
      this.$store.dispatch("changeCollapse");
    },
    //退出登录
    logout() {
      this.$store.dispatch('logout');
      this.$router.push({
        name:'Login'
      })
    },
  },
};
</script>


