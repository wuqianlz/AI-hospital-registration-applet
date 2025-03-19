// // Page({
// //   data: {
// //     adImage: '/images/ysjf.png'
// //   },
// //   bindad:function(e){
// //     wx.navigateTo({
// //       url: '/pages/shop/shop'
// //     });
// //   },
// //   onLoad: function() {
// //     // 页面加载时设置定时器
// //     setTimeout(function() {
// //       wx.switchTab({
// //         url: '/pages/shop/shop',
// //       });
// //     }, 5500); 
// //   }
// // });

Page({
  data: {
    adImage: '/images/ad2.png',
    // 广告显示的状态
    adShown: true,
    // 定时器标识
    timerId: null,
  },

  onLoad: function (options) {
    // 页面加载时设置定时器
    this.setTimer(6000);
  },
  setTimer: function (duration) {
    // 清除之前的定时器
    clearTimeout(this.data.timerId);
    // 设置新的定时器
    this.data.timerId = setTimeout(function () {
      wx.switchTab({
        url: '/pages/shop/shop', // 替换为目标页面路径
      });
    }, duration);
  },
  // 点击跳转
  bindad: function () {
    // 清除定时器，防止5秒后自动跳转
    clearTimeout(this.data.timerId);
    wx.switchTab({
      url: '/pages/shop/shop',
    });
  },
});