import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCKidrAaH_xAzc-QdlLrY-hkUHqJeijIA",
  authDomain: "breaking-code-ebe74.firebaseapp.com",
  databaseURL: "https://breaking-code-ebe74-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "breaking-code-ebe74",
  storageBucket: "breaking-code-ebe74.appspot.com",
  messagingSenderId: "770591862991",
  appId: "1:770591862991:web:4dea4eda027fcf69ef07ba",
  measurementId: "G-42H384R7P3"
};

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

class FirebaseAPI {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  public signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        return error;
      });
  }

  public signIn = (email: string, password: string) => {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((userCredential) => {
      return userCredential.user;
    })
    .catch((error) => {
      return error;
    });
  }
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;