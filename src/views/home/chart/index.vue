<template>
  <div id="mainbody">
    <!-- 为echarts准备一个具备宽度的dom -->
    <div
      id="main"
      style="width: 600px;height:400px;"
      class="dashboard-container"
    ></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    this.showMain();
  },
  methods: {
    showMain() {
      var myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);

      window.onresize = myChart.resize;
    },
  },
};
</script>

<style scoped>
.mainbody {
  width: 100%;
  height: 100%;
}
</style>
