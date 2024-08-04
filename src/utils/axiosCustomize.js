import axios from "axios";
const axiosCustomize = axios.create({
  baseURL: 'http://localhost:8081/',
  
});
// Add a request interceptor
axiosCustomize.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosCustomize.interceptors.response.use(function (response) {
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