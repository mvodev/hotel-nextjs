import { initializeApp, FirebaseApp } from "firebase/app";
import { 
  getAuth, 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  UserCredential, 
  AuthError 
} from "firebase/auth";
import { getFirestore, Firestore, setDoc, doc } from 'firebase/firestore';
import { UserDataType, UserType } from './Types';

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

class FirebaseAPI {
  private app: FirebaseApp;

  private auth: Auth;

  private db: Firestore;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();
    this.db = getFirestore(this.app);
  }

  public signUp = async (userData: UserDataType): Promise<UserType | AuthError> => (
    createUserWithEmailAndPassword(this.auth, userData.email, userData.password)
      .then((userCredential: UserCredential) => {
        setDoc(doc(this.db, `userData/${userCredential.user.uid}`), {
          name: userData.name,
          surname: userData.surname,
          photo: '',
          gender: userData.gender,
          birthday: userData.birthday
        })
        return {
          uid: userCredential.user.uid,
          email: userCredential.user.email
        }
      })
      .catch((error: AuthError) => error)
  );

  public signIn = async (email: string, password: string): Promise<UserType | AuthError> => (
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) => ({
        uid: userCredential.user.uid, 
        email: userCredential.user.email
      }))
      .catch((error: AuthError): AuthError => error)
  )
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;