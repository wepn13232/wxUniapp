Component({
    options: {
        addGlobalClass: true
    },
    properties: {},
    data: {
        userInfo: wx.getStorageSync("userInfo"), //用户信息
    },
    methods: {
        //用户选择头像
        chooseAvatar(url) {
            console.log('获取到头像', url);
            this.setData({
                ["userInfo.avatarUrl"]: url.detail.avatarUrl, //重新设置头像
            })
        },
        //跳转页面
        toPage(e) {
            let page = e.target.dataset.page;
            switch (page) {
                //跳转主页
                case 'index':
                    wx.navigateTo({
                        url: "/pages/index/index"
                    });
                    break;
                //跳转用户主页
                case 'userCenter':
                    wx.navigateTo({
                        url: "/pages/UserCenter/userCenter"
                    });
                    break;
            }
        }
    },
    //组件的生命周期
    lifetimes: {
        //组件实例进入页面节点的时候
        attached() {
            console.log(this.data.userInfo)
        },
        //组件被创建的时候
        created() {
        }
    }
});
