<template>
  <div class="nav">
      <router-link to="/personcent" class="rlick">个人中心</router-link>
      <router-link to="/projectmana" class="rlick">项目管理</router-link>
      <router-link to="/workmessage" class="rlick">工作室信息</router-link>
      <router-link to="/publicreq" class="rlick">发布需求</router-link>
      <router-link to="/adm" class="rlick">广告位申请</router-link>
      <router-link to="/our" class="rlick">联系我们</router-link>
  </div>
</template>

<script>
export default {

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
</style>