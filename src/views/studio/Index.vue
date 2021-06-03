<template>
  <div class="index">
    <nav-car></nav-car>
    <div class="top"></div>
    <div class="block">
      <el-carousel height="350px" autoplay :interval="2000">
        <el-carousel-item v-for="item in 4" :key="item">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import NavCar from "../../components/navCar/NavCar.vue";
export default {
  components: { NavCar },
};
</script>

<style>
.index {
  background: url("../../img/bgc02.jpg");
   width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.top{
  margin-bottom: 80px;
}
.el-carousel__item {
  color: #475669;
  font-size: 14px;
  opacity: 0.2;
}
.nav {
  margin-top: 40px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #656b7c;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #f7f8fa;
}
</style>