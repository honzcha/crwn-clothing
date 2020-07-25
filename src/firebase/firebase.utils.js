import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhw0oCa1bY5rQHCzbN8r7vxsyjc5nbbw8",
  authDomain: "crwn-dbdb.firebaseapp.com",
  databaseURL: "https://crwn-dbdb.firebaseio.com",
  projectId: "crwn-dbdb",
  storageBucket: "crwn-dbdb.appspot.com",
  messagingSenderId: "620985959857",
  appId: "1:620985959857:web:35a5e34b0b238b9d31a990",
  measurementId: "G-9JGZ18WYN0",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
