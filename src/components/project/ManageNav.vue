<template>
  <div class="manageNav">
    <router-link to="/manageUnre" class="rtl">招募订单</router-link>
    <router-link to="/manageProgress" class="rtl">进行订单</router-link>
    <router-link to="/manageFinished" class="rtl">完成订单</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.manageNav{
    width: 800px;
    margin-top: 40px;
    margin-left: 400px;
    margin-bottom: 50px;
}
.rtl{
    margin-right: 200px;
}
</style>