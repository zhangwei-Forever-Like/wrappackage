<template>
  <div id="one">
    <SNavBar></SNavBar>
    <div class="header">
      <div class="header-left">
        <li>
          <a style="color: black"
            ><i class="el-icon-user-solid" aria-hidden="true"></i> 个人中心</a
          >
        </li>
      </div>
    </div>
    <div class="uc-layer-top self">
      <About />
      <div class="s-header">
        <div class="h-nav">
          <router-link to="/personalcenter">个人资料</router-link>
          <router-link to="/myWallet">我的钱包</router-link>
        </div>
      </div>
    </div>

    <div class="setting-page cWidth">
      <div class="item-change">
        <div class="setting-item" id="personcenter">
          <div class="options basic">
            <h3 class="title">基本资料</h3>
            <ul>
              <li>
                <p>工作室名称：</p>
                <div class="edit-box">
                  <span>{{ tableData.username }}</span>
                </div>
                <!-- <template slot-scope="scope"> -->
                <el-button
                  type="button"
                  icon="edit"
                  @click="showUpdateBasicInfo"
                  >修改</el-button
                >
                <el-dialog
                  :title="textMap[dialogStatus]"
                  :visible.sync="dialogFormVisible1"
                  style="display: none"
                >
                  <el-form
                    class="small-space"
                    label-position="left"
                    label-width="80px"
                    style="width: 300px; margin-left: 50px"
                    :model="updateOne"
                  >
                    <el-form-item prop="description" v-show="isShow">
                      <el-input
                        type="text"
                        :v-model="updateOne.id = tableData.id"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="username" label="工作室名称">
                      <el-input
                        type="text"
                        v-model="updateOne.unit_name"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="unitName" label="工作室描述">
                      <el-input
                        type="text"
                        v-model="updateOne.description"
                      ></el-input>
                    </el-form-item>
                    <el-form-item prop="description" v-show="isShow">
                      <el-input
                        type="text"
                        :v-model="updateOne.type_id = tableData.typeId"
                      ></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false"
                      >取 消</el-button
                    >
                    <el-button type="primary" @click="updateUser"
                      >修 改</el-button
                    >
                  </div>
                </el-dialog>
              </li>
              <li>
                <p>工作室描述：</p>
                <div class="edit-box">
                  <span>{{ tableData.description }}</span>
                </div>
              </li>
              <li>
                <p>擅长项目类型：</p>
                <div class="edit-box">
                  <span>{{ tableData.typeId }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="options account">
            <h3 class="title">账号设置</h3>
            <ul>
              <li>
                <p>账号：</p>
                <div class="edit-box">
                  <span>{{ tableData.username }}</span>
                </div>
                <el-button type="button" icon="edit" @click="showUpdateAccount"
                  >修改</el-button
                >
              </li>
              <li>
                <p>邮箱：</p>
                <div class="edit-box">
                  <span>{{ tableData.email }}</span>
                </div>
                <el-dialog
                  :title="textMap[dialogStatus]"
                  :visible.sync="dialogFormVisible2"
                  style="display: none"
                >
                  <el-form
                    class="small-space"
                    label-position="left"
                    label-width="80px"
                    style="width: 300px; margin-left: 50px"
                  >
                    <el-form-item prop="email" label="邮箱">
                      <el-input type="text"></el-input>
                    </el-form-item>
                    <el-form-item prop="telephone" label="手机">
                      <el-input type="text"></el-input>
                    </el-form-item>
                    <el-form-item prop="address" label="城市">
                      <el-input type="text"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible2 = false"
                      >取 消</el-button
                    >
                    <el-button type="primary" @click="updateUser"
                      >修 改</el-button
                    >
                  </div>
                </el-dialog>
              </li>

              <li>
                <p>手机：</p>
                <div class="edit-box">
                  <span>{{ tableData.phone }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="options pass">
            <h3 class="title">密码</h3>
            <ul>
              <li>
                <p>密码：</p>
                <div class="edit-box">
                  <span>{{ tableData.password }}</span>
                </div>
                <el-button type="button" icon="edit" @click="showUpdatePwd"
                  >修改</el-button
                >
                <el-dialog
                  :title="textMap[dialogStatus]"
                  :visible.sync="dialogFormVisible3"
                  style="display: none"
                >
                  <el-form
                    class="small-space"
                    label-position="left"
                    label-width="80px"
                    style="width: 300px; margin-left: 50px"
                  >
                    <el-form-item label="原密码" required>
                      <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="新密码" required>
                      <el-input type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" required>
                      <el-input type="password"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible3 = false"
                      >取 消</el-button
                    >
                    <el-button type="primary" @click="updateUser"
                      >修 改</el-button
                    >
                  </div>
                </el-dialog>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Qs from "qs";
import About from "../workroom/About.vue";
import SNavBar from "../../components/NavBar/studio.vue";

export default {
  components: { About, SNavBar },
  data() {
    return {
      dialogStatus: "update",
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      textMap: {
        update: "编辑",
      },

      // dialogImageUrl: "",
      dialogVisible: false,
      studioid: 2,
      username: "mst",
      tableData: {}, //个人的资料
      isShow: false,
      updateOne: {
        //基本信息修改
        id: "",
        unit_name: "",
        description: "",
        type_id: "",
      },
      updateTwo: {
        //账号管理修改
        id: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },
  created() {
    this.getList();
    // this.getList2();
  },
  methods: {
    async getList() {
      const { data: res } = await this.$axios.get("/api/studio/select_one", {
        params: { username: this.username },
      });
      console.log(res);
      this.tableData = res.data[0];
      this.$store.commit('getId',this.tableData.id)
    },
    async updateUser() {
      const {data:res}=await this.$axios.post("/api/studio/update_one",Qs.stringify(this.updateOne))
      this.getList();
    },
    showUpdateBasicInfo() {
      this.dialogFormVisible1 = true;
    },
    showUpdateAccount() {
      this.dialogFormVisible2 = true;
    },
    showUpdatePwd() {
      this.dialogFormVisible3 = true;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
#one {
  height: 100%;
  padding: 0;
}
.header {
  background: transparent;
  padding: 2em 2em;
  position: fixed;
}
.header-left {
  float: left;
}
ul li {
  list-style: none;
}
.el-form-item {
  margin-bottom: 22px;
}
.el-button--button {
  color: #000;
  background-color: #fff;
  border-color: #fff;
  font-size: 13px;
  color: #595959;
  float: right;
}
.el-button--button:focus,
.el-button--button:hover {
  background: #dae7f5;
  border-color: #fff;
  color: #000;
  border-radius: 10px;
  right: 28em;
}
.col-md-5 {
  width: 90%;
}
.cWidth {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.uc-layer-top {
  height: 280px;
  padding: 0 0;
  background-color: #fff;
  border-bottom: 1px solid #c8c8c8;
  text-align: center;
  margin-bottom: 40px;
  overflow: hidden;
}
.setting-page {
  margin-top: 40px;
  margin-bottom: 60px;
  border: 1px solid #c8c8c8;
  padding-bottom: 60px;
  background: #ffffff;
}
#remove_bind {
  padding-left: 0;
  padding-top: 0;
}
#faceUploader {
  padding-left: 0;
  padding-top: 0;
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
.item-change .setting-item,
.item-change .notice-item {
  padding: 20px 40px 0 40px;
}
.item-change .setting-item .options {
  margin-top: 20px;
}
.item-change .setting-item .options .title {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
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
.item-change .setting-item .options ul li > a {
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
.item-change .setting-item .options .save-btn {
  display: block;
  margin-left: 75px;
  width: 56px;
  height: 26px;
  border-radius: 3px;
  background: #4d90fe;
  color: #ffffff;
  text-align: center;
  line-height: 26px;
  margin-top: 10px;
}
.item-change .setting-item .options {
  margin-top: 20px;
}
.item-change .setting-item .options .title {
  font-size: 14px;
  color: #333333;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 20px;
  line-height: 1;
}
.item-change .setting-item .options ul li .edit-box span {
  display: inline-block;
  line-height: 32px;
  color: #595959;
}
.item-change .notice-item .title {
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0 20px;
  line-height: 1;
}
.item-change .notice-item .title h2 {
  font-size: 14px;
}
.item-change .notice-item .l-box {
  width: 498px;
}
.item-change .notice-item .title h3 {
  font-size: 14px;
  font-weight: normal;
}
.item-change .t-tips {
  line-height: 30px;
  color: #aaaaaa;
  margin-top: 30px;
  padding-bottom: 60px;
}
.page .clearfix {
  zoom: 1;
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

.remove-bind-tip {
  padding-left: 28px;
  padding-right: 28px;
  border-bottom: 1px #ececec solid;
  padding-bottom: 24px;
}

.tel-validate .title {
  margin-bottom: 30px;
}
.tel-validate .title a {
  position: absolute;
  width: 30px;
  height: 30px;
  right: 28px;
  top: 28px;
  background: url(/Public/Home/img/close.png) left top no-repeat;
  border-radius: 3px;
}
.tel-validate .yzm-box .input {
  position: relative;
  height: 56px;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  margin-top: 10px;
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
  border: 1px solid #dcdcdc;
  background: #f2f2f2;
  border-radius: 3px;
  color: #818181;
  margin-top: 25px;
}
.tel-validate .primary {
  background: #357ae8;
  color: #fff;
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

.tel-validate .title {
  margin-bottom: 30px;
}
.tel-validate .words {
  line-height: 30px;
}
.tel-validate .input {
  position: relative;
  height: 56px;
  border-bottom: 1px solid #dcdcdc;
  box-sizing: border-box;
  margin-top: 10px;
}
.tel-validate .input span {
  width: 70px;
  height: 56px;
  line-height: 56px;
  color: #969696;
  font-size: 16px;
  float: left;
}
.tel-validate .input input {
  width: 130px;
  float: left;
  height: 54px;
  line-height: 54px\9;
  font-size: 16px;
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
input,
select,
textarea {
  outline: none;
  border: none;
  background: none;
  cursor: text;
}

.layer-feedBack .btns .yourEmail {
  display: inline-block;
  text-align: left;
  color: #000000;
  font-size: 14px;
  height: 38px;
  line-height: 38px;
  padding-left: 34px;
}
.item-change .setting-item .options ul li p {
  float: left;
  min-width: 75px;
  line-height: 32px;
  color: #969696;
}
.uploader-container {
  padding: 10px 30px;
}
.clearfix {
  zoom: 1;
}
.unbind-box {
  margin-top: 25px;
  color: #2d2d2d;
  padding-left: 30px;
  padding-top: 25px;
}
.unbind-box .title {
  font-weight: normal;
  color: #5a5a5a;
  font-size: 18px;
}
.unbind-box .btns {
  margin-top: 28px;
}
.uc-layer-top .uc-subtit {
  width: 320px;
  margin: 0 auto;
  position: relative;
  background-color: #f2f2f2;
}
.uc-subtit {
  font-size: 12px;
  line-height: 2;
  height: 26px;
}
.uc-layer-top .uc-subtit span.jifentxt {
  cursor: pointer;
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
}
.uc-layer-top .uc-subtit span {
  display: inline-block;
  vertical-align: middle;
  overflow: hidden;
}
.uc-layer-top .uc-subtit span.viptxt {
  width: 150px;
  margin-left: 5px;
}
.little-pop .btns .cancel {
  color: #818181;
  margin-right: 15px;
}
.little-pop .btns .sure.active {
  background: #357ae8;
  cursor: pointer;
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
  color: #fff;
  background: #9abdf4;
  cursor: default;
}
.little-pop .btns {
  padding-right: 26px;
  margin-top: 26px;
  height: 38px;
  text-align: right;
  font-size: 0;
  padding-bottom: 26px;
}
.little-pop {
  padding-left: 26px;
  padding-top: 10px;
  display: none;
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
.little-pop p {
  margin-top: 20px;
  font-size: 14px;
  color: #a9a9a9;
  height: 28px;
  line-height: 28px;
}
.wenkudownlist .hide {
  display: none;
}
.wenkudownlist .change-box {
  padding: 22px 0;
  border-bottom: 1px solid #dcdcdc;
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
  color: #ffffff !important;
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
</style>