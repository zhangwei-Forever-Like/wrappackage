<template> 
<!-- <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-show="showBread">{{$route.meta.title}}</el-breadcrumb-item>
  <el-breadcrumb-item v-show="showBread">{{$route.meta.title}}</el-breadcrumb-item> -->
   <div class="navbar clearfix">
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item > <span @click="back">返回</span> </el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  <!-- 面包屑左侧显示页面标题 -->
  <!-- 面包屑右侧下拉功能块 -->
  <el-dropdown @command="handleCommand" class="select">
  <span class="el-dropdown-link">
    <img src="" alt=""><i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">Home</el-dropdown-item>
    <el-dropdown-item command="b">LogOut</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
</el-breadcrumb>
  </div>
<!-- </el-breadcrumb> -->
</template>
 
<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        levelList: []
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created() {
      this.getBreadcrumb()
    },
    methods: {
      back() {
        this.$router.go(-1); //返回上一层
      },
      getBreadcrumb() {
        //$route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
        let matched = this.$route.matched.filter(item => item.name)
        this.levelList = matched
      }
    }
  }
</script>




