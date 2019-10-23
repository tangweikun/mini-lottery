const app = getApp();

Page({
  data: {
    lotteryList: [],
  },

  onLoad: function() {
    const that = this;
    wx.request({
      url:
        'https://apis.juhe.cn/lottery/history?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=ssq&page_size=5&page=1',
      success: function(res) {
        console.log(res.data.result.lotteryResList);
        that.setData({ lotteryList: res.data.result.lotteryResList });
      },
    });
  },
});
