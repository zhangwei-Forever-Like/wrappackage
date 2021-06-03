<template>
  <div class="nav">
      <router-link to="/personalcenter" class="rlick"  icon="el-icon-user-solid"><i class="el-icon-user"></i>个人中心</router-link>
      <router-link to="/management" class="rlick"><i class="el-icon-setting"></i>项目管理</router-link>
      <router-link to="/studio" class="rlick"><i class="el-icon-user-solid"></i>寻找工作室</router-link>
      <router-link to="/demend" class="rlick"><i class="el-icon-upload"></i>发布需求</router-link>
      <router-link to="/contactus" class="rlick"><i class="el-icon-chat-dot-round"></i>联系我们</router-link>
      <span class="rlick rlick2" @click="logout"><i class="el-icon-s-home"></i>退出登录</span>
  </div>
</template>

<script>
export default {
methods:{
    logout(){
        window.sessionStorage.clear();
        this.$router.push('/login')
    }
}
}
</script>

<style>
.nav{
    margin-left: 800px;
    margin-top: 30px;
}
.rlick{
    margin-left: 30px;
    color: aliceblue;
}
.rlick2{
    cursor: pointer;
}
i{
    margin-right: 6px;
}
</style>