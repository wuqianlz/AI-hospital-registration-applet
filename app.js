// app.js
App({
  globalData:{
    userinfo:[],
    isLogin:false,
    isCard:false,
    ServiceUrl:'http://127.0.0.1:8066/work',
    ServiceImageUrl:'http://127.0.0.1:8066/work/download',
    userInfo: null

  },
  towxml:require('/towxml/index'),
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
})
