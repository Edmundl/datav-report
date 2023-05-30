<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings"/>
</template>

<script>
  import 'echarts-wordcloud'
  export default {
    data () {
      return {
        chartData: {
          columns: ['name', 'value'],
          row: [{
            name: '慕课网',
            value: 100
          }, {
            name: '尚学堂',
            value: 78
          }, {
            name: '天天上学',
            value: 150
          }, {
            name: '翼虎网',
            value: 30
          }, {
            name: '小滴课堂',
            value: 70
          }, {
            name: '飞机',
            value: 40
          }]
        },
        chartSettings: {
          color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(245, 166, 35, .7)', 'rgba(156, 13, 113, .7)']
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
