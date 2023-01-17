// app.ts
App({
    globalData: {
        userInfo: {}, //用户信息
    },

    // 获取微信小程序版本号码
    getWxVersion() {
        console.log("线上小程序基础库版本号：", wx.getAccountInfoSync().miniProgram.version)
    },
    //APP加载时执行
    onLaunch() {
        this.getWxVersion();
        // wx.getStorage({
        //     key: "userInfo",
        //     success: (res) => {
        //         if (!res.data || Object.keys(res.data).length == 0) {
        //             //跳转至登录页面
        //             wx.redirectTo({
        //                 url: "/pages/login/login"
        //             })
        //             return;
        //         }
        //         //储存用户全局信息
        //         this.globalData.userInfo = res.data;
        //         //跳转至首页
        //         wx.redirectTo({
        //             url: "/pages/index/index"
        //         })
        //     },
        //     fail: (err) => {
        //         console.log(err);
        //         //跳转至登录页面
        //         wx.redirectTo({
        //             url: "/pages/login/login"
        //         })
        //     }
        // });
    },
})
