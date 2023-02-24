// pages/account/account.ts
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        safe_height: app.globalData.safe_height, //距离顶部的安全距离
        capsuleTop: app.globalData.capsuleTop, //胶囊顶部的距离
        walletPopup: false, //添加账本弹窗
        // 新增账本 表单结构
        walletForm: {
            walletName: "", //账本名称
            walletType: "", //账本类型
            walletNotice: "", //账本备注
            onTotalCount: 0, //是否计入总资产
        },
        walletTypePopup: false, //账本类型弹窗
        // 账本类型
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
     * Methods方法
     * */

    // 关闭添加账本弹窗
    onClose() {
        this.setData({
            walletPopup: false,
        })
    },
    // 打开添加账本
    onShowPopUp() {
        this.setData({
            walletPopup: true,
        })
    },
    // 关闭账本类型选择
    closeWalletType() {
        this.setData({
            walletTypePopup: false,
        })
    },
    // 打开账本类型选择
    showWalletType() {
        this.setData({
            walletTypePopup: true,
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
        // 设置导航激活状态
        this.getTabBar().setData({
            active: 1
        })
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
