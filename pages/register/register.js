const app = getApp()
Page({
  data: {
    userName: '',
    userPwd: '',
    repassword: '',
    Url: app.globalData.ServiceUrl
  },
  getAccount(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  getPassword(e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  getRePassword(e) {
    this.setData({
      repassword: e.detail.value
    })
  },
  register() {

    const repassword = this.data.repassword
    const userPwd = this.data.userPwd

    if (!repassword) {
      wx.showToast({
        title: '请输入确认的密码',
        icon: 'none'
      })
      return
    }
    if (repassword != userPwd) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none'
      })
      return
    }
    console.log('注册成功');
    this.requestToService()

  },

  requestToService(){
    const that = this;
    console.log(this.data.userName);
    console.log(this.data.userPwd);
    wx.request({
      url: that.data.Url+'/register', // 替换为你的后端地址
      method: 'POST',
      data: {
        userName: this.data.userName,
        userPwd: this.data.userPwd,
      },
      success: function (res) {
        console.log(res.data);
        if (res.data === true) {
          wx.showToast({
            title: '注册成功',
            icon: 'success',
            duration: 2000
          });
          that.toLogin()
          // 跳转到登录页面或其他页面
        } else {
          wx.showToast({
            title: '注册账号已存在',
            icon: 'error',
            duration: 2000
          });
        }
      },
      fail: function (err) {
        wx.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 2000
        });
      }
    });
  },

  toLogin(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },
})