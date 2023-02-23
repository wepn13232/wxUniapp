export const formatTime = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return (
        [year, month, day].map(formatNumber).join('/') +
        ' ' +
        [hour, minute, second].map(formatNumber).join(':')
    )
}

const formatNumber = (n: number) => {
    const s = n.toString()
    return s[1] ? s : '0' + s
}

// 复制内容
export const copyValue = (value: string) => {
    wx.setClipboardData({
        data: value,
        success() {
            wx.getClipboardData({
                success() {
                    wx.showToast({
                        title: "复制成功",
                        icon: "success"
                    });
                }
            })
        }
    })
}

// 过滤字符串类的日期，返回具体月日、星期（如 2022-11-22）
export const formatDate = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = date.getDay();
    let weekDay;
    switch (week) {
        case 0:
            weekDay = "星期日";
            break;
        case 1:
            weekDay = "星期一";
            break;
        case 2:
            weekDay = "星期二";
            break;
        case 3:
            weekDay = "星期三";
            break;
        case 4:
            weekDay = "星期四";
            break;
        case 5:
            weekDay = "星期五";
            break;
        case 6:
            weekDay = "星期六";
            break;
    }
    return `${month}月${day}日 ${weekDay}`
}
