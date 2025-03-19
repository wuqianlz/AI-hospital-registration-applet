const app = getApp()
Page({
  data: {
    Url: app.globalData.ServiceUrl,
    ImageUrl:app.globalData.ServiceImageUrl,
    goods:[],
    items: [
      { name: '医院简介'},
      { name: '科室介绍'},
      { name: '挂号须知'},
      { name: '医生介绍'}
    ],
    departments: [],  
    list: [],
    
},
goToNavigation() {
  wx.navigateTo({
    url: '../navigation/navigation'
  });
},
onLoad: function (options) {
  this.getGoodsList(),
  this.getDepartment(),
  this.getList()
  console.log(this.data.list);
},

getList(){
  var that = this;
  wx.request({
    url: that.data.Url+'/doctor',
    method:'GET',
    success: function(res){
      that.setData({
        list: res.data
      });
      console.log(that.data.list);

    }
  })

},

getDepartment(){
  var that = this;
  wx.request({
    url: that.data.Url+'/department',
    method: 'GET',
    success: function (res) {
      that.setData({
        deparments: res.data
      });
      console.log(that.data.deparments);
    }
  })
},

getGoodsList () {
  var that = this;
  console.log(that.data.Url+'/getGoods');
  wx.request({
    url: that.data.Url+'/getGoods',
    method: 'GET',
    success: function (res) {
      console.log(res.data);
      that.setData({
        goods: res.data
      });
    }
  });
},
registered: function () {
  wx.navigateTo({
    url: '/pages/regisered/registered', // 跳转到的页面路径

  });
},
});
