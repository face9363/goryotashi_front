import axios from "../../api/base";
import firebase from "firebase";

function logut() {
  firebase.auth().signOut().then(function() {
    axios.token = null;
    console.log("ログアウトしました");
    return {msg: "logout success"}
  }).catch(function(error) {
    return error;
  });
}

export default logut;
