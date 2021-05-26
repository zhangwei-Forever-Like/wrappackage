<template>
  <div id="myChart" class="chart" :style="{width: '100%', height: '500px'}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'xwPassengerFlow',
  data () {
    return {}
  },
  mounted () {
    this.loadLine()
  },
  methods: {
    loadLine () {
      const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          name: 'line1',
          type: 'line'
        }]
      }

      this.myChartOne = echarts.init(document.getElementById('myChart'))
      this.myChartOne.setOption(option)
    }
  }
}
</script>
