import {ajax_fetch} from "./fetch";

//获取首页商品内容
export function getGoodsLists(data) {
    return ajax_fetch("/getGoodsLists", "get", data)
}
