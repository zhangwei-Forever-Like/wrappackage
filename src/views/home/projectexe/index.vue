<template>
  <div class="exe">
    <div class="exee">
      <!-- <p>筛选信息：<el-input v-model="input" placeholder="请输入内容"></el-input></p> -->
      <!-- 筛选信息：<input type="input" name="check" id="check" placeholder="请输入内容">
    <el-button type="primary">筛选</el-button>
    <el-button type="primary">取消</el-button> -->
      <el-row>
        <el-col :span="7">
          <el-input
            placeholder="请输入筛选内容"
            v-model="content"
            clearable
            @clear="getList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="submitForm(content)"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="4" class="buttonn"
          ><el-button type="primary" @click="reset">重置</el-button></el-col
        >
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="100"> </el-table-column>
      <el-table-column prop="title" label="项目名称" width="250">
      </el-table-column>
      <el-table-column label="项目进度" width="180">
        <template slot-scope="scope">
          {{ scope.row.percentage * 100 }}%
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="日期" width="250">
      </el-table-column>
      <el-table-column prop="company_name" label="公司名称" width="220">
      </el-table-column>
      <el-table-column prop="studio_name" label="工作室名称" width="220">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  data() {
    return {
      tableData: [],
      content: "",
      flag:true,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$axios.get(
        "/api/admin/implementation/1/8"
      );
      // console.log(res);
      this.tableData = res.data;
    },
    async submitForm(content) {
      const { data: res } = await this.$axios.post(
        "/api/admin/implementation_by_title/1/8",
        Qs.stringify({ title: content })
      );
      if (res.data.length !== 0) {
        this.tableData = res.data;
        // console.log(res)
      } else if (res.data.length == 0) {
        const { data: res } = await this.$axios.post(
          "/api/admin/implementation_by_company/1/8",
           Qs.stringify({name:content})
        );
        console.log(res)
       this.tableData = res.data;
       if(res.data.length !== 0){
         return
       }
        // console.log(res)
      } 
      if(res.data.length == 0) {
        const { data: res } = await this.$axios.post(
          "/api/admin/implementation_by_studio/1/8",
          Qs.stringify({ name: content })
        );
        this.tableData = res.data;
        console.log(res)
      }
    },
    reset() {
      this.content = "";
    },
  },
};
</script>

<style>
.exee {
  /* width: 200px; */
  /* display: inline; */
  /* font-color: #939099; */
  /* font: 14px;
  font-family: "Microsoft YaHei"; */
  margin-bottom: 20px;
  margin-left: 48px;
}
.buttonn {
  margin-left: 30px;
}
</style>