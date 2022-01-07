import axios from 'axios';
import { getToken } from './utils';


const instance = axios.create({
  baseURL: '',
  timeout: 5000,
});

instance.interceptors.request.use(
  (config) => {
    // config是请求
    // 1.获取token，从user模块中获取
    // const { token } = getToken();
    // if (token) config.headers.Authorization = token;
    return config; // 加上token再把请求return出去
  },
  (e) => Promise.reject(e)
);

instance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    if (e.response && e.response.status === 401) {
      // router.currentRoute.value获取到当前路由对象
      // .fullPath获取当前路由对象的全路径
      // encodeURIComponent把路径编码成字符串-避免参数出现错误
      const redirectUrl = encodeURIComponent(
        router.currentRoute.value.fullPath
      );
      router.push('/login?redirectUrl=', redirectUrl);
    }
    return Promise.reject(e);
  }
);

const request = (url, method, submitData) => {
  return instance({
    url,
    method,
    // method.toLowerCase()传参方式变为小写
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
export default request