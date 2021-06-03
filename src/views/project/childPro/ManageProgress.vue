<template>
  <div>
      <manage-nav></manage-nav>
          <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="180"> </el-table-column>
      <el-table-column prop="name" label="项目标题" width="180"> </el-table-column>
      <el-table-column  label="项目详情" width="180">
        <el-button @click="getProgress">查看</el-button>
         </el-table-column>
      <el-table-column prop="name" label="项目进度" width="180"> 
        <el-button type="primary" plain @click="getContent">详情</el-button>
      </el-table-column>
      <el-table-column  label="工作室信息" width="180"> 
         <span @click="getStudio">工作室</span>
      </el-table-column>
      <el-table-column prop="name" label="尾款" width="180"> </el-table-column>
      <el-table-column  label="管理" width="180"> 
        <template slot-scope="scope">
          <el-button
            type="danger"
            icon="delete"
            @click="removeProgressProject(scope.$index)"
            >删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="1">
    </el-pagination>
    <el-dialog
      title="项目进度"
      center
      :visible.sync="dialogVisible"
      width="50%"
    >
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="日期" width="268px"> </el-table-column>
        <el-table-column label="项目进度" width="267px"> </el-table-column>
        <el-table-column label="验收状态"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ManageNav from '../../../components/project/ManageNav.vue';
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
      dialogVisible:false
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getProgress(){
      this.$router.push({
        path:'/manageProject'
      })
    },
      getContent() {
      this.dialogVisible = true;
    },
    getStudio(){
      this.$router.push({
        path:'/manageStudio',
        query:{
          message:'aaa'
        }
      })
    },
    removeProgressProject($index){
      
    }
  },
}
</script>

<style>

</style>