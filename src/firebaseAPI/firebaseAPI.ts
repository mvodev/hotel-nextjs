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
  Timestamp,
  orderBy,
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
  CommentOutputType
} from './Types';


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

  public addComment = async (commentData: CommentInputType, avatarPath?: string) => {
    const dataToSave = {
      ...commentData,
      avatar: '/images/avatar-user-1.webp',
      publicationDate: new Date(),
      likedBy: [],
    }
    if (avatarPath && avatarPath.length > 0) {
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

  public addLikeToComment = async (
    commentID: string,
    uidWhoLikedComment: string
  ): Promise<boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if (!commentSnap.exists()) {
      return new FirebaseError(
        'INVALID_ARGUMENT',
        'No comment for this argument in database'
      );
    }
    const dataToSave: CommentOutputType = (commentSnap.data() as CommentOutputType);
    if (!dataToSave.likedBy.includes(uidWhoLikedComment)) {
      dataToSave.likedBy.push(uidWhoLikedComment);
      await updateDoc(doc(this.db, 'comments', commentSnap.ref.id), (dataToSave as CommentInputType));
    }
    return true;
  };

  public removeLikeFromComment = async (
    commentID: string,
    uidUserToRemove: string
  ): Promise<boolean | FirebaseError> => {
    const commentRef = doc(this.db, 'comments', commentID);
    const commentSnap = await getDoc(commentRef);
    if (!commentSnap.exists()) {
      return new FirebaseError(
        'INVALID_ARGUMENT',
        'No comment for this argument in database'
      );
    }
    const dataToSave: CommentOutputType = (commentSnap.data() as CommentOutputType);
    if (dataToSave.likedBy.includes(uidUserToRemove)) {
      dataToSave.likedBy = dataToSave.likedBy.filter((elem) => elem !== uidUserToRemove);
      await updateDoc(doc(this.db, 'comments', commentSnap.ref.id), (dataToSave as CommentInputType));
    }
    return true;
  };

  public getCommentsByRoomID = async (
    roomID: string
  ): Promise<Array<CommentOutputType> | FirebaseError> => {
    const comments = query(
      collectionGroup(this.db, 'comments'),
      where('roomID', '==', roomID),
      orderBy('publicationDate', 'desc')
    );
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
    };
    const comments = query(
      collectionGroup(this.db, 'comments'),
      where('roomID', '==', roomID)
    );
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
  };

  public getRooms = async (
    filters: FiltersAPIType,
    page: number,
    itemsOnPage: number
  ): Promise<UpdateRoomsResultType> => {
    const data = { 
      filters,
      page,
      itemsOnPage,
    };
    // eslint-disable-next-line @typescript-eslint/return-await
    return await fetch(
      'https://europe-west3-breaking-code-ebe74.cloudfunctions.net/getRooms',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then((result) => result.json());
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

  public roomIsBookedByUser({
    roomID,
    uid,
  }: {
    roomID: string;
    uid: string;
  }): Promise<boolean> {
    const bookingQuery = query(
      collectionGroup(this.db, 'bookingList'),
      where('userID', '==', uid),
      where('roomID', '==', roomID)
    );

    return getDocs(bookingQuery).then((result) => {
      if (uid === null) {
        return false;
      }

      const currentDate = Math.floor(Date.now() / 1000);
      const isBooked = result.docs.some((item) => {
        const bookingDates: Timestamp[] = item.data().dates;
        return bookingDates.length > 0
          ? bookingDates.some((date: Timestamp) =>
            date ? date.seconds < currentDate : false
          )
          : false;
      });
      return isBooked;
    });
  }

  public addCommentAndUpdateImpressions = async (commentData: CommentInputType): Promise<boolean | FirebaseError> => {
    this.addComment(commentData);
    const roomRef = doc(this.db, 'rooms', commentData.roomID);
    const roomSnap = await getDoc(roomRef);
    if (!roomSnap.exists()) {
      return new FirebaseError('INVALID_ARGUMENT', 'No room for this argument in database');
    }
    const dataToSave: RoomType = (roomSnap.data() as RoomType);
    dataToSave.impressions[commentData.score] += 1;
    await updateDoc(doc(this.db, 'rooms', roomSnap.ref.id), {
      impressions: dataToSave.impressions
    });
    return true;
  }
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;
