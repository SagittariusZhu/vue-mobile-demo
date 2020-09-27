import axios from 'axios'
import vue from 'vue'
 
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
 
axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })

axios.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})
 
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
 
export default {
  getNews(url, params) {
    return fetch(url, params);
  }
}