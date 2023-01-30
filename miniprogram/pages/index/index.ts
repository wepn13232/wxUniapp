import {getGoodsLists} from "../../utils/url";
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";
import {copyValue} from "../../utils/util";

Page({
    data: {
        active: 0,
        allGoodsLists: [], //全部商品列表
        showGoodsLists: [], //展示的商品
        showNums: 10, //默认一开始列表只展示10个
        popupShow: false, //展示左边的菜单
        currItem: {}, //当前展示的item内容
        goodsPopup: false, //详细商品弹窗
    },
    //获取商品列表
    _getGoodsLists() {
        Toast.loading({
            duration: 0,
            message: "加载中...",
            forbidClick: true,
        })
        getGoodsLists({}).then(res => {
            if (res.code == 200) {
                this.setData({
                    allGoodsLists: res.data.products,
                    showGoodsLists: res.data.products.slice(0, this.data.showNums), //默认展示的商品
                })
                Toast.clear();
            } else {
                Toast.fail(res.msg)
            }
        }).catch(err => {
            console.log('获取商品列表出现错误', err);
            Toast.fail(err);
        })
    },
    //列表滑动到底部时触发
    handlerToBottom() {
        if (this.data.showNums >= this.data.allGoodsLists.length) {
            Toast("已经到底啦");
            return;
        }
        this.setData({
            showNums: this.data.showNums += 10, //每次下拉到最低下加10个商品
            showGoodsLists: this.data.allGoodsLists.slice(0, this.data.showNums)
        })
    },
    //关闭popup菜单
    closeMenu() {
        this.setData({
            popupShow: false,
        })
    },
    // 点击具体的商品
    clickCurrGoods(e: any) {
        console.log(e.currentTarget.dataset.item);
        let currDate = (new Date(e.currentTarget.dataset.item.activity_start_time)).toLocaleDateString().replace(/\//g, "-");
        let currTime = (new Date(e.currentTarget.dataset.item.activity_start_time)).toTimeString().substr(0, 8);
        this.setData({
            currItem: e.currentTarget.dataset.item,
            goodsPopup: true,
            'currItem.currDate': currDate,
            'currItem.currTime': currTime
        })
    },
    // 关闭商品详细弹窗
    closeGoodsPopup() {
        this.setData({
            goodsPopup: false,
        })
    },
    // 复制内容
    getCopy(e: any) {
        let value = e.currentTarget.dataset.value.toString();
        copyValue(value); //进行微信复制
    },


    //页面开始加载
    onLoad() {
        this._getGoodsLists();
    },
    onShow(): void | Promise<void> {
        // 设置导航激活状态
        this.getTabBar().setData({
            active: 0
        })
    }
})
