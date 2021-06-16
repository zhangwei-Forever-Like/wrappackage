<template>
  <div class="navbar clearfix">
    <el-breadcrumb
      class="breadcrumb-container"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item>
        <span @click="back" class="backbutton">返回</span>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        :to="item.path"
        >{{ item.meta.title }}</el-breadcrumb-item
      >
      <!-- 面包屑左侧显示页面标题 -->
      <!-- 面包屑右侧下拉功能块 -->
      <el-dropdown class="select">
        <span class="el-dropdown-link">
          <img
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt="tupian"
            class="user-avater"
          /><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/home">
            <el-dropdown-item command="a">Home</el-dropdown-item>
          </router-link>
          <router-link to="/login">
            <el-dropdown-item command="b">LogOut</el-dropdown-item>
          </router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </el-breadcrumb>
  </div>
  <!-- </el-breadcrumb> -->
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      levelList: [],
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一层
    },
    getBreadcrumb() {
      //$route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      let matched = this.$route.matched.filter((item) => item.name);
      this.levelList = matched;
    },
  },
};
</script>
<style>
.toggle-button {
  width: 20px;
  font-size: 25px;
  line-height: 55px;
  color: white;
  text-align: center;
  cursor: pointer;
}
.breadcrumb-container {
  /* padding-left:80px ; */
  /* display: inline-block; */
  margin-left: 80px;
  margin-top: 23px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  height: 100%;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.select {
  float: right;
}
.backbutton {
  cursor: pointer;
}
.user-avater {
  width: 30px;
  height: 30px;
  border-radius: 10px;
}
img {
  border-style: none;
}
</style>
