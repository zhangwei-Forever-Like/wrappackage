<template>
  <el-table :data="tableData" border style="width: 100%" class="biao">
    <el-table-column type="index" label="序号" width="120"> </el-table-column>
    <el-table-column prop="username" label="账号" width="200">
    </el-table-column>
    <el-table-column prop="email" label="邮箱" width="250"> </el-table-column>
    <el-table-column prop="phone" label="联系电话" width="250">
    </el-table-column>
    <el-table-column prop="unitName" label="单位名称" width="220">
    </el-table-column>
    <el-table-column label="审核状态" width="200">
      <template slot-scope="scope">
        <el-button
          v-if="scope.row.auditStatus == 0"
          type="success"
          round
          @click="open(scope.row.username)"
          >审核通过</el-button
        >
        <el-button
          v-else-if="scope.row.auditStatus == 1"
          type="warning"
          round
          @click="open(scope.row.username)"
          >未审核</el-button
        >
        <el-button
          v-else-if="scope.row.auditStatus == 2"
          type="info"
          round
          @click="open(scope.row.username)"
          >审核中</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import Qs from "qs";
export default {
  data() {
    return {
      tableData: [],
      flag: false,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$axios.get("/api/admin/companyAll");
      //  console.log(res)
      this.tableData = res.data;
    },
    async open(username) {
      const confitResult = await this.$confirm(
        "此操作将修改审核状态, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (confitResult !== "confirm") {
        return this.$message.info("已取消修改");
      }
      const { data: res } = await this.$axios.post(
        "/api/admin/update_company_status",
        Qs.stringify({ username: username })
      );
      if (res.code !== 200) {
        return this.$message.error("修改失败");
      }
      this.$message.success("修改成功");
      this.getList();
    },
  },
};
</script>

<style>

</style>
