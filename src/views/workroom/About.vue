<template>
  <div id="about">
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon">
        <img
          id="user-avatar"
          src="//img.ketangpai.com/ketangpai.aliapp.com/1/webroot/Uploads/Download/2017-02-28/1488264570.jpg%40%2162-62?OSSAccessKeyId=LTAItfPkNIKJFibY&amp;Expires=1867647789&amp;Signature=6XDeX%2BSsliObX1S38FAbsZunQ60%3D"
          alt="张智涵"
      /></i>
    </el-upload>
    <h1 class="uc-name">username：{{ this.$root.username }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      avatarUrl: "http://127.0.0.1:8080/avatar.jpg", //默认头像
    };
  },
  created: function () {
    this.user.username = this.$root.username;
    this.getUserInfo();
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
#user-avatar {
  width: 160px;
  height: 160px;
  margin-top: -30px;
}
.uc-name {
  border-top: 1px solid #dcdcdc;
  padding: 30px 20px 0 20px;
  font-size: 20px;
  font-weight: bold;
  margin-top: -30px;
  line-height: 34px;
  height: 34px;
}
</style>