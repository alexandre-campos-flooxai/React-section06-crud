import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_Api_Key,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_Auth_Domain,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_Project_Id,
  });
}

export default firebase;
