import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkQhjlo1lIOd90AWtjYLOHX5r-ClMFopQ",
  authDomain: "fb-react-tdlist.firebaseapp.com",
  projectId: "fb-react-tdlist",
  storageBucket: "fb-react-tdlist.appspot.com",
  messagingSenderId: "317337805021",
  appId: "1:317337805021:web:6e2bf833496d1d8e4a7b34"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();

