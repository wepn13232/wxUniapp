
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
