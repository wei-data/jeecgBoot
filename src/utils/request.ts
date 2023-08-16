import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie'
// // 导出 axios 实例
// export default service;
type responseType<T> = {
    code: number,
    message: string,
    result: T
};
export default class Axios {
    private instance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.interQuest()
    }
    public async request<T, D = responseType<T>>(config: AxiosRequestConfig): Promise<unknown> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await this.instance.request<D>(config)
                resolve(response.data)
            } catch (error) {
                reject(error)
            }
        })
    };

    private interQuest() {
        this.interRequest();
        this.interResponse()
    }

    private interRequest() {
        this.instance.interceptors.request.use((config) => {
            const token = Cookies.get('myCookie');
            console.log(token)
            if (config.headers['X-Skip-Interceptor']) {
                return config;
            }
            if (token) {
                // 设置请求头
                config.headers['X-Access-Token'] = token
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }
    private interResponse() {
        this.instance.interceptors.response.use((config) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }
}
