// app.ts
App({
    globalData: {
        capsuleTop: "0px", //胶囊距离顶部的距离
        safe_height: "0px", //距离顶部的安全距离
    },

    // 获取距离顶部的安全距离
    getHeight() {
        let capsule = wx.getMenuButtonBoundingClientRect(); //获取右上角胶囊信息
        this.globalData.capsuleTop = capsule.top + "px";
        this.globalData.safe_height = capsule.top + capsule.height + 'px'; //获取胶囊最低安全高度（刚好到胶囊最下面）
    },
    //APP加载时执行
    onLaunch() {
        this.getHeight();
    },
})
