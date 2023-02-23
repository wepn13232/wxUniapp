import {getAllRecord} from "../../utils/url"
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";
import {formatDate} from "../../utils/util";


Page({

    /**
     * 页面的初始数据
     */
    data: {
        lists_data: [], //收入、支出数据
        totalOut: 0, //总支出
    },
    // 获取所有的支出、收入记录
    _getAllRecord() {
        Toast.loading({
            duration: 0,
            message: "加载数据中...",
            forbidClick: true,
            mask: true,
        })
        getAllRecord({}).then(res => {
            let totalOut = 0;
            for (let i in res) {
                res[i].dateTime = new Date(res[i].date);
                res[i].currDateTime = formatDate(res[i].dateTime);
                totalOut += res[i].money;
            }
            this.setData({
                lists_data: res,
                totalOut:totalOut
            })
            console.log(res)
            Toast.clear();
        }).catch(err => {
            console.log('错误func--->_getAllRecord', err);
            Toast.fail({
                message: "获取支出、收入记录出现错误"
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this._getAllRecord();
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
            active: 0
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

    },

})
