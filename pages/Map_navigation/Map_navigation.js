const app = getApp()
var QQMapWX = require("../../libs/qqmap-wx-jssdk.js")
var qqmapsdk;
var mapCtx;
Page({
  data: {
    userLat: '',
    userLon: '',
    markers: [],
    polyline: []
  },
  onReady: function (e) {
    mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function (options) {
    var that = this
    qqmapsdk = new QQMapWX({
      key: 'CA7BZ-N7OKU-APJVG-GPDEE-FVDH7-JHBRI'
    })
    wx.getLocation({
      success: function (res) {
        console.log(res)
        that.setData({
          userLat: res.latitude,
          userLon: res.longitude
        })
      },
      fail: function () {
        wx.showToast('获取位置')
      }
    })
  },
  inputKey: function (e) {
    var that = this
    qqmapsdk.search({
      keyword: e.detail.value,
      success: function (res) {
        console.log(res)
        var list = []
        for (var i = 0; i < res.data.length; i++) {
          var obj = {
            id: Number(res.data[i].id),
            title: res.data[i].title,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            name: res.data[i].storeName,
            address: res.data[i].address,
            width: 15,
            height: 25
          }
          list.push(obj)
        }
        that.setData({
          markers: list
        })
        console.log("markers", that.markers);
      },
      fail: function (res) {
        wx.showToast({
          title: '查询成功',
          icon: "success",
          duration: 2000
        })
      },
      complete: function (res) {
        console.log(res);
      },
      
    })
  },

//在Page({})中使用下列代码
//事件触发，调用接口

formSubmit(e){
  var _this = this;
  //调用距离计算接口
  qqmapsdk.calculateDistance({
      //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
      //from参数不填默认当前地址
      //获取表单提交的经纬度并设置from和to参数（示例为string格式）
      mode: 'straight',
      from: e.detail.value.start || '', //若起点有数据则采用起点坐标，若为空默认当前地址
      to: e.detail.value.dest, //终点坐标
      success: function(res) {//成功后的回调
        console.log(res);
        var res = res.result;
        var dis = [];
        for (var i = 0; i < res.elements.length; i++) {
          dis.push(res.elements[i].distance); //将返回数据存入dis数组，
        }
        _this.setData({ //设置并更新distance数据
          distance: dis
        });
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function(res) {
        console.log(res);
      }
  });

}

})

