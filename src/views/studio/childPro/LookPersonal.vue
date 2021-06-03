<template>
  <div>
    <div class="imgWrapper1">
      <div class="tidiCenter">
        <div class="tidiImg">
          <img :src="tianding" alt="" class="tidi" />
        </div>
        <div class="imgRight">
          <div class="studio">
            <span>工作室评价：</span>
            <el-rate
              v-model="value1"
              disabled
              show-score
              text-color="#ff9900"
              class="comment"
            >
            </el-rate>
          </div>
          <div class="studio">
            <span>工作室擅长类型：</span>
          </div>
          <div class="studio">
            <span>服务雇主数量：</span>
          </div>
            <el-button type="text" @click="dialogVisible = true" 
      >详情</el-button
    >

    <el-dialog
      :visible.sync="dialogVisible"
      width="40%"
    >
     <div class="dialogcenter">
         <div class="comment-imgs">
         <img :src="tianding" alt="">
     </div>
      <!-- <span>这是一段信息</span> -->
      <p>
          <span>{{studio.name}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.descr}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.time}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.phone}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.type}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.comment}}</span>
          <span>11111111</span>
      </p>
      <p>
          <span>{{studio.number}}</span>
          <span>11111111</span>
      </p>

     </div>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false"
          >关闭</el-button
        >
      </span>
    </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tianding from '@/img/tianding.png'
export default {
  data() {
    return {
      value1: 4,
        dialogVisible: false,
        tianding,
        studio:{
            name:'工作室名称：',
            descr:'工作室描述：',
            time:'成立时间：',
            phone:'联系电话：',
            type:'擅长类型：',
            comment:'评价：',
            number:'服务雇主数量：'
        }
      };
  },
};
</script>

<style>
.imgWrapper .tidiCenter {
  width: 100%;
  height: 220px;
  /* background-color: red; */
  border-bottom: 1px solid rgb(204, 193, 179);
}
.tidiCenter .tidiImg {
  float: left;
  height: 100%;
}
.tidiCenter .imgRight {
  /* background-color: aqua; */
  height: 100%;
  margin-left: 20px;
  width: 600px;
  float: left;
  /* background-color: aqua; */
  position: relative;
}
.studio {
  margin-top: 40px;
}
.studio .comment {
  display: inline-block;
}
.information {
  position: absolute;
  right: 40px;
  width: 60px;
  height: 40px;
  /* background-color: red; */
  text-align: center;
  top: 100px;
}
.comment-imgs img{
    width: 70px;
    height: 70px;
    padding-left: 150px;
}
.dialogcenter p{
 padding-left: 120px;
 padding-bottom: 10px;
}
</style>