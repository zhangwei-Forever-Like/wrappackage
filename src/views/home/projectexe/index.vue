<template>
<div class="exe">
  <div class="exee">
    <!-- <p>筛选信息：<el-input v-model="input" placeholder="请输入内容"></el-input></p> -->
    <!-- 筛选信息：<input type="input" name="check" id="check" placeholder="请输入内容">
    <el-button type="primary">筛选</el-button>
    <el-button type="primary">取消</el-button> -->
  <el-row>
    <el-col :span="7">
    <el-input placeholder="请输入筛选内容">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
  </el-col>
    <el-col :span="4" class="buttonn"><el-button type="primary" round>重置</el-button></el-col>
  </el-row>
  </div>
<el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="项目名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="address"
      label="项目进度"  width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="date"
      label="公司名称"
      >
    </el-table-column>
    <el-table-column
      prop="date"
      label="工作室名称"
      width="250">
    </el-table-column>
  </el-table>
  </div>
</template>

<style>
.exee{
  /* width: 200px; */
  /* display: inline; */
  /* font-color: #939099; */
  /* font: 14px;
  font-family: "Microsoft YaHei"; */
  margin-bottom: 10px;
}
.buttonn{
  margin-left: 30px;
}
</style>