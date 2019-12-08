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
      baseURL: 'http://localhost:8080/' + nameSpace, // バックエンドB のURL:port を指定する
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      responseType: 'json'
    });
    return this.axios;
  },

  async defaultGet(url, auth, query={}){
    if(!this.token && auth){
      console.log("トークンのセットがありません");
      return null;
    }
    try {
      const res = await this.axios.get(url, {params: query});
      console.log(res.data);
      return res.data
    }
    catch(err) {
      console.log(err);
      return null
    }
  },

  async defaultPost(url, auth, body={}){
    if(!this.token && auth){
      console.log("トークンのセットがありません");
      return null;
    }
    try {
      const res = await this.axios.post(url, body);
      console.log(res.data);
      return res.data
    }
    catch(err) {
      console.log(err);
      return null
    }
  }
};

export default axios;
