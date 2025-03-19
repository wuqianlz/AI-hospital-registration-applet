Page({
  data: {
    alarmDate: '', // 默认为空，表示没有选择日期
    alarmTime: '', // 默认为空，表示没有选择时间
    alarmText: '' // 闹钟提示文字
  },
  bindDateChange: function(e) {
    this.setData({
      alarmDate: e.detail.value
    });
  },
  bindTimeChange: function(e) {
    this.setData({
      alarmTime: e.detail.value
    });
  },
  bindAlarmTextChange: function(e) {
    this.setData({
      alarmText: e.detail.value
    });
  },
  setAlarm: function() {
    if (!this.data.alarmDate || !this.data.alarmTime || !this.data.alarmText) {
      wx.showToast({
        title: '请选择完整日期、时间和输入提示文字',
        icon: 'none'
      });
      return;
    }else{
      wx.showToast({
        title: '设置成功',
        icon: 'success', // 或者 'none'
        duration: 2000 // 提示的持续时间
      })      
    }
    // 合并日期和时间
    const alarmDateTime = `${this.data.alarmDate}${this.data.alarmTime}`;
    // 保存闹钟信息到本地存储
    wx.setStorageSync('alarm', {
      dateTime: alarmDateTime,
      text: this.data.alarmText
    });
    // 设置本地通知
    this.scheduleNotification();
  },
  scheduleNotification: function() {
    const now = new Date();
    const [year, month, day] = this.data.alarmDate.split('-').map(Number);
    const [hour, minute] = this.data.alarmTime.split(':').map(Number);
    const alarmTime = new Date(year, month - 1, day, hour, minute); // 注意月份要减1
    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1); // 如果设定时间在今天之前，则设置为明天
    }
    const timeout = alarmTime.getTime() - now.getTime();
    
    setTimeout(() => {
      wx.showToast({
        title: this.data.alarmText,
        icon: 'none'
      });
      // 播放提示音
      const innerAudioContext = wx.createInnerAudioContext();
      innerAudioContext.src = 'path_to_your_alarm_sound.mp3'; // 替换为你的闹钟声音路径
      innerAudioContext.play();
    }, timeout);
  }
});
