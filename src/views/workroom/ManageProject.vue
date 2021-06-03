<template>
  <div id="M">
    <SNavBar />
    <div class="shopping-built">
      <div class="shooping-wrapper">
        <div class="shopping-content">
          <span class="built">商城网站建设</span>
          <span class="recruit">招募中</span>
        </div>
        <div class="shopping-zhye">
          <span class="sortnt">No3</span>
          <span>设计师</span>
        </div>
        
        <div class="function">
          <span>金额</span>
          <span>2</span>
          <el-divider direction="vertical"></el-divider>
          <span>类型</span>
          <span>2</span>
          <el-divider direction="vertical"></el-divider>
          <span>周期</span>
          <span>3</span>
          <el-divider direction="vertical"></el-divider>
          <span>需求类型</span>
          <span>4</span>
        </div>
          <el-divider></el-divider>
        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
        <el-badge :value="1" class="item" type="primary">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="2" class="item" type="warning">
          <el-button size="small">回复</el-button>
        </el-badge>
          <el-divider></el-divider>
        <div class="descr-center">
          <div class="descr-content">
            <h3 class="descr">项目描述</h3>
            <p>1</p>
            <p>2</p>
          </div>
          <div class="descr-content">
            <h3 class="descr">项目周期</h3>
            <p>2</p>
          </div>
          <div class="descr-content">
            <h3 class="descr">招募角色</h3>
            <p>3</p>
          </div>
        </div>
        <h5>项目要求</h5>
        <div class="content-bottom">
          <div class="bottom-content">
            <el-button>下载</el-button>
            <span>DOCX</span>
            <span>任务.docx</span>
            <p class="time">更新时间&emsp;2021/5/18</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SNavBar from "../../components/NavBar/studio";
export default {
  components: { SNavBar },
};
</script>

<style>
#M{
  background-color: rgb(240, 242, 245);
  /* height: auto; */
  padding-bottom: 50px;
  background: #fff;
  min-height: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #333;
  border-radius: 4px;
}
.shopping-built {
  border: solid;
  width: 900px;
  height: 900px;
  background-color: rgb(34, 164, 204);
  margin: 50px auto;
}
.item {
  margin: 0 10px;
}
.shooping-wrapper {
  width: 840px;
  background-color: aqua;
  margin: 0px auto;
}
.shopping-content {
  padding-top: 20px;
  background-color: bisque;
  position: relative;
}
.shopping-content .built {
  font-size: 30px;
}
.shopping-content .recruit {
  position: absolute;
  right: 0px;
}
.shopping-zhye {
  margin-top: 15px;
}
.shopping-zhye span {
  margin-right: 7px;
}
.shopping-zhye .sortnt {
  background-color: rgb(126, 120, 112);
}
.function {
  margin-top: 20px;
}
.function span {
  margin-right: 20px;
}
.descr-content {
  height: 100px;
  /* background: blue; */
}
.descr-center {
  margin-top: 70px;
}
.content-bottom {
  height: 100px;
  background-color: rgb(237, 245, 252);
  margin: 50px auto;
  position: relative;
}
/* .content-bottom .bottom-content{
  padding-top: 20px;
  background-color: chocolate;
} */
.content-bottom.span {
  margin-left: 30px;
  /* font-size: 18px; */
}
.bottom-content .time {
  bottom: 0px;
  left: 350px;
  position: absolute;
}
</style>