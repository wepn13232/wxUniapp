// pages/login/login.ts

import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";
import {login} from "../../utils/url";

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
        showAccountLogin: false, //是否使用账号密码登录
        showText: false,
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
        wx.getUserInfo({
            success: (res) => {
                if (!res.userInfo) return;
                wx.setStorageSync('userInfo', res.userInfo); //储存用户信息
                //跳转至首页
                wx.reLaunch({
                    url: "/pages/index/index"
                })
            },
            error: (err: any) => {
                Toast.fail("登录出现错误");
                console.log(err)
            },
            complete: () => {
                Toast.clear();
            }
        });
    },
    // 使用账号密码登录模块
    useAccount() {
        this.setData({
            showAccountLogin: true
        })
    },
    // 使用接口登录
    _login() {
        Toast.loading({
            duration: 0,
            message: "登录中..."
        })
        login({}).then(res => {
            if (+res.status === 200) {
                wx.setStorageSync("userInfo", res.data); //储存用户信息
                Toast.success("登录成功");
                //跳转至首页
                wx.reLaunch({
                    url: "/pages/index/index"
                })
            } else {
                Toast.fail(res.desc);
            }
        }).catch(err => {
            console.log('错误func--->_login', err);
            Toast.fail("登录出现错误");
        })
    },
    // 登录校验
    loginCheck() {
        if (!this.data.userInfo.username || !this.data.userInfo.password || !this.data.userInfo.code) {
            Toast.fail("请填写必要值");
        } else {
            this._login();
        }
    },
    // 输入框内容变更
    fieldChange(e: any) {
        let name = e.target.dataset.name;
        let dataName = `userInfo.${name}`
        this.setData({
            [dataName]: e.detail
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        // 动画加载首页文字
        this.setData({
            showText: true
        })
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
