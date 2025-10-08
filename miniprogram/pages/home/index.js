// pages/home/index.js
Page({
  data: {
    userInfo: null,
    hasUserInfo: false
  },

  onLoad() {
    // 页面加载时执行
    console.log('首页加载完成');
  },

  onShow() {
    // 页面显示时执行
  },

  // 获取用户信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善用户资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        wx.showToast({
          title: '获取成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error('获取用户信息失败', err);
      }
    });
  },

  // 跳转到功能页面
  navigateToFeature() {
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },

  // 跳转到示例页面
  navigateToExample() {
    wx.navigateTo({
      url: '/pages/example/index'
    });
  }
});

