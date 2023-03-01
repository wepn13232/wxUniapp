// pages/account/account.ts
import {getAllWallet} from "../../utils/url";
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";

// 账本列表数据类型
interface walletObject {
    name: string,
    type: string,
    countInTotal: number,
    totalOut: number,
    totalIn: number,
    isChosen: number,
}

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
        countInTotal: false, //是否计入总账 弹窗
        columns: [
            {
                value: "否",
                key: 0
            },
            {
                value: "是",
                key: 1
            }
        ],
        walletLists: [] as walletObject[], //账本列表
        isCheckForm: false, //是否开始校验表单
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
    // 关闭计入总账弹窗
    closeCountTotal() {
        this.setData({
            countInTotal: false,
        })
    },
    // 打开计入总账
    showCountTotal() {
        this.setData({
            countInTotal: true,
        })
    },
    // 是否计入总账 是、否 切换
    countTotalpickerConfirm(event: any) {
        this.setData({
            "walletForm.onTotalCount": event.detail.value.key,
        })
        this.closeCountTotal()
        console.log(this.data.walletForm)
    },
    // 选择账本类型
    chooseWalletType(event: any) {
        let item = event.currentTarget.dataset.item;
        this.setData({
            "walletForm.walletType": item.value,
        })
        this.closeWalletType();
    },
    // 获取所有账本列表
    _getAllWallet() {
        Toast.loading({
            duration: 0,
            message: "加载账本中...",
            forbidClick: true,
            mask: true,
        })
        getAllWallet({}).then(res => {
            this.setData({
                walletLists: res
            })
            Toast.clear();
        }).catch(err => {
            console.log('错误func--->_getAllWallet', err);
            Toast.fail("获取账本出现错误");
        })
    },
    // 新增账本
    addWallet() {
        let flag = this.validateForm()
        if (!flag) return;
        let obj: walletObject = {
            name: this.data.walletForm.walletName,
            type: this.data.walletForm.walletType,
            countInTotal: this.data.walletForm.onTotalCount,
            totalOut: 0,
            totalIn: 0,
            isChosen: 0, //是否选中
        };
        let arr: walletObject[] = [...this.data.walletLists];
        arr.push(obj);
        this.setData({
            walletLists: arr
        });
        Toast.success("新增账本成功");
        this.onClose();
        this.resetWalletForm(); //重置所有数据
    },
    // field文本输入变化
    fieldOnChange(event: any) {
        this.setData({
            "walletForm.walletName": event.detail.value || "",
        })
    },
    // 校验表单
    validateForm() {
        let flag = true;
        this.setData({
            isCheckForm: true
        })
        if (this.data.walletForm.walletName == "") {
            flag = false;
            Toast.fail("请填写必要信息")
        } else if (this.data.walletForm.walletType == "") {
            flag = false;
            Toast.fail("请选择账本类型");
        }
        return flag;
    },
    // 重置新增账本的数据
    resetWalletForm() {
        this.setData({
            "walletForm.walletName": "",
            "walletForm.walletType": "",
            "walletForm.walletNotice": "",
            "walletForm.onTotalCount": 0,
            isCheckForm: false,
        });
    },
    // 切换账本
    changeWallet(event: any) {
        let currWallet = event.currentTarget.dataset.item;
        let index = event.currentTarget.dataset.index;
        if (currWallet.isChosen === 1) {
            Toast.fail("已经是当前账本啦");
            return;
        }
        Toast.loading({
            duration: 0,
            message: "切换中...",
            forbidClick: true,
        })
        // 手动延迟切换（没有对接接口，模拟接口延迟）
        setTimeout(() => {
            for (let i in this.data.walletLists) {
                this.data.walletLists[i].isChosen = 0;
            }
            this.data.walletLists[index].isChosen = 1; //选中点击的账本
            // 更新视图
            this.setData({
                walletLists: this.data.walletLists
            })
            Toast.clear();
            // 切换至账本记录页面
            wx.switchTab({
                url: '/pages/home/home'
            })
        }, 500)
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        this._getAllWallet();
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
