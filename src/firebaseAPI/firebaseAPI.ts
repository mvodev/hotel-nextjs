import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
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
  collectionGroup,
  where,
} from 'firebase/firestore';
import { FirebaseError } from "@firebase/util";
import { UserDataType, UserType, RoomType, FiltersAPIType, CommentType, ImpressionsType, CommentInputType, } from './Types';

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

  public addComment = async (commentData: CommentInputType) => {
    addDoc(collection(this.db, 'comments'),commentData);
  }

  public getComments = ():Promise< Array<CommentType> | FirebaseError> => getDocs(collection(this.db,'comments'))
  .then((result)=>{
    const comments:Array<CommentType>=[];
    result.forEach((res)=>{
      comments.push({ ...res.data(), commentID: res.ref.id } as CommentType);
    });
    return comments;
  }).catch((error: FirebaseError): FirebaseError => error);

  public getCommentsByUID = async (uid:string): Promise< Array<CommentType> | FirebaseError> => {
    const comments = query(collectionGroup(this.db, 'comments'), where('uid', '==', uid));
    const querySnapshot = await getDocs(comments);
    const commentsByUID:Array<CommentType> = [];
    querySnapshot.forEach((res) => {
      commentsByUID.push({ ...res.data(), commentID: res.ref.id } as CommentType);
    });
    return commentsByUID;
  };

  public addLikeToComment = async (commentID:string, uidWhoLikedComment:string): Promise< boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if(!commentSnap.exists()){
      return new FirebaseError('INVALID_ARGUMENT','No comment for this argument in database');
    } 
    const dataToSave:CommentInputType = (commentSnap.data() as CommentInputType);
    if( !dataToSave.likedBy.includes(uidWhoLikedComment) ) {
      dataToSave.likedBy.push(uidWhoLikedComment);
      await setDoc(doc(this.db, 'comments', commentSnap.ref.id),dataToSave);
    }
    return true;
  }

  public removeLikeFromComment = async (commentID:string, uidUserToRemove:string): Promise< boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if(!commentSnap.exists()){
      return new FirebaseError('INVALID_ARGUMENT','No comment for this argument in database');
    } 
    const dataToSave:CommentInputType = (commentSnap.data() as CommentInputType);
    if(dataToSave.likedBy.includes(uidUserToRemove)){
      dataToSave.likedBy = dataToSave.likedBy.filter((elem)=>elem!==uidUserToRemove);
      await setDoc(doc(this.db, 'comments', commentSnap.ref.id),dataToSave);
    }
    return true;
  }

  public getCommentsByRoomID = async (roomID:string): Promise< Array<CommentType> | FirebaseError> => {
    const comments = query(collectionGroup(this.db, 'comments'), where('roomID', '==', roomID));
    const querySnapshot = await getDocs(comments);
    const commentsByUID:Array<CommentType> = [];
    querySnapshot.forEach((res) => {
      commentsByUID.push({ ...res.data(), commentID: res.ref.id } as CommentType);
    });
    return commentsByUID;
  };

  public getImpressions = async (roomID:string):Promise<ImpressionsType> => {
    const result: ImpressionsType = {
      perfect:0,
      good:0,
      satisfactory:0,
      poor:0,
    }
    const comments = query(collectionGroup(this.db, 'comments'), where('roomID', '==', roomID));
    const querySnapshot = await getDocs(comments);
    // eslint-disable-next-line consistent-return
    querySnapshot.forEach((res) => {
      switch ((res.data() as CommentType).score) {
        case 'perfect':
          result.perfect += 1;
          break;
        case 'good':
          result.good += 1;
          break;
        case 'satisfactory':
          result.satisfactory += 1;
          break;
        case 'poor':
          result.poor += 1;
          break;
        default:
          break;
      }
    });
    return result;
  }

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
    // eslint-disable-next-line @typescript-eslint/return-await
    return  await fetch(
      'https://europe-west3-breaking-code-ebe74.cloudfunctions.net/getRooms',
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
    .then((result) => result.json())
  };
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;
