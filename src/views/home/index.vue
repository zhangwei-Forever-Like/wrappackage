<template>
    <el-container>
      <!-- 左侧导航栏 -->
      <Nav></Nav>
  <el-container>
      <!-- 头部导航栏 -->
    <el-header>
      <!-- 面包屑 -->
      <Navbar></Navbar>
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
import Navbar from './Navbar.vue'



export default {
  components: {
    Nav,
    Navbar,
  },
}
</script>

<style>
/* .ad{
  height: 753px;
  background-color:#585464;
} */
/* .el-header, .el-footer {
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
  }; */

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
  
    el-header {
    background-color: #cf530c;
    color: #333;
    line-height: 60px;
    height: 100%;
  }

  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
    height: 100vh;
    flex-shrink: 1;
    margin-left: 0;
  }

  .el-main {
    background-color: #d5dfeb;
    color: #333;
    
  }
   
</style>
