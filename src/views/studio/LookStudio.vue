<template>
  <div class="studioInfo">
    <!-- <nav-bar></nav-bar> -->
    <div class="wrapper">
      <div class="p-type">
        <div class="project-type">{{ projectName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexType == inxType ? 'project' : ''"
              @click="selectType(indexType)"
              v-for="(item, indexType) in StudioInfoItemtype"
              :key="indexType"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="p-type">
        <div class="project-type">{{ serverEmployeeName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexEmployee == inxEmployee ? 'serEmployee' : ''"
              @click="serverEmployeem( indexEmployee)"
              v-for="(item, indexEmployee) in serverEmployee"
              :key="indexEmployee"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
      <div class="p-type">
        <div class="project-type">{{ sortName }}</div>
        <div class="pr-type">
          <div class="pro-type">
            <span
              :class="indexSort == inxSort ? 'sortc' : ''"
              @click="sortm(indexSort)"
              v-for="(item, indexSort) in sort"
              :key="indexSort"
              >{{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="imgWrapper">
      <ul>
        <li
          class="studiotable"
          v-for="(item, index) in allProject"
          :key="index"
        >
          <div class="tidiCenter">
            <div class="tidiImg">
              <img :src="tianding" alt="" class="tidi" />
            </div>
            <div class="imgRight">
              <div class="studio">
                <span>工作室评价：</span>
                <el-rate
                  :value="item.evaluate_ability"
                  disabled
                  show-score
                  text-color="#ff9900"
                  class="comment"
                >
                  >
                </el-rate>
              </div>
              <div class="studio">
                <span>工作室擅长类型：</span>
                <span v-if="item.type_id == 1">Web网站</span>
                <span v-else-if="item.type_id == 2">App开发</span>
                <span v-else-if="item.type_id == 3">微信公众号</span>
                <span v-else-if="item.type_id == 4">HTML5应用</span>
                <span v-else-if="item.type_id == 5">小程序</span>
              </div>
              <div class="studio">
                <span>服务雇主数量：</span>
                <span>{{ item.nums }}</span>
                <!-- <span>{{item.description}}</span> -->
                <look-message :item="item"></look-message>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[4]"
      :page-size="1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="9"
    >
    </el-pagination>
  </div>
</template>

<script>
import tianding from "@/img/tianding.png";
import LookMessage from "./childPro/LookMessage.vue";

export default {
  components: { LookMessage },

  data() {
    return {
      dialogVisible: false,
      tianding,
      currentPage4: 3,
      // value: 3,
      studio: {
        name: "工作室名称：",
        descr: "工作室描述：",
        time: "成立时间：",
        phone: "联系电话：",
        type: "擅长类型：",
        comment: "评价：",
        number: "服务雇主数量：",
      },
      StudioInfoItemtype: [
        "全部",
        "Web网站",
        "APP开发",
        "微信公众号",
        "HTML5应用",
        "小程序",
        "其他",
      ],
      serverEmployee: [
        "20以下",
        "20-50",
        "50-100",
        "100-150",
        "150-200",
        "200+",
      ],
      sort: [
        "综合评价优先",
        "需求指标评价优先",
        "能力指标评价优先",
        "计划指标评价优先",
      ],
      projectName: "擅长的项目类型：",
      serverEmployeeName: "已服务雇主数量：",
      sortName: "排序：",
      inxType: 0,
      inxEmployee: 0,
      inxSort: 0,
      dialogVisible: false,
      page: {
        pageNo: 1,
        pageSize: 3,
      },
      allProject: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    selectType(indexType) {
      this.inxType = indexType;
      if(indexType==1){
        this.$$axios.get("/api/company/select_studioType/1/3",params())
      }
    },
    serverEmployeem(indexEmployee) {
      this.inxEmployee = indexEmployee;
    },
    sortm( indexSort) {
      this.inxSort = indexSort;
    },
    async getList() {
      const { data: res } = await this.$axios.get(
        "/api/company/select_studioAll/1/4"
      );
      console.log(res);
      this.allProject = res.data;
      console.log(this.allProject);
    },
    handleSizeChange(val) {
      console.log(val)
    },
    async handleCurrentChange(val) {
      if (val == 1) {
        this.getList();
        return;
      } else if (val == 2) {
        const { data: res } = await this.$axios.get(
          "/api/company/select_studioAll/2/4"
        );
        this.allProject = res.data;
        return;
      }else{
         const { data: res } = await this.$axios.get(
          "/api/company/select_studioAll/3/1"
        );
        this.allProject = res.data;
        return;
      }
    },
  },
  // components: {NavBar},
};
</script>

<style scoped>
.wrapper {
  width: 900px;
  height: 300px;
  background-color: antiquewhite;
  margin: 40px auto;
  border: 1px solid red;
}
.p-type {
  width: 100%;
  height: 100px;
  /* background-color: aqua; */
  /* position: relative; */
}
.project-type {
  padding-top: 30px;
  padding-left: 20px;
  /* background-color: red; */
}
.p-type .pr-type {
  width: 860px;
  height: 20px;
  /* background-color: rosybrown; */
  /* padding-top: 30px; */
  margin: 20px auto;
  padding-bottom: 9px;
  border-bottom: 1px solid red;
}
.pr-type .pro-type {
  width: 600px;
  margin-left: 70px;
}
.pro-type span {
  margin-left: 20px;
  font-size: 13px;
  cursor: pointer;
}
.project {
  background-color: royalblue;
}
.serEmployee {
  background-color: royalblue;
}
.sortc {
  background-color: royalblue;
}
.imgWrapper {
  width: 900px;
  /* height: 762px; */
  margin: 20px auto;
  /* background-color: aquamarine; */
  border: 1px solid rgb(214, 182, 140);
}
ul li {
  list-style: none;
  width: 100%;
  height: 220px;
  /* background-color: red; */
  /* background-color: aqua; */
  position: relative;
  border: red 1px solid;
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
</style>