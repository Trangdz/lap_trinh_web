import axios from "axios";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false,   // Ẩn spinner khi hiển thị thanh tiến trình
  // easing: 'ease',    // Kiểu easing cho thanh tiến trình
  // speed: 500,        // Tốc độ chuyển động của thanh tiến trình
  // trickleRate: 0.5,  // Tốc độ tăng dần khi trickle
  trickleSpeed: 100,    // Tốc độ trickle (tốc độ tăng dần)
  // trickle: true,     // Có bật trickle hay không
});

const axiosCustomize = axios.create({
  baseURL: 'http://localhost:8081/',
  
});
// Add a request interceptor
axiosCustomize.interceptors.request.use(function (config) {
  NProgress.start();
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosCustomize.interceptors.response.use(function (response) {
  NProgress.done();
  console.log("Components before intercept",response);
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response && response.data? response.data:response;
}, function (error) {
  console.log("Error before process: ",error);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return error && error.response && error.response.data? error.response.data : Promise.reject(error);
});
export default axiosCustomize;