const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        capsuleTop: app.globalData.capsuleTop, //安全距离（不包含胶囊高度）
        type_lists: [
            {
                name: "餐饮",
                value: "food",
                src: "../../assets/img/food-icon.svg"
            },
            {
                name: "交通",
                value: "traffic",
                src: "../../assets/img/traffic-icon.svg"
            },
            {
                name: "购物",
                value: "shopping",
                src: "../../assets/img/shopping-icon.svg"
            },
            {
                name: "住房",
                value: "house",
                src: "../../assets/img/house-icon.svg"
            },
            {
                name: "游玩",
                value: "ticket",
                src: "../../assets/img/ticket-icon.svg"
            },
            {
                name: "日用品",
                value: "daily",
                src: "../../assets/img/daily-icon.svg"
            },
        ],
        outActive: 0, //当前选中的支出类型
        inActive: 0, //当前选中的收入类型
        moneyInput: "", //输入的金额
    },

    /**
     * 页面方法
     * */

    // 导航栏点击返回
    onClickLeft() {
        wx.navigateBack({
            delta: 1
        })
    },
    // 切换类型
    chooseItem(event: any) {
        let index = event.currentTarget.dataset.index;
        setTimeout(() => {
            this.setData({
                outActive: index
            })
        }, 100)
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
