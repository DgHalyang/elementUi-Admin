<template>
  <div class="left-side">
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo menubar"
      @open="handleOpen"
      @close="handleClose"
      :collapse="$store.state.isCollapse"
    >
      <el-submenu index="1" v-for="(item,index) in routeList" :key="index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
  export default {
    data() {
      return {
        // isCollapse: true
        routeList:[]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created () {
      // console.log(this.$route)
      this.routeList = this.$route.matched
    }
  }
</script>

<style lang="less">
.left-side {
  .menubar {
    height: 100%;
    position: fixed;
  }
}
</style>