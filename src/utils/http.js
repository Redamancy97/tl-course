// 在封装接口之前，先封装http的工具类
// 封装http的工具，可以帮我们为所有的接口增加一些同意的操作
// 在封装接口之前，先封装http的工具类...

// 可以使用自定义配置一个axios实例，可以添加统一的请求头
// axios导入
import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 10000,
    // 通用配置的请求头
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 可以添加统一的鉴权信息
    // 比如我们的接口是token鉴权，可以在请求拦截器里，统一设置请求的token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // 对不同的错误进行统一的捕获和处理
    if (response.status === 200) {
        return response;
    }
    if (response.data.code == 401) {
        // 代表登录过期
        // 清楚登录状态就行了

    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// axios导出
export default instance