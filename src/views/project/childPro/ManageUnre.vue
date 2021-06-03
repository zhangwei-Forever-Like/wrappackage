<template>
  <div>
    <manage-nav></manage-nav>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="项目标签" width="180">
      </el-table-column>
      <el-table-column label="项目详情" width="180">
        <el-button @click="getProgress">查看</el-button>
      </el-table-column>
      <el-table-column label="招募进度" width="180"> 招募中 </el-table-column>
      <el-table-column prop="name" label="工作室信息" width="180">
        <el-button @click="getStudiot">工作室</el-button>
      </el-table-column>
      <el-table-column label="定金" width="180">
        <el-button @click="getpayment">付款</el-button>
      </el-table-column>
      <el-table-column label="招标人数" width="180"> </el-table-column>
      <el-table-column label="管理" width="180">
        <el-button
          type="danger"
          icon="delete"
          @click="removeProgressProject(scope.$index)"
          >删除
        </el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1"
    >
    </el-pagination>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >支 付</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ManageNav from "../../../components/project/ManageNav.vue";
import Qs from "qs";
export default {
  components: { ManageNav },
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogVisible: false,
      userId: 1001,
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getProgress() {
      this.$router.push({
        path: "/manageProject",
      });
    },
    getStudiot() {
      this.$router.push({
        path: "/manageStudio",
      });
    },
    getpayment() {
      this.dialogVisible = true;
    },
    getList() {
      this.$axios
        .get(
          "/api/company/select_ByuUerId/1/2",
          {params:{userId:this.userId}}
        )
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style>
</style>