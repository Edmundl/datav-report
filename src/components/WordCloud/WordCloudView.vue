<template>
    <div id="container"/>
</template>

<script>
  // 这个依赖有问题
  import 'echarts-wordcloud'

  export default {
    data () {
        return {}
    },
    mounted () {
      const data = [{
        name: '慕课网',
        value: 100
      }, {
        name: '数据可视化',
        value: 50
      }, {
        name: 'Sam',
        value: 25
      }, {
        name: 'Sam1',
        value: 75
      }, {
        name: 'Sam2',
        value: 55
      }]
      const chart = this.$echarts.init(document.getElementById('container'))
      chart.setOption({
        series: [{
          type: 'wordCloud',
          data,
          shape: 'diamond',
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        }]
      })
    }
  }
</script>

<style lang="scss" scoped>
    .container {
    }
</style>
