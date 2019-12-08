import axiosBase from "../../api/base";
import firebase from "firebase";

function login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
      firebase.auth().currentUser.getIdToken(true)
        .then(token =>{
          // console.log(`Bearer ${token}`);
          axiosBase.setToken(token)
        });
      console.log(result.user);
    }).catch(error => {
      console.log(error);
    })
}

export default login;
