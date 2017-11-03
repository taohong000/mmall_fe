/*
 * @Author: taohong
 * @Date:   2017-10-22 23:13:28
 * @Last Modified by:   taohong
 * @Last Modified time: 2017-10-30 22:51:43
 */
var _mm = require('util/mm.js')

var html = '<div>{{data}}</div>'
var data = {
  data: 124
}
console.log(_mm.renderHtml(html, data))
