Component({
    properties: {},
    data: {
        active: 0,
    },
    methods: {
        // tab切换的操作
        onChange(event) {
            this.setData({active: event.detail});
            let url;
            switch (event.detail) {
                case 0:
                    url = "/pages/home/home";
                    break;
                case 1:
                    url = "/pages/account/account";
                    break;
            }
            wx.switchTab({
                url: url
            })
        },
    },
    // 生命周期
    lifetimes: {
        // 页面加载完成时执行
        ready() {

        },
    },

});
