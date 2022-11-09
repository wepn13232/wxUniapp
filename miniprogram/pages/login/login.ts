// pages/login/login.ts

import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 用户信息
        userInfo: {
            username: "",
            password: "",
            code: "",
        },
        rememberAccount: "",
        codeDialog: false, //展示二维码弹窗
        wxLogin: wx.canIUse('login'), //是否可以使用微信登录
    },

    /**
     * 页面的methods
     */
    //是否记住账号
    onChangeRemember(event: any) {
        this.setData({
            rememberAccount: event.detail
        })
    },
    //发送验证码
    sendCode() {
        this.setData({
            codeDialog: true
        })
    },
    //关闭二维码弹窗
    onClose() {
        this.setData({
            codeDialog: false,
        })
    },
    //使用微信登录
    weChatLogin() {
        if (!this.data.wxLogin) {
            Toast.fail("不支持微信登录");
            return;
        }
        Toast.loading({
            duration: 0,
            message: "登录中..."
        })
        wx.getUserProfile({
            desc: '获取用户信息并展示', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
                if (!res.userInfo) return;
                wx.setStorageSync('userInfo', res.userInfo); //储存用户信息
                //跳转至首页
                wx.redirectTo({
                    url: "/pages/index/index"
                })
            },
            complete: () => {
                Toast.clear();
            }
        });
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
