<template>
  <div>
    <div class="dm-content">
    <el-input v-show="isShow" :v-model="demendForm.user_id=1001"></el-input>
      <div class="dm-require">
        <span>发布您的需求</span>
      </div>
      <div class="dm-title">
        <span>项目标题*</span>
        <input
          type="text"
          name="title"
          placeholder="例如：开发一个课外阅读微信公众号"
          class="title-pt"
          v-model="demendForm.project_title"
        />
      </div>
      <div class="dm-title">
        <span class="projectDescription">项目描述*</span>
        <textarea
          type="text"
          class="project-tta"
          name="projectDescription"
          placeholder="备注:"
          v-model="demendForm.project_descrition"
        ></textarea>
      </div>
      <div class="dm-title">
        <span>项目类型*</span>
        <el-select v-model="demendForm.type_id" placeholder="请选择" class="project-slt">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="dm-title">
        <span>项目周期*</span>
        <el-input
          type="text"
          class="title-pt"
          v-model="demendForm.project_cycle"
        />
      </div>
      <div class="dm-title">
        <span>预算金额*</span>
        <el-input
          type="text"
          class="title-pt"
          v-model="demendForm.budget"
        />
      </div>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
      >
        <el-button size="middle" type="primary">上传文件</el-button>
        <!-- <div slot="tip" class="el-upload__tip">
          只能上传jpg/png文件，且不超过500kb
        </div> -->
      </el-upload>
      <el-input v-show="isShow" :v-model="demendForm.final_budget=200"></el-input>
      <el-input v-show="isShow" :v-model="demendForm.technology_require=1"></el-input>
      <el-button
        size="medium"
        type="success"
        @click="releaseDemand"
        class="public-require"
        >发布需求</el-button
      >
    </div>
  </div>
</template>

<script>
import Qs from 'qs'
export default {
  data() {
    return {
      options: [
        {
          value: "1",
          label: "Web网站",
        },
        {
          value: "2",
          label: "App开发",
        },
        {
          value: "3",
          label: "微信公众号",
        },
       
      ],
      value: "",
      isShow:false,
      demendForm: {
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    async releaseDemand(){
      const {data:res}=await this.$axios.post("/api/company/post_demand/",Qs.stringify(this.demendForm))
      console.log(res)
      if(res.code!=200){
        return this.$message.error("发布失败")
      }
       return this.$message.success("发布成功")
    }
  },
};
</script>

<style>
.dm-content {
  width: 700px;
  height: 800px;
  /* background-color: red; */
  margin: 100px auto;
  position: relative;
}
.dm-content .dm-require {
  width: 100%;
  height: 120px;
  /* background-color: aliceblue; */
  line-height: 120px;
  text-align: center;
}
.dm-require span {
  font-size: 26px;
}
.dm-title {
  width: 100%;
  /* background-color: rgb(255, 0, 242); */
  margin-bottom: 20px;
  position: relative;
}
.dm-title span {
  color: #555555;
  margin-left: 70px;
  margin-right: 30px;
  /* background-color: blue; */
}
.dm-title .title-pt {
  width: 450px;
  height: 45px;
  /* margin-bottom: 20px; */
}
.dm-title .project-slt {
  width: 455px;
  height: 45px;
  /* margin-bottom: 20px; */
}
.dm-title .project-tta {
  width: 450px;
  height: 70px;
  /* margin-bottom: 20px; */
  margin-left: 170px;
}
.dm-title .projectDescription {
  top: 10px;
  position: absolute;
}
.upload-demo {
  /* width: 100px; */
  /* height: 100px; */
  /* background-color: aqua; */
  margin-left: 220px;
  margin-top: 40px;
}
.public-require{
  /* width: 100px;
  height: 35px; */
  /* margin-left: 400px; */
  /* margin-top: -60px; */
  position: absolute;
  right: 200px;
  /* top: 20px; */
  bottom: 65px;
}
</style>