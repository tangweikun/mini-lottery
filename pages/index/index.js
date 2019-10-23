//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(3)
    // wx.request({
    //   url: 'https://apis.juhe.cn/lottery/query?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=ssq',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  }
})
