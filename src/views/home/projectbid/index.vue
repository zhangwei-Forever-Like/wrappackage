<template>
  <div>
    <div>
      <el-row ref="contentRef">
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
          ><el-button type="primary" @click="resetForm">重置</el-button></el-col
        >
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="100" align="center">
      </el-table-column>
      <el-table-column
        prop="project_title"
        label="项目名称"
        width="250"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="company_name"
        label="企业名称"
        width="250"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="studio_name"
        label="工作室名称"
        width="250"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="count" label="招标人数" width="150" align="center">
      </el-table-column>
      <el-table-column label="招标进度" width="150" align="center">
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
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$axios.get(
        "/api/admin//project_schedule/1/8"
      );
      // console.log(res);
      this.tableData = res.data;
    },
    async submitForm(content) {
      const { data: res } = await this.$axios.post(
        "/api/admin/schedule_by_title/1/8",
        Qs.stringify({ title: content })
      );
      if (res.data.length !== 0) {
        this.tableData = res.data;
        //  console.log(res)
      } else {
        const { data: res } = await this.$axios.post(
          "/api/admin/schedule_by_name/1/8",
          Qs.stringify({ name: this.content })
        );
        // console.log(res)
        this.tableData = res.data;
      }
    },
    resetForm() {
      this.content = "";
    },
  },
};
</script>

<style>
.el-row {
  margin-left: 48px;
  margin-bottom: 20px;
}
.buttonn {
  margin-left: 20px;
}
table,
tbody,
thead {
  width: 100% !important;
}
colgroup {
  position: absolute;
  width: 100% !important;
  display: flex;
}
col {
  flex: 1;
  text-align: center;
}
</style>
