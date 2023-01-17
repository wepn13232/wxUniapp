Page({
    data: {
        userInfo: wx.getStorageSync("userInfo"),
    },
    //用户选择头像
    toChooseAvatar(e) {
        console.log('获取到头像', e);
        this.setData({
            ["userInfo.avatarUrl"]: e.detail.avatarUrl, //重新设置头像
        })
    },
    // 返回
    goBack() {
        wx.navigateBack()
    },
    onLoad: function (options) {

    },
    onShow() {
        // 设置导航激活状态
        this.getTabBar().setData({
            active: 1
        })
    }
});
