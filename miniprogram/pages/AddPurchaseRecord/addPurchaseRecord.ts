const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        capsuleTop: app.globalData.capsuleTop, //安全距离（不包含胶囊高度）
        type_lists: [
            {
                name: "QQ钱包",
                value: "qq",
                src: "../../assets/img/qq-type.svg"
            },
            {
                name: "微信钱包",
                value: "wechat",
                src: "../../assets/img/wechat-type.svg"
            },
            {
                name: "支付宝",
                value: "zfb",
                src: "../../assets/img/zfb-type.svg"
            },
            {
                name: "储蓄卡",
                value: "bankCard",
                src: "../../assets/img/bank-type.svg"
            },
            {
                name: "现金",
                value: "cash",
                src: "../../assets/img/cash-type.svg"
            },
        ],
    },

    /**
     * 页面方法
     * */

    // 导航栏点击返回
    onClickLeft() {
        wx.navigateBack({
            delta:1
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
