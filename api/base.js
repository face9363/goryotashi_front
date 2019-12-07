const axiosBase = require('axios');

const axios = {
  axios: null,
  token: null,

  setToken(token) {
    this.token = token;
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },

  axiosCreate(nameSpace) {
    this.axios = axiosBase.create({
      baseURL: 'http://goyotashi.us' + nameSpace, // バックエンドB のURL:port を指定する
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    });
    return this.axios;
  },

  defaultGet(url, auth, query={}){
    if(!this.token && auth){
      console.log("トークンのセットがありません");
      return null;
    }
    this.axios.get(url, {params: query})
      .then(function(res) {
        return res.data
      })
      .catch(function(err) {
        console.log(err);
        return null
      })
  },

  defaultPost(url, auth, body={}){
    if(!this.token && auth){
      console.log("トークンのセットがありません");
      return null;
    }
    this.axios.post(url, body)
      .then(function (res) {
        return res.data
      })
      .catch(function(err) {
        console.log(err);
        return null
      })
  }
};

export default axios;
