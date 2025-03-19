const app = getApp()
Page({
  data: {
    Url: app.globalData.ServiceUrl,
    first: 0,
    currentPlaceholder: '输入姓名',
    showSubmitButton: false,
    content: [{
      text: '输入姓名'
    },
    {
      text: '输入性别'
    },
    {
      text: '输入手机号'
    },
    {
      text: '输入身份证号'
    }
    ],
    stepLabels: ['姓名', '性别', '手机号', '身份证号'],
    stepInputs: ["", "", "", ""],
    stepValue: "",
    step0Value: "",
    step1Value: "",
    step2Value: "",
    step3Value: "",
  },
  //调用一次数值选择器，wxml获取输入框的值
  handleInputChange: function (e) {
    switch (this.data.first) {
      case 0:
        this.setData({
          step0Value: e.detail.value
        })
        break;
      case 1:
        this.setData({
          step1Value: e.detail.value
        })
        break;
      case 2:
        this.setData({
          step2Value: e.detail.value
        })
        break;
      case 3:
        this.setData({
          step3Value: e.detail.value
        })
        break;
    }
  },
//上一步按钮
  prevStep: function () {
    if (this.data.first > 0) {
      this.setData({
        first: this.data.first - 1,
        currentPlaceholder: this.data.content[this.data.first - 1].text,
        showSubmitButton: false
      });
    }
    this.valueSelect(this.data.first + 1);
    this.setData({
      stepInputs: this.setArryValueNext(this.data.first + 1, this.data.stepValue, this.data.stepInputs)
    })

  },
//下一步按钮
  nextStep: function () {
    this.valueSelect(this.data.first);
    if (this.data.stepValue === "") {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }
    if (this.data.first < 3) {
      this.setData({
        first: this.data.first + 1,
        currentPlaceholder: this.data.content[this.data.first + 1].text,
        showSubmitButton: this.data.first + 1 === 3
      });
    }
    //延迟更新，first: this.data.first + 1,  -1值
    this.valueSelect(this.data.first - 1);
    this.setData({
      stepInputs: this.setArryValueNext(this.data.first - 1, this.data.stepValue, this.data.stepInputs)
    })

  },
  submit() {
    var that = this;
    this.valueSelect(this.data.first);
    if (this.data.stepValue === "") {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return
    }
    this.setData({
      first: this.data.first + 1
    })
    this.valueSelect(this.data.first - 1);
    this.setData({
      stepInputs: this.setArryValueNext(this.data.first - 1, this.data.stepValue, this.data.stepInputs)
    })
    const data = {
      name: this.data.stepInputs[0],
      gender: this.data.stepInputs[1], 
      phoneNumber: this.data.stepInputs[2],
      identificationNumber: this.data.stepInputs[3]
    }
    console.log(data);
    wx.request({
      url: this.data.Url+'/addPatientCard',
      method: 'POST',
      data:'POST',
      data:data,
      success:function(res){
        console.log(res.data);
        if(res.data === true){
          wx.showToast({
            title: '添加失败',
            icon:'success',
            duration:2000
          });
        }else{
          app.globalData.isCard=true
          wx.showToast({
            title: '添加成功',
            icon:'success',
            duration:2000
          });
          that.toMine()
        }
      }
    })
  },

//设置数组值，（数组索引，经过输入值选择器输入的值，原始数组stepinputs）
  setArryValueNext(index, value, orgArry) {
    let arry = orgArry
    //替换从索引 index 开始的一个元素为 value
    arry.splice(index, 1, value)
    return arry
  },
//数据选择器，判断第几步第几个数据
  valueSelect(index) {
    switch (index) {
      case 0:
        this.setData({
          stepValue: this.data.step0Value
        })
        break;
      case 1:
        this.setData({
          stepValue: this.data.step1Value
        })
        break;
      case 2:
        this.setData({
          stepValue: this.data.step2Value
        })
        break;
      case 3:
        this.setData({
          stepValue: this.data.step3Value
        })
        break;
    }
  },
  toMine(){
    wx.reLaunch({
      url: '/pages/mine/mine',
    })
  }


});