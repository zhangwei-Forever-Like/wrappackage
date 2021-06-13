<template>
  <el-menu>
    <hamberger :is-active="opened" class="hamburger-container" @toggleClick="toggleSideBar" style="width: 20px;"/>
    <Breadcrumb></Breadcrumb>
  </el-menu>
</template>

<script>
import Hamberger from './hamberger.vue'
import Breadcrumb from './Breadcrumb.vue'

export default {
  data(){
    return{
     opened:true
    }
  },
components: {
  Hamberger,
  Breadcrumb
},
methods:{
  toggleSideBar(){
  this.opened = !this.opened;	
  }
}
}
</script>

<style>

</style>