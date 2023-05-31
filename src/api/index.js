/**
 * Created by IntelliJ IDEA.
 * @project: datav-report
 * @author: zhangzhang - Lavender
 * @date: 2023/5/30 21:31:43
 * @description: 接口调用
 */

import request from '../utils/request'

const icode = '16226C47BB4D8D22'

export function wordcloud () {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: { icode }
  })
}

export function mapScatter () {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: { icode }
  })
}

export function screenData () {
  return request({
    url: '/screen/data',
    method: 'get',
    params: { icode }
  })
}
