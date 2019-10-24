const app = getApp();

Page({
  data: {
    lotteryList: [],
    page: 1,
  },

  onLoad: function() {
    this._loadMore();
  },

  // onReachBottom: function() {
  //   this._loadMore();
  // },

  _loadMore: function() {
    const that = this;
    wx.showToast({ title: '加载中', icon: 'loading', duration: 1000 });
    wx.request({
      url: `https://apis.juhe.cn/lottery/history?key=96ba11ab9a0c841e566060163bcd1128&lottery_id=ssq&page_size=8&page=${that.data.page}`,
      success: function(res) {
        that.setData({
          lotteryList: [
            ...that.data.lotteryList,
            ...res.data.result.lotteryResList.map(item => ({
              ...item,
              lottery_res: item.lottery_res.split(','),
            })),
          ],
          page: that.data.page + 1,
        });
      },
    });
  },
});
