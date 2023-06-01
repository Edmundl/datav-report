/**
 * Created by IntelliJ IDEA.
 * @project: datav-report
 * @author: zhangzhang - Lavender
 * @date: 2023/5/31 20:30:15
 * @description: 获取父组件->子组件透传数据的方法
 */

// 金额千分号格式化处理
function format (v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  // console.log(String(w).match(reg))
  return `${v}`.replace(reg, '$&,')
}

function wrapperObject (o, k) {
  if (o && k.indexOf('.') >= 0) {
    const keys = k.split('.')
    keys.forEach(key => {
      o = o[key]
    })
    return o
  } else {
    return o && o[k] ? o[k] : {}
  }
}

function wrapperArray (o, k) {
  return o && o[k] ? o[k] : []
}

function wrapperMoney (o, k) {
  return o && o[k] ? `¥ ${format(o[k])}` : '¥0.00'
}

function wrapperOriginalNumber (o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperNumber (o, k) {
  return o && o[k] ? format(o[k]) : 0
}

function wrapperPercentage (o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

export default {
  computed: {
    reportData () {
      return this.getReportData()
    },
    salesToday () {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth () {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay () {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday () {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay () {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend () {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser () {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate () {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend () {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis () {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday () {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber () {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth () {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay () {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth () {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    orderFullYear () {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis () {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank () {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear () {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis () {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank () {
      return wrapperArray(this.reportData, 'userRank')
    },
    wordCloud () {
      return this.getWordCloud()
    },
    category1 () {
      return wrapperObject(this.reportData, 'category.data1')
    },
    category2 () {
      return wrapperObject(this.reportData, 'category.data2')
    },
    mapData () {
      return this.getMapData()
    }
  },
  filters: {
    format (v) {
      return format(v)
    }
  },
  // 接收由上上层组件传递过来的数据
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
