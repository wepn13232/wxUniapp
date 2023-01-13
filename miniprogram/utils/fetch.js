/**
 * 自定义封装wx.request 为 fetch，方便管理接口
 * */
import Toast from "../miniprogram_npm/@vant/weapp/toast/toast";

let mainUrl = "https://www.fastmock.site/mock/d306c80954e9bef449aa4d05b6c32ec8/chuanWx";

export function requestUrl(url, method, data, contentType) {
    let header;
    if (method == "get" || method == "GET") {
        header = {
            "content-type": "application/json"
        }
    } else if (method == "post" || method == "POST") {
        header = {
            "content-type": contentType ? "application/json" : contentType
        }
    }
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${mainUrl}${url}`,
            data,
            header,
            method,
            success: (res) => {
                return resolve(res.data)
            },
            fail: (err) => {
                Toast.fail(err);
                return reject(err)
            }
        })
    })
}
