import {getGoodsLists} from "../../utils/url";
import Toast from "../../miniprogram_npm/@vant/weapp/toast/toast";

Page({
    data: {
        active: 0,
        allGoodsLists: [], //全部商品列表
        showGoodsLists: [], //展示的商品
        showNums: 10, //默认一开始列表只展示10个
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
            Toast("已经全部加载完了");
            return;
        }
        this.setData({
            showNums: this.data.showNums += 10, //每次下拉到最低下加10个商品
            showGoodsLists: this.data.allGoodsLists.slice(0, this.data.showNums)
        })
    },

    //页面开始加载
    onLoad() {
        this._getGoodsLists();
    },
})
