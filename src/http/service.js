import axios from 'axios'
import {baseUrl} from '@/config'
import {Toast} from 'vant'
import {store} from '../store'


let service = axios.create({
    baseURL: baseUrl, // url = base api url + request url
    //withCredentials: true, // send cookies when cross-domain requests
    timeout: 50000000 // request timeout
})
// 请求拦截
let loading;
service.interceptors.request.use(config => {
    loading = Toast.loading({
        duration:10000,
        message:"加载中...",
        forbidClick:true,
    })
    config.headers['Authorization'] ='Bearer ' + sessionStorage.getItem('token')

    return config
},error =>{
    console.log(error);
    return Promise.reject(error)
})

service.interceptors.response.use(res =>{
    loading.clear()
    return Promise.resolve(res)
},error =>{
    loading.clear()
    console.log('err'+error);
    return Promise.reject(error)
})


export default service