<template>
  <el-container class="home-container">
    <!-- 左侧导航栏 -->
    <el-aside class="ad" :width="isCollapse ? '18px' : '171.88px'">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <router-link to="/companyinfo">
          <el-menu-item index="1" class="q">
            <i class="el-icon-menu"></i>
            <span slot="title">企业信息审核</span>
          </el-menu-item>
        </router-link>
        <router-link to="/projectinfo">
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">工作室信息审核</span>
          </el-menu-item>
        </router-link>
        <router-link to="/projectbid">
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">项目招标进度</span>
          </el-menu-item>
        </router-link>
        <router-link to="/projectexe">
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">项目执行情况</span>
          </el-menu-item>
        </router-link>
        <router-link to="/paymentstatus">
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">支付情况</span>
          </el-menu-item>
        </router-link>
        <router-link to="/chart">
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-aside>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    1() {
      this.isCollapse = !this.isCollapse;
    },
  },
};
</script>

<style>
.home-container {
  /* flex: 0; */
  flex: none;
}
.el-menu {
  border: none;
}
</style>