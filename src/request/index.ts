//封装axios
import axios from 'axios'
//创建axios实例
const service = axios.create({
    //接口根地址
    baseURL:"https://www.fastmock.site/mock/064f0cbf7ff0bc3a1ab79d055cc64ad5/learn",
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})
//请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token=localStorage.getItem('token') || ""
    }
    return config
})
//响应拦截
service.interceptors.response.use((res) =>{
    const code:number = res.data.code
    if (code !=200){
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err);
    return Promise.reject(err);
})


export default service