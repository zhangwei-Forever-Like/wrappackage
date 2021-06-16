<template>
  <div class="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    ></vue-particles>
    <!--    登录框-->
    <div class="login_box">
      <div class="status">
        <el-radio v-model="radio" label="0">管理员</el-radio>
        <el-radio v-model="radio" label="1">企业</el-radio>
        <el-radio v-model="radio" label="2">工作室</el-radio>
      </div>
      <el-form
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        status-icon
        class="login_form"
      >
        <!--        用户名-->
        <el-form-item label="账号" label-width="60px" prop="username">
          <el-input
            placeholder="请输入账号"
            v-model="loginForm.username"
            prefix-icon="el-icon-user"
          ></el-input>
        </el-form-item>
        <!--        密码-->
        <el-form-item label="密码" label-width="60px" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="loginForm.password"
            show-password
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <!--        按钮-->
        <el-form-item class="btns">
          <!-- 回车键盘监听 -->
          <!-- @keyup.enter="login('loginFormRef')" -->
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
          <el-button @click="openDialog" type="success">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <!--管理员注册表单-->
      <el-dialog
        title="注册"
        :visible.sync="adminDialog"
        @close="closeDialog"
        :append-to-body="true"
        :close-on-click-modal="false"
      >
        <el-form :model="adminRegisterInfo" ref="registerFormRef" status-icon>
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="adminRegisterInfo.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              show-password
              v-model="adminRegisterInfo.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input
              type="password"
              v-model="adminRegisterInfo.rePassword"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="register-button" slot="footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="register">注册</el-button>
        </div>
      </el-dialog>

      <!--企业注册表单-->
      <el-dialog
        title="注册"
        :close-on-click-modal="false"
        :visible.sync="entrDialog"
        @close="closeDialog"
        :append-to-body="true"
      >
        <el-form
          :model="entrRegisterInfo"
          ref="registerFormRef"
          status-icon
          size="mini"
          :rules="entrRegisterRule"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="entrRegisterInfo.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              show-password
              type="password"
              v-model="entrRegisterInfo.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input
              type="password"
              v-model="entrRegisterInfo.rePassword"
            ></el-input>
          </el-form-item>
          <el-form-item label="企业名称" prop="unitName">
            <el-input
              type="text"
              v-model="entrRegisterInfo.unitName"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="entrRegisterInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input type="number" v-model="entrRegisterInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="role" v-show="isShow">
            <el-input
              type="text"
              :v-model="(entrRegisterInfo.role = 1)"
            ></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input
              type="text"
              v-model="entrRegisterInfo.description"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像" prop="image" v-show="isShow">
            <el-input
              type="text"
              :v-model="(entrRegisterInfo.image = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="审核状态" prop="auditStatus" v-show="isShow">
            <el-input
              type="number"
              :v-model="(entrRegisterInfo.auditStatus = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="成立时间" prop="establishedTime">
            <el-input
              type="text"
              v-model="entrRegisterInfo.establishedTime"
            ></el-input>
          </el-form-item>
          <el-form-item label="余额" prop="balance" v-show="isShow">
            <el-input
              type="number"
              :v-model="(entrRegisterInfo.balance = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="逻辑删除" prop="deleted" v-show="isShow">
            <el-input
              type="number"
              :v-model="(entrRegisterInfo.deleted = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="乐观锁" prop="version" v-show="isShow">
            <el-input
              type="number"
              :v-model="(entrRegisterInfo.version = 1)"
            ></el-input>
          </el-form-item>
          <el-form-item label="创建时间" prop="createTime" v-show="isShow">
            <el-input
              type="text"
              :v-model="(entrRegisterInfo.createTime = '2019-01-03 10:59:27')"
            ></el-input>
          </el-form-item>
          <el-form-item label="修改时间" prop="updateTime" v-show="isShow">
            <el-input
              type="text"
              :v-model="(entrRegisterInfo.updateTime = '2019-01-03 10:59:27')"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="register-button" slot="footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="register">立即注册</el-button>
        </div>
      </el-dialog>

      <!--工作室注册表单-->
      <el-dialog
        title="注册"
        :close-on-click-modal="false"
        :visible.sync="userDialog"
        @close="closeDialog"
        :append-to-body="true"
      >
        <el-form
          status-icon
          ref="registerFormRef"
          :model="userRegisterInfo"
          size="mini"
          :rules="userRegisrerRule"
        >
          <el-form-item label="用户名" prop="username">
            <el-input
              type="text"
              v-model="userRegisterInfo.username"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              show-password
              type="password"
              v-model="userRegisterInfo.password"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="rePassword">
            <el-input
              type="password"
              v-model="userRegisterInfo.rePassword"
            ></el-input>
          </el-form-item>
          <el-form-item label="工作室名称" prop="unitName">
            <el-input
              type="text"
              v-model="userRegisterInfo.unitName"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="text" v-model="userRegisterInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="phone">
            <el-input type="number" v-model="userRegisterInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="角色" prop="role" v-show="isShow">
            <el-input
              type="text"
              :v-model="(userRegisterInfo.role = 2)"
            ></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="description">
            <el-input
              type="text"
              v-model="userRegisterInfo.description"
            ></el-input>
          </el-form-item>
          <el-form-item label="头像" prop="image" v-show="isShow">
            <el-input
              type="text"
              :v-model="(userRegisterInfo.image = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="审核状态" prop="auditStatus" v-show="isShow">
            <el-input
              type="number"
              :v-model="(userRegisterInfo.auditStatus = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="成立时间" prop="establishedTime">
            <el-input
              type="text"
              v-model="userRegisterInfo.establishedTime"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="需求指标评分"
            prop="evaluateDemand"
            v-show="isShow"
          >
            <el-input
              type="number"
              :v-model="(userRegisterInfo.evaluateDemand = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="能力指标评分"
            prop="evaluateAbility"
            v-show="isShow"
          >
            <el-input
              type="number"
              :v-model="(userRegisterInfo.evaluateAbility = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="计划指标评分"
            prop="evaluatePlan"
            v-show="isShow"
          >
            <el-input
              type="number"
              :v-model="(userRegisterInfo.evaluatePlan = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="擅长类型" prop="typeId">
            <el-input
              type="number"
              v-model="userRegisterInfo.typeId"
            ></el-input>
          </el-form-item>
          <el-form-item label="服务总数" prop="nums" v-show="isShow">
            <el-input
              type="number"
              :v-model="(userRegisterInfo.nums = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="余额" prop="balance" v-show="isShow">
            <el-input
              type="number"
              :v-model="(userRegisterInfo.balance = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="逻辑删除" prop="deleted" v-show="isShow">
            <el-input
              type="number"
              :v-model="(userRegisterInfo.deleted = 0)"
            ></el-input>
          </el-form-item>
          <el-form-item label="乐观锁" prop="version" v-show="isShow">
            <el-input
              type="number"
              :v-model="(userRegisterInfo.version = 1)"
            ></el-input>
          </el-form-item>
          <el-form-item label="创建时间" prop="createTime" v-show="isShow">
            <el-input
              type="text"
              :v-model="(userRegisterInfo.createTime = '2019-01-03 10:59:27')"
            ></el-input>
          </el-form-item>
          <el-form-item label="修改时间" prop="updateTime" v-show="isShow">
            <el-input
              type="text"
              :v-model="(userRegisterInfo.updateTime = '2019-01-03 10:59:27')"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="register-button" slot="footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="register">立即注册</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import Qs from "qs";
export default {
  data() {
    var checkEmail = (rule, value, cb) => {
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

      if (regEmail.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    var checkMobile = (rule, value, cb) => {
      const regMobile = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

      if (regMobile.test(value)) {
        return cb();
      }
      cb(new Error("请输入合法的手机号"));
    };
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "mst",
        password: "123456",
        pwdType: "password",
      },
      isShow: false,
      //管理员注册对话框
      adminDialog: false,
      //用户注册对话框
      userDialog: false,
      //企业注册对话框
      entrDialog: false,
      //管理员注册信息对象
      adminRegisterInfo: {},
      //用户注册信息对象
      userRegisterInfo: {},
      //企业注册信息对象
      entrRegisterInfo: {},
      loginFormRules: {
        username: [
          { required: true, message: "请输入登录账号", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
      entrRegisterRule: {
        username: [
          { required: true, message: "请输入您的用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
        rePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            min: 5,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
        unitName: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 5 到 15 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入合法的邮箱", trigger: "blur" },
          {
            validator: checkEmail,
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入合法的手机号", trigger: "blur" },
          { validator: checkMobile, trigger: "blur" },
        ],
        description: [
          { required: true, message: "请输入您的描绘内容", trigger: "blur" },
          {
            min: 10,
            max: 20,
            message: "长度在 10 到 20 个字符",
            trigger: "blur",
          },
        ],
      },
      userRegisrerRule: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        rePassword: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
        unitName: [
          { required: true, message: "请输入工作室名称", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入合法的邮箱", trigger: "blur" },
          {
            validator: checkEmail,
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入合法的手机号", trigger: "blur" },
          {
            validator: checkMobile,
            trigger: "blur",
          },
        ],
        description: [
          { required: true, message: "请输入您所描绘的内容", trigger: "blur" },
          {
            min: 6,
            max: 10,
            message: "长度在 6 到 10 个字符",
            trigger: "blur",
          },
        ],
        typeId: [
            { required: true, message: '请输入您擅长的内容', trigger: 'blur' },
          {
            min: 6,
            max: 10,
            message: '长度在 6 到 10 个字符',
            trigger: 'blur',
          },
        ]
      },
      radio: "2",
    };
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login() {
      let _this=this;
      this.$refs.loginFormRef.validate((valid) => {
        if (!valid) return;
          var url = "/api/login/admin";
        console.log(valid);
        console.log(this.radio);
        this.$axios
          .post(
            url,
            Qs.stringify({
              username: this.loginForm.username,
              password: this.loginForm.password,
              role: this.radio,
              headers: {
                Authorization: " ",
              },
            })
          )
          .then((response) => {
            console.log(response);
            this.code =response.data.code;
            this.userToken =response.data.token;
            console.log("开始输出")
            // console.log(_this.userToken)//获取到的token
            this.changeLogin({Authorization: this.userToken});
            
            // // 将用户token保存到vuex中
            // _this.changeLogin({Authorization: _this.userToken});
            // _this.state.username=response.data.data
            // _this.state.status=true;
            // console.log(_this.$store.state.status)
            if (_this.code === 200) {
              if (this.radio === "0") {
                this.$message.success("登录成功");
                 window.sessionStorage.setItem("token",response.data.token)
                this.$router.push("/home");
              } else if (this.radio === "1") {
                this.$message.success("登录成功");
                 window.sessionStorage.setItem("token",response.data.token)
                this.$router.push("/index");
            }else if(this.radio==="2"){
              this.$message.success("登录成功");
                window.sessionStorage.setItem("token",response.data.token)
                this.$router.push("/personalcenter")
            }
              }
            else {
              this.$message.success("密码或用户名错误");
              return this.$message.error("密码或用户名错误");
            }
          })
          .catch((err) => {
            return this.$message.error("密码或用户名错误");
          });
      });
    },
    reset() {
      this.$refs.loginFormRef.resetFields();
      this.dialogFormVisible = false;
    },
    openDialog() {
      let open = this.radio;
      if (open === "0") {
        this.adminDialog = true;
      } else if (open === "1") {
        this.entrDialog = true;
      } else if (open === "2") {
        this.userDialog = true;
      } else {
        this.$message.error("出现未知错误");
      }
    },
    closeDialog() {
      this.$refs.registerFormRef.resetFields();
    },
    cancel() {
      this.$refs.registerFormRef.resetFields();
      this.adminDialog = false;
      this.entrDialog = false;
      this.userDialog = false;
    },
    register() {
      this.$refs.registerFormRef.validate(async (valid) => {
        console.log(valid)
        if (!valid) return this.$message.error("参数错误");
        let _res;
        let _this = this;
        console.log(valid)
        if (this.radio === "0") {
          const { data: res } = await _this.$axios.post(
            "/api/admin/register/",
            Qs.stringify(_this.adminRegisterInfo)
          );
          _res = res;
        } else if (this.radio === "1") {
          const { data: res } = await _this.$axios.post(
            "/api/company/register",
            Qs.stringify(_this.entrRegisterInfo)
          );
          _res = res;
        } else if (this.radio === "2") {
          const { data: res } = await _this.$axios.post(
            "/api/studio/register",
            Qs.stringify(_this.userRegisterInfo)
          );
          _res = res;
          console.log(_res)
        }
        if (_res.code !== 200) {
          return _this.$message.error("注册失败");
        }
        this.adminDialog = false;
        this.userDialog = false;
        this.entrDialog = false;
        return _this.$message.success("注册成功，请重新登录");
      });
    },
  },
};
</script>

<style>
.login {
  background: url("../../img/bgc01.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.login_box {
  height: 300px;
  width: 450px;
  background: rgba(100, 120, 120, 0.5);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_form {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0px 30px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: center;
}

.status {
  position: relative;
  top: 50px;
  bottom: 10px;
  left: 100px;
}

.register-button {
  text-align: center;
}
</style>