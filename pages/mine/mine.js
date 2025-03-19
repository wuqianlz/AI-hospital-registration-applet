const app = getApp()
Page({
  data: {
    show: false,
    showShare: false,
    options: [
      [{
          name: '微信',
          icon: 'wechat'
        },
        {
          name: '微博',
          icon: 'weibo'
        },
        {
          name: 'QQ',
          icon: 'qq'
        },
        {
          name: '小红书',
          icon: 'https://s1.aigei.com/prevfiles/6abdc4dea1f8490f84618b0a90b87814.png?e=1735488000&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:sPh34ZyjPn7GoV8kESF95_FGlmk='
        },
      ],
      [{
          name: '复制链接',
          icon: 'link'
        },
        {
          name: '分享海报',
          icon: 'poster'
        },
        {
          name: '二维码',
          icon: 'qrcode'
        },
      ],
    ],
    userinfo: [],
    isLogin: false,
    isCard:false,
  },

  onLoad: function (options) {
    // 页面加载时执行的初始化工作
    console.log("这里的options",options);
    this.setData({
      nickName:options.nickName
    })
  },

  onShow() {
    let userInfo = wx.getStorageSync('userInfo')
    console.log("我的缓存信息",userInfo);
    if(userInfo){
      this.setData({
        isLogin:true,
        nickName:userInfo.nickName,   //从缓存中拿数据

      })
    }else{
      this.setData({
        isLogin:false
      })
    }

    // 从全局变量获取用户信息并更新到页面的data
    console.log("Page loaded");
    this.setData({
      userinfo: app.globalData.userinfo,
      isLogin: app.globalData.isLogin,
      isCard: app.globalData.isCard
    });
    console.log('User info on show:', this.data.userinfo);
    console.log(this.data.isLogin); // 调试输出用户信息
    console.log(this.data.isCard);
  },

  onClickButton: function () {
    // 简单的页面跳转示例
    console.log('Navigating to Index page'); // 调试输出
    wx.navigateTo({
      url: '/pages/index/index',
    });
  },

  onClickButtons: function () {
    console.log('Before condition check:', this.data.userinfo); // 调试输出
    // 检查 userinfo 是否是对象并且包含 userName
    if (this.data.userinfo && this.data.userinfo.userName || this.data.userinfo.nickName) {
      console.log('Navigating to diagnosticCard page'); // 调试输出
      wx.navigateTo({
        url: '/pages/diagnosticCard/diagnosticCard',
      });
    } else {
      console.log('Navigating to Index page'); // 调试输出
      wx.navigateTo({
        url: '/pages/index/index',
      });
    }
  },

  showPopup() {
    // 弹出功能正在开发的提示框
    wx.showModal({
      title: '提示',
      content: '功能正在开发',
      showCancel: false, // 不显示取消按钮
      confirmText: '知道了', // 确认按钮文字
      success(res) {
        if (res.confirm) {
          // 用户点击了确定按钮后的逻辑
          console.log('User confirmed the modal');
        }
      }
    });
  },
  JumpSettings: function () {
    wx.navigateTo({
      url: '/pages/settings/settings',
    });
  },
  About: function () {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  onClick(event) {
    this.setData({
      showShare: true
    });
  },
  Map_navigation: function () {
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  JumpRemind: function () {
    wx.navigateTo({
      url: '/pages/Remind/Remind',
    })
  },
  logout: function () {
    app.globalData.isLogin = false
    this.setData({
      isLogin: false,
      userinfo: [],
    });
    console.log(this.data.isLogin);

  },

  onClose() {
    this.setData({
      showShare: false
    });
  },

  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
});