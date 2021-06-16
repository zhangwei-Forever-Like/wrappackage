<template>
  <div id="header">
    <router-link to="/"><div id="title">发源地</div></router-link>
    <div id="function">
      <router-link to="/personalcenter"
        ><el-link :underline="false" icon="el-icon-user-solid"
          >个人中心</el-link
        ></router-link
      >
      <router-link to="/Two"
        ><el-link :underline="false" icon="el-icon-setting"
          >项目管理</el-link
        ></router-link
      >
      <router-link to="/StudioInfo"
        ><el-link :underline="false" icon="el-icon-edit"
          >查看项目列表</el-link
        ></router-link
      >
      <router-link to="/ContactUs"
        ><el-link :underline="false" icon="el-icon-chat-dot-round"
          >联系我们</el-link
        ></router-link
      >
      <!-- @click="loginOut" --> 
      <li class="logout" @click="logout"><span class="el-icon-s-home">退出登录</span></li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio4: "上海",
    }
  },
  methods:{
    logout(){
       window.sessionStorage.clear();
        this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
#header {
  height: 50px;
  width: 100%;
  padding: 0;
  background-color: rgb(106, 123, 141);
}
#title {
  color: white;
  font-size: 20px;
  /* font-weight: bolder; */
  line-height: 30px;
  display: inline-block;
  padding-left: 10px;
  margin-top: 10px;
}

#function {
  float: right;
  /* display: inline-block; */
  /* text-align: center; */
  margin-right: 100px;
  position: relative;
}
/* 注意：嵌套router-link=a标签 */
#function > a > * {
  margin-top: 10px;
}

#function > a > .el-link {
  font-size: 20px;
  padding-right: 30px;
  color: white;
}
.logout{
  position: absolute;
  right: -80px;
  top: 14px;
  list-style: none;
}
.logout span{
  font-size: 20px;
  color: white;
  cursor: pointer;
}
/* 去除下划线 */
a {
  text-decoration: none;
}
</style>