import Axios from "./request"

const http = new Axios({
    headers: {},
    timeout: 5000,
    baseURL: 'http://localhost:3100/jeecgboot'
})
export { http }
