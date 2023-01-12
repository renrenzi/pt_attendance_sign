import axios from 'axios'
//import { MessageBox, Message } from 'element-ui'
//import store from '@/store'
// const baseURL = 'http://120.39.217.37:2236/api'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // baseURL: baseURL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout

})

// request interceptor
service.interceptors.request.use(
    config => {
        // config.headers.Authorization = getToken()
        /*
        config.url = config.url +"?Authorization="+ getToken()*/
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