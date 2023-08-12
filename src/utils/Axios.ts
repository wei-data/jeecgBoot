import Axios from "./request"

const http = new Axios({
    headers: {},
    timeout: 10000,
    baseURL: 'http://192.168.131.140:3100/jeecgboot'
})
export {http}
