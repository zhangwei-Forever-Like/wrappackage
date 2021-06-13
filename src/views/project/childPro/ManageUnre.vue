<template>
  <div>
    <manage-nav></manage-nav>
    <el-table :data="allList" border style="width: 100%">
      <el-table-column type="index" label="序号" width="180"> </el-table-column>
      <el-table-column prop="project_title" label="项目标题" width="180">
      </el-table-column>
      <el-table-column label="项目详情" width="180">
        <el-button @click="getProgress">查看</el-button>
      </el-table-column>
      <el-table-column label="招募进度" width="180" prop="status">
        <template slot-scope="scope">
          <span v-if="scope.row.status == 0">招募结束</span>
          <span v-else-if="scope.row.status == 1">招募中</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="工作室信息" width="180">
        <el-button @click="getStudiot">工作室</el-button>
      </el-table-column>
      <el-table-column label="定金" width="180">
        <el-button @click="getpayment">付款</el-button>
      </el-table-column>
      <el-table-column label="招标人数" width="180">
        <template></template>
      </el-table-column>
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
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      dialogVisible: false,
      userId: 1001,
      allList: [],
    };
  },
  created() {
    this.getList();
    // this.getPayment();
    this.updateList();
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
    async getList() {
      const { data: res } = await this.$axios.get(
        "/api/company/select_ByuUerId/1/4",
        {
          params: { userId: this.userId },
        }
      );
      this.allList = res.data;
      console.log(res);
    },
    // async getpayment(){
    //   const {data:res}=await this.$axios.get("/api/company")
    // }
    async updateList(){
      const {data:res}=await this.$axios.get("/api/company/tender_sort/1/2",{params:{id:19011}})
      console.log(res)
    }
  },
};
</script>

<style>
</style>