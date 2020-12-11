<template>
  <div class="home">
    <left-side-bar/>
    <div :class="{'right-box':true,'isCollapse':$store.state.isCollapse}">
      <slider-nav />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideBar from './components/LeftSideBar.vue'
import SliderNav from './components/SliderNav.vue'

export default {
  name: 'Home',
  components: {
    LeftSideBar,
    SliderNav
  }
}
</script>

<style lang="less">
@import url("../../assets/css/home.less");
</style>
