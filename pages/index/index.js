const app = getApp()
Page({
  data: {
    userName: '', // 用户名输入框的初始值
    userPwd: '', // 密码输入框的初始值
    Url: app.globalData.ServiceUrl
  },
  onUserNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    });
  },
  onUserPwdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    });
  },
  login: function (e) {
    const that = this;
    wx.request({
      url: that.data.Url + "/tologin",
      method: 'POST', // 登录请求通常使用POST方法
      data: {
        userName: that.data.userName,
        userPwd: that.data.userPwd
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 请求头设置
      },
      success: function (res) {
        console.log(res.data);

        if (res.data) {
          // 登录成功，存储Token
          // wx.setStorageSync('token', res.data.token);
          // 进行页面跳转或其他操作///
          // wx.reLaunch({
          //   url:'/pages/shop/shop', // 跳转到shop页面
          // });
          // wx.navigateBack({
          //   data:1
          // })
          app.globalData.userinfo = res.data;
          app.globalData.isLogin = true
          wx.switchTab({
            url: '/pages/mine/mine',
          })
        } else {
          // 登录失败，显示错误信息
          wx.showToast({
            title: '登录失败',
            icon: 'none'
          });
        }
      },
      fail: function () {
        // 请求失败的处理
        wx.showToast({
          title: '网络异常',
          icon: 'none'
        });
      }
    });
  },
  getData() {
    let that = this
    wx.request({
      url: that.data.Url + '/test',
      success(res) {
        console.log("请求成功", res.data)
        that.setData({
          dataList: res.data
        })
      },
      fail(res) {
        console.log("请求失败")
      }
    })
  },

  loadByWechat() {
    var p1 = new Promise((resolve, reject) => {
      wx.login({
        success: res => {
          resolve(res);
        },
        fail: err => {
          reject(err);
        }
      });
    });
  
    var p2 = new Promise((resolve, reject) => {
      wx.getUserProfile({
        desc: '用于完善会员资料',
        success: res => {
          if (res.userInfo) {
            resolve(res);
          } else {
            reject(new Error('未能获取用户信息'));
          }
        },
        fail: err => {
          reject(err);
        }
      });
    });
  
    Promise.all([p1, p2]).then((results) => {
      const data = {
        ...results[0],
        userInfo: results[1].userInfo // 直接赋值userInfo
      };
  
      this.handleUserInfo(data);
    }).catch((err) => {
      console.error('登录或获取用户信息失败', err);
      // 处理错误情况，例如提示用户
    });
  },
  
  handleUserInfo(data) {
    if (!data.userInfo) {
      console.error('userInfo未定义');
      return; // 如果userInfo未定义，直接返回，避免后续错误
    }
  
    wx.setStorageSync('userInfo', data.userInfo);
    const { userInfo } = data; // 解构userInfo
    console.log({userInfo});
    
    // 组织好后端需要的字段，并调用接口
    const params = {
      userInfo,
      // 其他需要的字段...
    };
    console.log({userInfo});
    console.log(userInfo.nickName); // 使用userInfo.nickName
    
    // 调用接口维护本地登录态
    // ...
    
    // 确保app是全局的应用程序实例
    if (app) {
      app.globalData.userinfo = userInfo;
      app.globalData.isLogin = true;
    
      // 重定向到我的页面，并传递昵称
      wx.reLaunch({
        url: '/pages/mine/mine?nickName=' + userInfo.nickName,
      });
    } else {
      console.error('app未定义');
    }

    // wx.getUserProfile({
    //   desc: '用户完善会员资料',
    // })
    // .then(res => {
    //   console.log("用户允许了微信授权登录", res.userInfo);
    //   // 保存用户登录信息到缓存
    //   wx.setStorageSync('userInfo', res.userInfo);
      
    //   // 更新全局变量
    //   app.globalData.userinfo = res.userInfo;
    //   app.globalData.isLogin = true;
  
    //   // 使用 wx.reLaunch 跳转页面，因为此时不能使用 wx.switchTab
    //   wx.reLaunch({
    //     url: '/pages/mine/mine?nickName=' + res.userInfo.nickName,
    //   });
    // })
    // .catch(err => {
    //   console.log("用户拒绝了微信授权登录", err);
    //   // 处理用户拒绝授权的情况
    // });

  },
  
  // 注册跳转
  onregister: function () {
    wx.navigateTo({
      url: '/pages/register/register',
    });
  },
})