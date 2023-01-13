// app.ts
App({
    globalData: {
        userInfo: {}, //用户信息
    },

    //APP加载时执行
    onLaunch() {
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
