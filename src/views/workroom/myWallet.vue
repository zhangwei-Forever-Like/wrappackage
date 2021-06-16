<template>
  <div>
    <SNavBar></SNavBar>
    <div class="uc-layer-top">
      <About />
      <div class="s-header">
        <div class="h-nav">
          <router-link to="/personalcenter">个人资料</router-link>
          <a href="#myWallet">我的钱包</a>
        </div>
      </div>
    </div>
    <div class="setting-page cWidth">
      <div class="item-change">
        <div class="setting-item" id="myWallet">
          <div class="options">
            <h3 class="title">我的余额</h3>
            <p>余额：{{datas.balance}}</p>
          </div>
          <div class="options">
            <h3 class="title">交易记录</h3>
            <el-form
              class="small-space"
              label-position="left"
              label-width="80px"
              style="width: 600px; margin-left: 50px; margin-bottom: 50px"
            >
              <el-table
                ref="filterTable"
                height="250"
                style="width: 1000px; margin-left: 50px"
              >
                <el-table-column prop="projectName" label="项目名称">
                </el-table-column>
                <el-table-column prop="unitName" label="工作室名称">
                </el-table-column>
                <el-table-column prop="budget" label="项目金额">
                </el-table-column>
              </el-table>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
import About from "../workroom/About.vue";
import SNavBar from "../../components/NavBar/studio.vue";

export default {
  components: { About, SNavBar },
  data(){
    return{
      datas:{}
    }
  },
  created(){
    this.getList()
  },
  methods:{
    async getList(){
      const {data:res}=await this.$axios.get("/api/studio/select_wallet",{params:{id:this.$store.state.id}})
      this.datas=res.data
    }
  }
};
</script>

<style scoped>
.uc-layer-top {
  height: 280px;
  margin-top: 65px;
  background-color: #fff;
  border-bottom: 1px solid #c8c8c8;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}
.uc-layer-top .uc-subtit {
  width: 320px;
  margin: 0 auto;
  position: relative;
  background-color: #f2f2f2;
}
.uc-layer-top .uc-subtit{
  cursor: pointer;
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
}
.uc-layer-top .uc-subtit{
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
    width: 150px;
  margin-left: 5px;
}
.s-header {
  height: 100px;
  margin-top: 15px;
}
.s-header .h-nav {
  text-align: center;
}
.s-header a.active {
  color: #4d90fe;
}
.s-header .h-nav a:first-child {
  margin-left: 0;
}
.s-header .h-nav a {
  font-size: 14px;
  margin-left: 145px;
  line-height: 40px;
  color: #aaa;
}
.setting-page {
  margin-top: 40px;
  margin-bottom: 60px;
  border: 1px solid #c8c8c8;
  padding-bottom: 60px;
  background: #ffffff;
}
.cWidth {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.item-change {
  min-height: 600px;
}
.item-change .setting-item {
  padding: 20px 40px 0 40px;
}
.item-change .setting-item .options {
  margin-top: 50px;
}
.item-change .setting-item .title {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 20px;
  line-height: 1;
}
.item-change .setting-item .options ul li .edit-box{
  display: inline-block;
  line-height: 32px;
  color: #595959;
}
.item-change .title {
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0 20px;
}

.item-change{
  font-size: 14px;
}
.item-change .l-box {
  width: 498px;
}
.item-change .title h3 {
  font-size: 14px;
  font-weight: normal;
}
.item-change .t-tips {
  line-height: 30px;
  color: #aaaaaa;
  margin-top: 30px;
  padding-bottom: 60px;
}
.item-change .options p {
  float: left;
  min-width: 75px;
  line-height: 32px;
  color: #969696;
}
.unbind-box .title {
  font-weight: normal;
  color: #5a5a5a;
  font-size: 18px;
}
.tel-validate .title {
  margin-bottom: 30px;
}
.el-form small-space,
.el-form--label-left {
  width: 800px;
  margin-left: 50px;
}
.el-table,
.el-table--fit,
.el-table--enable-row-hover,
.el-table--enable-row-transition {
  width: 600px;
  margin-left: 50px;
}
.el-form-item {
  margin-bottom: 22px;
}
</style>