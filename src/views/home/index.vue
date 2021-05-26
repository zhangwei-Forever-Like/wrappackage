<template>
    <el-container>
      <!-- 左侧导航栏 -->
      <Nav></Nav>
  <el-container>
      <!-- 头部导航栏 -->
    <el-header>
      <!-- 面包屑 -->
      <Breadcrumb></Breadcrumb>
    </el-header>
    <!-- 主题数据部分 -->
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import Nav from './Nav.vue'
import Breadcrumb from './Breadcrumb.vue'

export default {
  components: {
    Nav,
    Breadcrumb
  }
}
</script>

<style>
.ad{
  /* width: 180px; */
  height: 753px;
  background-color:#545c64;
}
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    align-items: center;
  };
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 765px;
  };
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  };
  body > .el-container {
    margin-bottom: 40px;
  };
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  };
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  };
   .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    height: 100%;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .select{
      float:right;
  }
</style>
