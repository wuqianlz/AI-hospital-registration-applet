const app = getApp();
Page({
  data: {
    isLoading: true,
    article: {},
    // mdURL: 'http://localhost:8066/work/md', // 这是你文件的网络路径
    Url: app.globalData.ServiceUrl
  },
  onLoad: function () {
    wx.request({
      url: this.data.Url+'/md',
      method: 'GET',
      success: (res) => {
        const markdownText = res.data; // 获取Markdown文件内容
        const result = app.towxml(markdownText, 'markdown', {
          theme: 'light',
          events: { // 为元素绑定的事件方法
            tap: (e) => {
              console.log('tap', e);
            }
          }
        });
        this.setData({
          article: result,
          isLoading: false
        });
      },
      fail: (err) => {
        console.error('读取Markdown文件失败', err);
        this.setData({
          isLoading: false
        });
      }
    });
  }
});
