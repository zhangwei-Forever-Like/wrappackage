<template>
  <div>
    <SNavBar></SNavBar>
    <div class="header">
      <div class="header-left">
        <li class="dropdown head-dpdn">
            <a style="color:black" class="dropdown-toggle"><i class="el-icon-user-solid" aria-hidden="true"></i>
              项目管理</a>
            <br>
        </li>
            <a style="color:black;margin-left:4em">↓</a>
            <br>
        <li class="dropdown head-dpdn">
            <a style="color:black" class="dropdown-toggle"><i class="el-icon-user-solid" aria-hidden="true"></i>
              已结束</a>
        </li> 
      </div>
    </div>
    <div class="uc-layer-top self">
          <About />
          <div class="s-header">
              <div class="h-nav">
                  <router-link to="/Two">投标中</router-link>
                  <router-link to="/studioManageProgress">进行中</router-link>
                  <a href="#studioManageFinished">已结束</a>
              </div>
          </div>
    </div>
      <div class="app-container">
         <!-- :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中"  -->
        <el-table border fit  highlight-current-row>
          <el-table-column align="center" label="序号" width="80">
            <template slot-scope="scope">
              <span v-text="getIndex(scope.$index)"> </span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="项目名称" prop="projectName" style="width: 60px;"></el-table-column>
          <el-table-column align="center" label="预支" prop="budget" style="width: 60px;"></el-table-column>
          <el-table-column align="center" label="工作室名字" prop="studioName" style="width: 60px;"></el-table-column>
          <el-table-column align="center" label="企业信息" style="width: 60px;">
            <template slot-scope="scope">
              <!-- <router-link to="/companyMessage">{{ scope.row.companyName }}</router-link> -->
              <a href="javascript:void(0);" @click="goParam(scope.row.companyName)">{{ scope.row.companyName }}</a>
            </template>
          </el-table-column>
          <el-table-column align="center" label="评分" width="200">
            <template slot-scope="scope">
              <p style="padding-right:5em">需求指标评分</p>
                <el-rate v-model="scope.row.evaluateDemand" :allow-half="true" disabled show-score text-color="#ff9900">
                </el-rate>
              <p style="padding-right:5em">能力指标评分</p>
                <el-rate v-model="scope.row.evaluateAbility" :allow-half="true" disabled show-score text-color="#ff9900">
                </el-rate>
              <p style="padding-right:5em">计划指标评分</p>
                <el-rate v-model="scope.row.evaluatePlan" :allow-half="true" disabled show-score text-color="#ff9900">
                </el-rate>
             </template>
          </el-table-column>
          <el-table-column align="center" label="项目情况" width="170">
            <template slot-scope="scope">
              <el-button type="primary"  @click="goParamDemand(scope.row.projectName,scope.row.companyName)" plain>查看</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="管理" width="120" >
            <template slot-scope="scope">
              <el-button type="danger" icon="delete"
                        @click="removeProject(scope.$index)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          :total="totalCount"
          :page-sizes="[10, 20, 50, 100]"
          layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
  </div>
    
</template>

<script>
import About from "../workroom/About.vue";
import SNavBar from '../../components/NavBar/studio';

export default {
  components: {About,SNavBar  },
    data() {
      return {
        modify:false,
        deposit:false,
        dialogVisible:false,
        totalCount: 0, //分页组件--数据总条数
        list: [],//表格的数据
        listLoading: false,//数据加载等待动画
        roles: [],//角色列表
        dialogStatus: 'create',
        dialogFormVisible: false,
        textMap: {
          update: '编辑',
          create: '新建用户'
        },
        studio_id:3
      }
    },
    created() {
      this.getList();
    },

    methods: {
 
      async getList() {
        //查询列表
       const {data:res}=await this.$axios.get("/api/studio/complete/1/5",{params:{studio_id:this.studio_id}})
       console.log(res)
      },
      handleSizeChange(val) {
        //改变每页数量
        this.handleFilter();
      },
      handleCurrentChange(val) {
        //改变页码
        this.getList();
      },
      handleFilter() {
        //查询事件

      },
      getIndex($index) {
        //表格序号
      },
      showCreate() {
        //显示新增对话框
        this.dialogStatus = "create"
        this.dialogFormVisible = true
      },
      showUpdate($index) {
        this.dialogStatus = "update"
        this.dialogFormVisible = true
      },
      createUser() {
        //添加新用户

      },
      goParam:function(msg){
        this.$router.push({
        path:'/companyMessage',

        query:{
          companyName:msg
        }
        })
      },
      goParamDemand:function(projectName,companyName) {
      },
      removeProject($index) {
        this.tempStudio = this.list[$index];
        // this.tempStudio.studioName = this.$root.unitName;
        this.tempStudio.deleteStatus = 0;
        //添加项目到进行中
      },
    },
    // components:{SNavBar},

  }
  
  
</script>

<style>
  .header{
    background: transparent;
    padding: 2em 2em;
    position: fixed;
}
  .header-left {
    float: left;
}
  .uc-layer-top.self {
    height: 280px;
    margin-top: 65px;
  }

  .uc-avatar {
      width: 115px;
      margin: 45px auto 0;
      background-color: #fff;
      position: relative;
  }
 

  .uc-subtit {
      font-size: 12px;
      line-height: 2;
      height: 26px;
  }
  .uc-layer-top {
      height: 260px;
      background-color: #fff;
      border-bottom: 1px solid #C8C8C8;
      text-align: center;
      margin-bottom: 40px;
      overflow: hidden;
  }
  .s-header {
    height: 60px;
    margin-top: 15px;
  } 
  .s-header .h-nav {
    text-align: center;
  }
  .item-change {
    min-height: 600px;
  }
  .item-change .setting-item, .item-change .notice-item {
    padding: 20px 40px 0 40px;
  }
  .item-change .setting-item .options {
    margin-top: 20px;
  }
  .item-change .setting-item .options .title {
    font-size: 14px;
    color: #333333;
    border-bottom: 1px solid #DCDCDC;
    padding-bottom: 20px;
    line-height: 1;
  }
  .item-change .setting-item .options ul {
    padding-top: 10px;
  }
  .item-change .setting-item .options ul li {
    height: 32px;
    margin-top: 10px;
  }
  .item-change .setting-item .options ul li .edit-box {
    float: left;
  }
  .item-change .setting-item .options ul li .edit-box .txts {
    width: 172px;
    height: 30px;
    line-height: 30px\9;
    border: 1px solid #c8c8c8;
    color: #595959;
    padding: 0 14px;
    border-radius: 3px;
    display: none;
    font-size: 14px;
  }
  .item-change .setting-item .options ul li .edit-btn {
    color: #818181;
    border: 1px solid #c8c8c8;
  }
  .item-change .setting-item .options ul li>a {
      float: right;
      min-width: 56px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      font-size: 12px;
      border-radius: 3px;
      margin-top: 3px;
      padding-left: 5px;
      padding-right: 5px;
  }
  .item-change .setting-item .options ul li .exit-edit {
    color: #4d90fe;
    border: 1px solid #4d90fe;
    display: none;
  }
  .item-change .setting-item .options ul li>a {
      float: right;
      min-width: 56px;
      height: 22px;
      text-align: center;
      line-height: 22px;
      font-size: 12px;
      border-radius: 3px;
      margin-top: 3px;
      padding-left: 5px;
      padding-right: 5px;
  }
  .item-change .setting-item .options .save-btn {
    display: block;
    margin-left: 75px;
    width: 56px;
    height: 26px;
    border-radius: 3px;
    background: #4d90fe;
    color: #FFFFFF;
    text-align: center;
    line-height: 26px;
    margin-top: 10px;
  }
  .hide2 {
      display: none !important;
  }
  .item-change .setting-item .options {
    margin-top: 20px;
  }
  .item-change .setting-item .options .title {
    font-size: 14px;
    color: #333333;
    border-bottom: 1px solid #DCDCDC;
    padding-bottom: 20px;
    line-height: 1;
  }
  .item-change .setting-item .options ul li .edit-box span {
    display: inline-block;
    line-height: 32px;
    color: #595959;
  }
  .hide {
    display: none;
  }
  .item-change .notice-item .title {
    border-bottom: 1px solid #DCDCDC;
    padding: 20px 0 20px;
    line-height: 1;
  }
  .clearfix {
      zoom: 1;
  }
  .item-change .notice-item .title h2 {
    font-size: 14px;
  }
  .item-change .notice-item .l-box {
      width: 498px;
  }
  .fl {
      float: left;
  }
  .item-change .notice-item .title h3 {
    font-size: 14px;
    font-weight: normal;
  }

  .item-change .t-tips {
    line-height: 30px;
    color: #AAAAAA;
    margin-top: 30px;
    padding-bottom: 60px;
  }


  .wenkudownlist .change-box .item {
    text-align: center;
    font-size: 0;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    width: 345px;
    margin: 0 auto;
    height: 34px;
  }
  .wenkudownlist .change-box .item a:first-child.active {
    left: -1px;
    border-radius: 3px 0 0 3px;
  }
  .wenkudownlist .change-box .item a.active {
      position: relative;
      height: 36px;
      line-height: 34px;
      background: #4d90fe;
      color: #ffffff!important;
      top: -1px;
  }
  .wenkudownlist .change-box .item a {
      display: inline-block;
      font-size: 12px;
      width: 115px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      color: #2d2d2d;
  }
  .wenkudownlist .tableBox {
    padding: 0 40px;
  }
  .wenkudownlist .table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  .wenkudownlist .table>tbody>tr>td[align='center'] {
    text-align: center;
  }
  .wenkudownlist .table>thead>tr>th, .wenkudownlist .table>tbody>tr>td {
      text-align: left;
      padding: 10px 5px;
      line-height: 1.42857143;
      font-weight: normal;
  }
  .page .clearfix{
    zoom: 1;
  }
  .skin-vip {
    color: rgb(170,170,170);
    font-size: 12px;
    height: auto;
    text-align: center;
  }
  .mask-layer {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000000;
    top: 0;
    left: 0;
    opacity: 0.3;
    filter: alpha(opacity=30);
    z-index: 9;
  }
    .hide {
    display: none;
  }
  .settingclose {
    position: absolute;
    top: -16px;
    right: -16px;
    background: url(/Public/Common/img/icon-setting-close.png) 0 0 no-repeat;
    display: block;
    width: 32px;
    height: 32px;
  }
  .wechat-container {
    border: 1px #d1d1d1 solid;
    width: 228px;
    height: 228px;
    margin: 0px auto;
    background: url(/Public/Common/img/loading-grey.gif) #ffffff center 70px no-repeat;
    background-size: 45px;
    position: relative;
  }
  .loading-txt {
    display: block;
    position: absolute;
    left: 0;
    top: 120px;
    text-align: center;
    width: 228px;
    color: #5a5a5a;
    font-size: 14px;
    z-index: 0;
  }
  .wechat-container img {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
  }
  img {
      border: none;
  }
  span.bind-wechatuid {
    display: block;
    text-align: center;
    padding-top: 40px;
    font-size: 14px;
    color: #5a5a5a;
  }
  #remove_bind h3 {
    border-bottom: none;
  }
  .little-pop .word {
    height: 66px;
    line-height: 66px;
    font-size: 18px;
    color: #aaaaaa;
    font-weight: normal;
    border-bottom: 1px solid #dcdcdc;
    padding-left: 28px;
  }
  .remove-bind-tip {
    padding-left: 28px;
    padding-right: 28px;
    border-bottom: 1px #ececec solid;
    padding-bottom: 24px;
  }
  .little-pop .btns {
    padding-right: 26px;
    margin-top: 26px;
    height: 38px;
    text-align: right;
    font-size: 0;
    padding-bottom: 26px;
  }
  .little-pop .btns .cancel {
    color: #818181;
    margin-right: 15px;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  .little-pop .btns .sure.active {
    background: #357ae8;
    cursor: pointer;
  }
  .little-pop .btns .sure {
    color: #FFF;
    background: #9abdf4;
    cursor: default;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  .uploader-container {
    padding: 10px 30px;
  }
  .clearfix {
    zoom: 1;
  }
  .frame {
    width: 300px;
    height: 300px;
    border: 5px #D1D1D1 solid;
    border-radius: 3px;
    float: left;
    position: relative;
    overflow: hidden;
  }
  .faceUploaderPlus {
    display: inline-block;
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 80px;
    color: #78787A;
  }
  .frame img {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 0;
    -ms-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    -o-transform: translate(0,-50%);
    transform: translate(0,-50%);
  }
  img {
    border: none;
  }
  #preview {
    float: left;
    width: 100px;
    height: 100px;
    border: 1px #D1D1D1 solid;
    overflow: hidden;
    margin-left: 20px;
    border-radius: 80px;
  }

  .tel-validate .yzm-box .input {
    position: relative;
    height: 56px;
    border-bottom: 1px solid #dcdcdc;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .fl {
      float: left;
  }
  .tel-validate .yzm-box .input input {
    width: 130px;
    float: left;
    height: 54px;
    line-height: 54px\9;
    font-size: 16px;
  }
  .tel-validate .yzm-box .get-yzm {
    float: right;
    width: 126px;
    height: 36px;
    box-sizing: border-box;
    text-align: center;
    line-height: 36px;
    border: 1px solid #DCDCDC;
    background: #F2F2F2;
    border-radius: 3px;
    color: #818181;
    margin-top: 25px;
  }
  .tel-validate .button {
    background: #357AE8;
    color: #FFF;
    display: block;
    border-radius: 5px;
    behavior: url(/Public/Common/PIE.htc);
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    width: auto;
    margin-top: 30px;
  }
  .unbind-box .re-words {
    margin-top: 25px;
    color: #2D2D2D;
  }
  .little-pop p {
    margin-top: 20px;
    font-size: 14px;
    color: #a9a9a9;
    height: 28px;
    line-height: 28px;
  }
  .unbind-box .btns {
    margin-top: 28px;
  }
  .little-pop .btns {
    padding-right: 26px;
    margin-top: 26px;
    height: 38px;
    text-align: right;
    font-size: 0;
    padding-bottom: 26px;
  }
  .little-pop .btns .cancel {
    color: #818181;
    margin-right: 15px;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  .little-pop .btns .sure.active {
    background: #357ae8;
    cursor: pointer;
  }
  .little-pop .btns .sure {
    color: #FFF;
    background: #9abdf4;
    cursor: default;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  .tel-validate .title {
    margin-bottom: 30px;
  }
  .tel-validate .words {
    line-height: 30px;
  }
  .clearfix {
    zoom: 1;
  }
  .tel-validate .yzm-box .input {
    position: relative;
    height: 56px;
    border-bottom: 1px solid #dcdcdc;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .tel-validate .yzm-box .input span {
    width: 70px;
    height: 56px;
    line-height: 56px;
    color: #969696;
    font-size: 16px;
    float: left;
  } 
  .tel-validate .yzm-box .input input {
    width: 130px;
    float: left;
    height: 54px;
    line-height: 54px\9;
    font-size: 16px;
  }
  .help-dips a.help-icon-ques, .help-dips a.help-icon-ques:active {
    background-position: -45px -29px;
    background-image: url(/Public/Common/img/help-icon.png);
    background-repeat: no-repeat;
}
.help-dips a.help-icon-ques {
    width: 28px;
    height: 28px;
    background-position: -45px -29px;
    display: block;
    /* position: absolute; */
    /* right: 0; */
    /* bottom: 0; */
    cursor: pointer;
  }
  .help-icon {
    background-image: url(/Public/Common/img/help-icon.png);
    background-repeat: no-repeat;
    display: block;
  }
  .help-dips .help-dips-box {
    position: absolute;
    right: -14px;
    bottom: 45px;
    width: 130px;
    background-color: #ffffff;
    box-shadow: 1px 1.732px 3px 0px rgba(0, 0, 0, 0.3);
    padding: 5px 0px 5px 0px;
    display: none;
    box-sizing: border-box;
  }
  .help-dips .help-dips-box i.help-icon-bdot {
    display: block;
    background-position: -21px 0px;
    width: 33px;
    height: 15px;
    position: absolute;
    z-index: 99;
    bottom: -15px;
    right: 11px;
  }
  .help-icon {
    background-image: url(/Public/Common/img/help-icon.png);
    background-repeat: no-repeat;
    display: block;
  }
  .help-dips .help-dips-box a {
    font-size: 14px;
    color: #000000;
    display: block;
    padding-left: 14px;
    /* height: 37px; */
    /* line-height: 37px; */
    padding-top: 14px;
    padding-bottom: 14px;
  }
  .feedback-header {
    padding: 13px 17px 0px 17px;
  }
  .clearfix {
      zoom: 1;
  }
  .layer-feedBack .feedback-header a.closeFeedback {
    background-image: url(/Public/Home/img/close.png);
    background-repeat: no-repeat;
    display: block;
    width: 16px;
    height: 16px;
    background-position: -7px -7px;
  }
  .fr {
    float: right;
  }
  .feedMessageBox {
    padding-left: 34px;
    padding-right: 34px;
    padding-top: 20px;
  }
  .feedMessageBox textarea {
    border: 1px #dcdcdc solid;
    border-radius: 3px;
    padding: 13px 19px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    height: 118px;
    margin-top: 16px;
  }
  textarea {
    resize: none;
  }
  input, select, textarea {
    outline: none;
    border: none;
    background: none;
    cursor: text;
  }
  .little-pop .btns {
    padding-right: 26px;
    margin-top: 26px;
    height: 38px;
    text-align: right;
    font-size: 0;
    padding-bottom: 26px;
  } 
  .layer-feedBack .btns .yourEmail {
    display: inline-block;
    text-align: left;
    color: #000000;
    font-size: 14px;
    float: left;
    height: 38px;
    line-height: 38px;
    padding-left: 34px;
  }
    .little-pop .btns {
    padding-right: 26px;
    margin-top: 26px;
    height: 38px;
    text-align: right;
    font-size: 0;
    padding-bottom: 26px;
  }
  .little-pop .btns .cancel {
    color: #818181;
    margin-right: 15px;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  .little-pop .btns .sure {
    color: #FFF;
    background: #9abdf4;
    cursor: default;
  }
  .little-pop .btns a {
    display: inline-block;
    width: 84px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    font-size: 16px;
    border-radius: 3px;
  }
  ul, ol, li, p, h1, h2, h3, h4, h5, h6, form, fieldset, table, td, img, div, dl, dt, dd, input, textarea {
    margin: 0;
    padding: 0;
}
.item-change .setting-item .options ul li p {
    float: left;
    min-width: 75px;
    line-height: 32px;
    color: #969696;
}
.uc-name {
    border-top: 1px solid #dcdcdc;
    padding: 30px 20px 20px 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top: -30px;
    line-height: 34px;
    height: 34px;
  }
  .s-header .h-nav a.active {
    color: #4D90FE;
  }
  .s-header .h-nav a:first-child {
    margin-left: 0;
  }
  .s-header .h-nav a {
    font-size: 14px;
    margin-left: 145px;
    line-height: 40px;
    color: #aaa;
  }
  .app-container{
      padding-left:10%;
      padding-right:10%;
      padding-bottom: 20%;
  }
</style>

