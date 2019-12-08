import firebase from "firebase";
import FirebaseUser from '../../model/FirebaseUser'

function myInfoViaFirebase() {
  const user = firebase.auth().currentUser;
  let name, email, photoUrl, uid, emailVerified;

  if (user != null) {
    return new FirebaseUser({
      name: user.displayName,
      email: user.email,
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified
    })
  }
  console.log("ユーザーが見つかりません");
  return null;
}

export default myInfoViaFirebase;
