const app = getApp();

Page({
  data: {
    lotteryRes: '02,06,15,21,30,31,02'.split(','),
    result: {
      lottery_id: 'ssq',
      lottery_name: '双色球',
      lottery_res: '02,06,15,21,30,31,02',
      lottery_no: '19121',
      lottery_date: '2019-10-22',
      lottery_exdate: '2019-12-20',
      lottery_sale_amount: '334,748,934',
      lottery_pool_amount: '1,091,862,134',
      lottery_prize: [
        {
          prize_name: '一等奖',
          prize_num: '15',
          prize_amount: '6,185,649',
          prize_require: '6+1',
        },
        {
          prize_name: '二等奖',
          prize_num: '138',
          prize_amount: '161,093',
          prize_require: '6+0',
        },
        {
          prize_name: '三等奖',
          prize_num: '1582',
          prize_amount: '3,000',
          prize_require: '5+1',
        },
        {
          prize_name: '四等奖',
          prize_num: '72235',
          prize_amount: '200',
          prize_require: '5+0,4+1',
        },
        {
          prize_name: '五等奖',
          prize_num: '1298470',
          prize_amount: '10',
          prize_require: '4+0,3+1',
        },
        {
          prize_name: '六等奖',
          prize_num: '8585111',
          prize_amount: '5',
          prize_require: '2+1,1+1,0+1',
        },
      ],
    },
  },

  onShow: function() {
    const that = this;
  },
});
