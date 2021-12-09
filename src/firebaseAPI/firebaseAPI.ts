import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFunctions, httpsCallable, Functions } from 'firebase/functions';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  AuthError,
} from 'firebase/auth';
import {
  getFirestore,
  Firestore,
  setDoc,
  addDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  getDocFromServer,
  getDocsFromServer,
  QuerySnapshot,
  DocumentData,
  collectionGroup,
  where,
} from 'firebase/firestore';
import { async, FirebaseError } from "@firebase/util";
import { UserDataType, UserType, RoomType, FiltersAPIType, ReturnedRoomType, CommentType } from './Types';

const firebaseConfig = {
  apiKey: 'AIzaSyBCKidrAaH_xAzc-QdlLrY-hkUHqJeijIA',
  authDomain: 'breaking-code-ebe74.firebaseapp.com',
  databaseURL:
    'https://breaking-code-ebe74-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'breaking-code-ebe74',
  storageBucket: 'breaking-code-ebe74.appspot.com',
  messagingSenderId: '770591862991',
  appId: '1:770591862991:web:4dea4eda027fcf69ef07ba',
  measurementId: 'G-42H384R7P3',
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

  public signUp = async (
    userData: UserDataType
  ): Promise<UserType | FirebaseError> =>
    createUserWithEmailAndPassword(this.auth, userData.email, userData.password)
      .then((userCredential: UserCredential) => {
        setDoc(doc(this.db, `userData/${userCredential.user.uid}`), {
          name: userData.name,
          surname: userData.surname,
          photo: '',
          gender: userData.gender,
          birthday: userData.birthday,
        });
        return userCredential;
      })
      .then((userCredential: UserCredential) =>
        getDoc(doc(this.db, 'userData', userCredential.user.uid)).then(
          (user) => ({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            ...user.data(),
          })
        )
      )
      .catch((error: FirebaseError) => error);

  public signIn = async (
    email: string,
    password: string
  ): Promise<UserType | FirebaseError> =>
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential: UserCredential) =>
        getDoc(doc(this.db, 'userData', userCredential.user.uid)).then(
          (userData) => ({
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            ...userData.data(),
          })
        )
      )
      .catch((error: FirebaseError): FirebaseError => error);

  public getFilters = (): Promise<FiltersAPIType | FirebaseError> =>
    getDoc(doc(this.db, 'filters', 'filters'))
      .then((result) => result.data() as FiltersAPIType)
      .catch((error: FirebaseError): FirebaseError => error);

  public addRoom = async (roomData: RoomType) => {
    addDoc(collection(this.db, 'rooms'), roomData);
  };

  public addComment = async (commentData: CommentType) => {
    addDoc(collection(this.db, 'comments'),commentData);
  }

  public getComments = async () => getDocs(collection(this.db,'comments'))
  .then((result)=>{
    const comments:Array<unknown>=[];
    result.forEach((res)=>{
      comments.push(res.data())
    });
    return comments;
  }).catch((error: FirebaseError): FirebaseError => error);

  public getCommentsByUID = async (uid:string) => {
    const comments = query(collectionGroup(this.db, 'comments'), where('uid', '==', uid));
    const querySnapshot = await getDocs(comments);
    const commentsByUID:Array<unknown> = [];
    querySnapshot.forEach((res) => {
      commentsByUID.push(res.data());
    });
    return commentsByUID;
  };

  public getRooms = async (
    filters: FiltersAPIType,
    page: number,
    itemsOnPage: number
  ) => {
    const data = { 
      filters,
      page,
      itemsOnPage
    }
    return  await fetch(
      'https://europe-west3-breaking-code-ebe74.cloudfunctions.net/getRooms',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
    .then((result) => {
      return result.json()
    })
  };
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;
