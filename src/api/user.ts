import {http} from "../utils/Axios";
import {Verification,logInType} from './type/userType.ts'
import {UnwrapRef} from "vue";
//
export const getVerification = (value: UnwrapRef<string>)=>{
    return http.request<Verification>({
        method: 'get',
        url: `/sys/randomImage/${value}`,
        headers: {
            'X-Skip-Interceptor': true, // 在请求头中添加X-Skip-Interceptor头部来跳过拦截器
        },
    })
}
export  const logInUser = (data:logInType)=>{
    return http.request<any>({
        method: "post",
        url: '/sys/login',
        data,
        headers: {
            'X-Skip-Interceptor': true, // 在请求头中添加X-Skip-Interceptor头部来跳过拦截器
        },
    })
}
