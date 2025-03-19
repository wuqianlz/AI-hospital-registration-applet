const app = getApp()
Page({
  data: {
    date: '',
    show: false,
    value:'',
    gender: '男' ,
    name:'',
    sex:'',
    department:'',
    phone:'',
    Url: app.globalData.ServiceUrl
  },
  getName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  getDepartment(e) {
    this.setData({
      department: e.detail.value
    })
  },
  getPhone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  radioChange(e) {
    this.setData({
      gender: e.detail.value,
      sex:e.detail.value
    });
  },

  submit: function() {
    const { name, department, phone } = this.data;
    if (!name) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      });
      return;
    }
    if (!department) {
      wx.showToast({
        title: '请输入科室',
        icon: 'none'
      });
      return;
    }
    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }
    this.SubmitToService()
  },
  SubmitToService(){
    const that = this;
    console.log(this.data.name);
    console.log(this.data.phone);
    console.log(this.data.department);
    console.log(this.data.gender);
    console.log(this.data.sex);
    wx.request({
      url: that.data.Url+'/addRegistered',
      method:'POST',
      data:{
        name: this.data.name,
        sex: this.data.gender,
        department: this.data.department,
        phone: this.data.phone
      },
      success: function(res){
        console.log(res.data);
        if(res.data ===true){
          wx.showToast({
            title: '重复提交',
            icon:'success',
            duration: 2000
          });
        }else{
          wx.showToast({
            title: '提交成功',
            icon: 'error',
            duration: 2000
          }),
          setTimeout(function() {
            that.toShop();
          }, 2000); // 提示框持续时间为2000毫秒，因此跳转也延迟2000毫秒
        }
      },
      fail: function(err){
        wx.showToast({
          title: '提交失败',
          icon: 'error',
          duration: 2000
        });
      }
    });
  },
  toShop(){
    wx.switchTab({
      url: '/pages/shop/shop',
    })
  },
  

  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);

  },
  
});
