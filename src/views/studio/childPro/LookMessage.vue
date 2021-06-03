<template>
  <div>
    <el-button type="text" @click="dialogVisible = true">详情</el-button>

    <el-dialog :visible.sync="dialogVisible" width="40%">
      <div class="comment-imgs">
        <img :src="tianding" alt="" />
      </div>
      <!-- <span>这是一段信息</span> -->
      <p>
        <span>{{ studio.name }}</span>
        <span>{{ item.unit_name }}</span>
      </p>
      <p>
        <span>{{ studio.descr }}</span>
        <span>{{ item.description }}</span>
      </p>
      <p>
        <span>{{ studio.time }}</span>
        <span>{{ item.create_time }}</span>
      </p>
      <p>
        <span>{{ studio.phone }}</span>
        <span>{{ item.phone }}</span>
      </p>
      <p>
        <span>{{ studio.type }}</span>
        <span v-if="item.type_id == 1">Web网站</span>
        <span v-else-if="item.type_id == 2">App开发</span>
        <span v-else-if="item.type_id == 3">微信公众号</span>
        <span v-else-if="item.type_id == 4">HTML5应用</span>
        <span v-else-if="item.type_id == 5">小程序</span>
      </p>
      <p class="studiorate">
        <span>{{ studio.comment }}</span>
        <el-rate
          :value="item.evaluate_ability"
          disabled
          show-score
          text-color="#ff9900"
          class="comment"
        >
          >
        </el-rate>
      </p>
      <p>
        <span>{{ studio.number }}</span>
        <span>{{item.nums}}</span>
      </p>

      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false"
          >关闭</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tianding from "@/img/tianding.png";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      dialogVisible: false,
      tianding,
      studio: {
        name: "工作室名称：",
        descr: "工作室描述：",
        time: "成立时间：",
        phone: "联系电话：",
        type: "擅长类型：",
        comment: "评价：",
        number: "服务雇主数量：",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.comment-imgs img {
  width: 70px;
  height: 70px;
  margin-left: 160px;
}
p {
  margin-left: 120px;
  margin-bottom: 15px;
}
.studiorate{
  position: relative;
}
.studiorate .comment{
  position:absolute;
  left: 50px;
  top: 0px;
}
</style>