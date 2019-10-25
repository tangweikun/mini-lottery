const app = getApp();

Page({
  data: {
    lotteryRes: [],
    lotteryId: '',
    result: {},
  },

  onLoad: function(options) {
    const that = this;
    wx.request({
      url: `https://apis.juhe.cn/lottery/query?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=${options.lottery_id}&lottery_no=${options.lottery_no}`,
      success: function(res) {
        that.setData({
          result: res.data.result,
          lotteryRes: res.data.result.lottery_res.split(','),
          lotteryId: options.lottery_id,

        });
      },
    });
  },
});
