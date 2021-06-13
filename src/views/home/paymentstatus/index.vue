<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      label="序号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="project_title"
      label="项目名称"
      width="250">
    </el-table-column>
    <el-table-column
      prop="company_name"
      label="企业名称">
    </el-table-column>
    <el-table-column
      prop="studio_name"
      label="工作室名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="payment_deposit"
      label="定金"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="定金支付情况"
      width="150">
    </el-table-column>
    <el-table-column
      prop="date"
      label="尾款"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="尾款支付情况"
      width="150">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$axios.get("/api/admin/payment_status/1/8");
      console.log(res);
      this.tableData = res.data;
    },
  },
};
</script>

<style>

</style>