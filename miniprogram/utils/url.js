import {requestUrl} from "./fetch";

//获取首页商品内容
export function getGoodsLists(data) {
    return requestUrl("/getGoodsLists", "get", data)
}
//用户登录
export function login(data) {
    return requestUrl("/login", "post", data)
}
