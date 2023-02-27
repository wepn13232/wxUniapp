import {requestUrl} from "./fetch";

//获取首页商品内容
export function getGoodsLists(data) {
    return requestUrl("/getGoodsLists", "get", data)
}
//用户登录
export function login(data) {
    return requestUrl("/login", "post", data)
}
//获取所有支出、收入记录
export function getAllRecord(data) {
    return requestUrl("/getAllRecord", "get", data)
}
//获取所有账本记录
export function getAllWallet(data) {
    return requestUrl("/getAllWallet", "get", data)
}
