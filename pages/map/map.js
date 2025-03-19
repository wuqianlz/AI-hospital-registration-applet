const app = getApp()
Page({
  data:{
    url:"",
    Url: app.globalData.ServiceUrl
  },
  onLoad(){
    const that = this;
    wx.request({
      url: that.data.Url+'/map',
      method:"GET",
      success(res){
        that.setData({
          url:res.data
        })
      }
    })
    
  }
  
})