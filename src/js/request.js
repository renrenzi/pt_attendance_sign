import axios from 'axios'
import {getToken, removeToken} from "@/js/auth";
import {Notify} from "vant";
//import { MessageBox, Message } from 'element-ui'
//import store from '@/store'
// const baseURL = 'http://localhost:9527/api'
const baseURL = 'http://47.113.191.204:9527/api'

// create an axios instance
const service = axios.create({
    //baseURL: 'dev-api', // url = base url + request url
    baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout

})
// request interceptor
service.interceptors.request.use(
    config => {
        const Authorization = getToken()
        console.info(Authorization)
        Authorization && (config.headers.Authorization = Authorization)
        config.url = config.url +"?Authorization="+ getToken()
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data
        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 2000) {
            Notify({ type: 'danger', message: res.message });
            // 该用户未登录
            if (res.code === 4002) {
                removeToken()
                //location.reload()
            }
            // 权限不足
            // eslint-disable-next-line no-empty
            if (res.code === 4003) {
                console.info('权限不足')
            }
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                console.info('other problem')
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return response
        }
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

export default service
