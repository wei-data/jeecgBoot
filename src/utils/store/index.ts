import { defineStore } from 'pinia'
import {useRouter} from "vue-router";
const Router =useRouter()
console.log(Router)
const useStore = defineStore('storeId', {
    // 为了完整类型推理，推荐使用箭头函数
    state: () => {
        return {
            // 所有这些属性都将自动推断出它们的类型
            menuList: ''
        }
    },
})
