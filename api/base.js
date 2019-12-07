const axiosBase = require('axios');

const axios = {
  axios: null,

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

  defaultGet(url, query={}){
    this.axios.get(url, {params: query})
      .then(function(res) {
        return res.data
      })
      .catch(function(err) {
        console.log(err);
        return nil
      })
  },

  defaultPost(url, body={}){
    this.axios.post(url, body)
      .then(function (res) {
        return res.data
      })
      .catch(function(err) {
        console.log(err);
        return nil
      })
  }
};

export default axios;
