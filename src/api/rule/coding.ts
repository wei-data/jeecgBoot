import {http} from "../../utils/Axios";
// 获取
export const getList = (value: any)=>{
    return http.request({
        method: 'get',
        url: `/sys/fillRule/list`,
        params:value
    })
}
// 添加
export const adList = (value: any)=>{
    return http.request({
        method: 'post',
        url: `/sys/fillRule/add`,
        data:value
    })
}
// 功能测试
export const functionalTest = (value: any)=>{
    return http.request({
        method: 'get',
        url: `/sys/fillRule/testFillRule`,
        params:value
    })
}
// 删除
export const functionalDele = (value: any)=>{
    return http.request({
        method: 'delete',
        url: `/sys/fillRule/delete`,
        params:value
    })
}
// 查询
export const codingInquire = (value: any)=>{
    return http.request({
        method: 'get',
        url: `/sys/fillRule/list`,
        params:value
    })
}
// 编辑
export const codingRedact = (value: any)=>{
    return http.request({
        method: 'put',
        url: `/sys/checkRule/edit`,
        data:value
    })
}
