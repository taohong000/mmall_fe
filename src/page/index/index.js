/*
 * @Author: taohong
 * @Date:   2017-10-22 23:13:28
 * @Last Modified by:   taohong
 * @Last Modified time: 2017-11-08 23:33:33
 */
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
require('util/slider/index.js');
var templateBanner  = require('./banner.string');
var _mm             = require('util/mm.js');

$(function() {
    // 渲染banner的html
    var bannerHtml  = _mm.renderHtml(templateBanner);
    $('.banner-con').html(bannerHtml);
    // 初始化banner
    var $slider     = $('.banner').unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $('.banner-con .banner-arrow').click(function(){
        var forward = $(this).hasClass('prev') ? 'prev' : 'next';
        $slider.data('unslider')[forward]();
    });
});