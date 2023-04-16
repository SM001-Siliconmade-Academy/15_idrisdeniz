import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBi9wltAXvTUqCvAjYxOImg_S8HreYPpjU",
  authDomain: "test-firebase-auth-88c63.firebaseapp.com",
  projectId: "test-firebase-auth-88c63",
  storageBucket: "test-firebase-auth-88c63.appspot.com",
  messagingSenderId: "185749987439",
  appId: "1:185749987439:web:b164b75eb88742719c6d9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, auth, storage };
