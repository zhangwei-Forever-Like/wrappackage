<template>
  <div>
    <!-- <nav-bar></nav-bar> -->
    <div class="shopping-built">
      <div class="shooping-wrapper">
        <div class="shopping-content">
          <span class="built">商城网站建设</span>
          <span class="recruit">招募中</span>
        </div>
        <div class="shopping-zhye">
          <span class="sortnt">No</span>
          <span>设计师</span>
        </div>
        <div class="function">
          <span>金额</span>
          <span>2</span>
          <span>|</span>
          <span>类型</span>
          <span>2</span>
          <span>|</span>
          <span>周期</span>
          <span>3</span>
          <span>|</span>
          <span>需求类型</span>
          <span>4</span>
        </div>
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
export default {
};
</script>

<style>
.shopping-built {
  width: 900px;
  height: 900px;
  background-color: rgb(34, 164, 204);
  margin: 90px auto;
}
.item {
  margin-top: 50px;
  margin-right: 60px;
}
.shooping-wrapper {
  width: 840px;
  /* background-color: aqua; */
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
  background-color: blanchedalmond;
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
  background-color: chartreuse;
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