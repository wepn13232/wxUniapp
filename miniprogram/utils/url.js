import {ajax_fetch} from "./fetch";

//获取首页商品内容
export function getGoodsLists(data) {
    return ajax_fetch("/getGoodsLists", "get", data)
}
//用户登录
export function login(data) {
    return ajax_fetch("/login", "post", data)
}
