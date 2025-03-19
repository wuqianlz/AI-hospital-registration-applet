const app = getApp()
Component({
  data: {
    activeValues: [0],
    Url: app.globalData.ServiceUrl,
    list: []
  },
  lifetimes: {
    // 生命周期函数，直接定义函数表达式
    attached: function() {
      this.getList();
    }
  },
  
  methods: {
    handleChange(e) {
      this.setData({
        activeValues: e.detail.value,
      });
    },
    getList(){
      var that = this;
      wx.request({
        url: that.data.Url+'/patientCard',
        method:'GET',
        success: function(res){
          that.setData({
            list: res.data
          });
          console.log(that.data.list);
        }
      })
    },
  },
});
