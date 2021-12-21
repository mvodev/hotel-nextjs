import { initializeApp, FirebaseApp } from 'firebase/app';
import {
  getAuth,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserCredential,
  updateEmail,
  updatePassword,
  User,
  signOut,
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
  updateDoc,
} from 'firebase/firestore';
import { FirebaseError } from '@firebase/util';
import { AddBookResultType } from 'src/redux/AddBook/Types';
import { UpdateRoomsResultType } from 'src/redux/Rooms/Types';
import {
  UserDataType,
  UserType,
  RoomType,
  FiltersAPIType,
  ReturnedRoomType,
  ImpressionsType,
  CommentInputType,
  CommentOutputType,
  BookDataType,
  ReturnedRoomTypeWithTimestamp
} from './Types';

import { ResultType } from 'src/redux/Authentication/Types';
import { Timestamp } from '@grpc/grpc-js/build/src/generated/google/protobuf/Timestamp';

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
          } as UserType)
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
          } as UserType)
        )
      )
      .catch((error: FirebaseError): FirebaseError => error);

  public signOut = async (): Promise<{
    isSignOut: boolean,
    error?: FirebaseError
  }> => (
    signOut(this.auth)
      .then(() => ({ isSignOut: true }))
      .catch((e) => ({
        isSignOut: false,
        error: e
      }))
  )

  public getFilters = (): Promise<FiltersAPIType | FirebaseError> =>
    getDoc(doc(this.db, 'filters', 'filters'))
      .then((result) => result.data() as FiltersAPIType)
      .catch((error: FirebaseError): FirebaseError => error);

  public addRoom = async (roomData: RoomType) => {
    addDoc(collection(this.db, 'rooms'), roomData);
  };

  public addComment = async (commentData: CommentInputType, avatarPath?:string) => {
    const dataToSave = {
      ...commentData,
      avatar: '/images/avatar-user-1.webp',
      publicationDate:new Date(),
      likedBy:[],
    }
    if( avatarPath && avatarPath.length > 0){
      dataToSave.avatar = avatarPath;
    }
    addDoc(collection(this.db, 'comments'), dataToSave);
  }

  public getComments = (): Promise<Array<CommentOutputType> | FirebaseError> => getDocs(collection(this.db, 'comments'))
    .then((result) => {
      const comments: Array<CommentOutputType> = [];
      result.forEach((res) => {
        comments.push({ ...res.data(), commentID: res.ref.id } as CommentOutputType);
      });
      return comments;
    }).catch((error: FirebaseError): FirebaseError => error);

  public getCommentsByUID = async (uid: string): Promise<Array<CommentOutputType> | FirebaseError> => {
    const comments = query(collectionGroup(this.db, 'comments'), where('uid', '==', uid));
    const querySnapshot = await getDocs(comments);
    const commentsByUID: Array<CommentOutputType> = [];
    querySnapshot.forEach((res) => {
      commentsByUID.push({ ...res.data(), commentID: res.ref.id } as CommentOutputType);
    });
    return commentsByUID;
  };

  public addLikeToComment = async (commentID: string, uidWhoLikedComment: string): Promise<boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if (!commentSnap.exists()) {
      return new FirebaseError('INVALID_ARGUMENT', 'No comment for this argument in database');
    }
    const dataToSave: CommentOutputType = (commentSnap.data() as CommentOutputType);
    if (!dataToSave.likedBy.includes(uidWhoLikedComment)) {
      dataToSave.likedBy.push(uidWhoLikedComment);
      await updateDoc(doc(this.db, 'comments', commentSnap.ref.id), (dataToSave as CommentInputType));
    }
    return true;
  }

  public removeLikeFromComment = async (commentID: string, uidUserToRemove: string): Promise<boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if (!commentSnap.exists()) {
      return new FirebaseError('INVALID_ARGUMENT', 'No comment for this argument in database');
    }
    const dataToSave: CommentOutputType = (commentSnap.data() as CommentOutputType);
    if (dataToSave.likedBy.includes(uidUserToRemove)) {
      dataToSave.likedBy = dataToSave.likedBy.filter((elem) => elem !== uidUserToRemove);
      await updateDoc(doc(this.db, 'comments', commentSnap.ref.id), (dataToSave as CommentInputType));
    }
    return true;
  }

  public getCommentsByRoomID = async (roomID: string): Promise<Array<CommentOutputType> | FirebaseError> => {
    const comments = query(collectionGroup(this.db, 'comments'), where('roomID', '==', roomID));
    const querySnapshot = await getDocs(comments);
    const commentsByUID: Array<CommentOutputType> = [];
    querySnapshot.forEach((res) => {
      commentsByUID.push({ ...res.data(), commentID: res.ref.id } as CommentOutputType);
    });
    return commentsByUID;
  };

  public getImpressions = async (roomID: string): Promise<ImpressionsType> => {
    const result: ImpressionsType = {
      perfect: 0,
      good: 0,
      satisfactory: 0,
      poor: 0,
    }
    const comments = query(collectionGroup(this.db, 'comments'), where('roomID', '==', roomID));
    const querySnapshot = await getDocs(comments);
    // eslint-disable-next-line consistent-return
    querySnapshot.forEach((res) => {
      switch ((res.data() as CommentOutputType).score) {
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
  ): Promise<UpdateRoomsResultType> => {
    const data = { 
      filters,
      page,
      itemsOnPage
    }
    // eslint-disable-next-line @typescript-eslint/return-await
    return await fetch(
      'https://europe-west3-breaking-code-ebe74.cloudfunctions.net/getRooms',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    )
      .then((result) => result.json())
  };

  public addBook = async (bookData: BookDataType): Promise<AddBookResultType> => {
    return  await fetch(
      'https://europe-west3-breaking-code-ebe74.cloudfunctions.net/addBook',
      {
        method: 'POST',
        body: JSON.stringify(bookData)
      }
    )
    .then((result) => {
      return result.json()
    })
  };
  
  public getCurrentRoom = async (
    id: string
  ): Promise<ReturnedRoomType | null> =>
    getDoc(doc(this.db, 'rooms', id)).then((room) => {
      if (room.data()) {
        const result = ({ ...room.data(), roomID: room.id } as ReturnedRoomTypeWithTimestamp) 
        const bookedDays = result.bookedDays.map((item) => item.seconds * 1000)
        return {...result, bookedDays}  
      }
      return null
    }
    );

  public changeUserName = async (
    id: string,
    userName: string
  ): Promise<ResultType> => (
    await updateDoc(doc(this.db, 'userData', id), { name: userName })
      .then(() => ({
        changed: true
      }))
      .catch((e) => ({
        changed: false,
        error: e
      }))
  )

  public changeUserSurname = async (
    id: string,
    userSurname: string
  ): Promise<ResultType> => (
    await updateDoc(doc(this.db, 'userData', id), { surname: userSurname })
      .then(() => ({
        changed: true
      }))
      .catch((e) => ({
        changed: false,
        error: e
      }))
  )

  public changeEmail = async (
    userEmail: string
  ): Promise<ResultType> => {
    const user = this.auth.currentUser;
    if (user !== null) {
      return await updateEmail(user, userEmail)
      .then(() => ({
        changed: true
      }))
      .catch((e) => ({
        changed: false,
        error: e
      }))
    } else {
      return { changed: false, error: 'Пользователь не авторизирован'}
    }
  }

  public changePassword = async (
    password: string
  ): Promise<ResultType> => {
    const user = this.auth.currentUser;
    if (user !== null) {
      return await updatePassword(user, password)
      .then(() => ({
        changed: true
      }))
      .catch((e) => ({
        changed: false,
        error: e
      }))
    } else {
      return { changed: false, error: 'Пользователь не авторизирован'}
    }
  }

  public addCommentAndUpdateImpressions = async (commentData: CommentInputType): Promise<boolean | FirebaseError> => {
    this.addComment(commentData);
    const roomRef = doc(this.db, 'rooms', commentData.roomID);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) {
      return new FirebaseError('INVALID_ARGUMENT', 'No room for this argument in database');
    }
    const dataToSave: RoomType = (roomSnap.data() as RoomType);
    dataToSave.impressions[commentData.score]+=1;
    await updateDoc(doc(this.db, 'rooms', roomSnap.ref.id), {
      impressions:dataToSave.impressions
    });
    return true;
  }
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;
