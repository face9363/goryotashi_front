import axiosBase from "../api/base";
import firebase from "firebase";

function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      axiosBase.setToken(result);
      console.log(result.user);
    }).catch(error => {
      console.log(error);
      this.errorMessage = error.message;
      this.showError = true
    })
}

export default login;
