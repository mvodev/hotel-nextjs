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
} from 'firebase/firestore';
import {
  UserDataType,
  UserType,
  RoomType,
  FiltersAPIType,
  ReturnedRoomType,
} from './Types';
import { FirebaseError } from '@firebase/util';

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

  public getRooms = async (
    filters: FiltersAPIType,
    page: number,
    itemsOnPage: number
  ) => {
    const roomsQuery = query(collection(this.db, 'rooms'));
    const rooms: ReturnedRoomType[] = [];
    const selectionOfRooms = getDocs(roomsQuery)
      .then((result) =>
        result.forEach((item) => {
          rooms.push({ roomID: item.id, ...item.data() } as ReturnedRoomType);
        })
      )
      .then(() => {
        const filtredRooms = rooms.filter((item) => {
          return this.filterRoom(item, filters);
        });

        return {
          rooms: filtredRooms.slice(
            itemsOnPage * page - itemsOnPage,
            itemsOnPage * page
          ),
          esultsNumber: filtredRooms.length,
          page,
          pagesNumber: Math.ceil(filtredRooms.length / itemsOnPage),
        };
      });
    return selectionOfRooms;
  };

  private filterRoom = (item: ReturnedRoomType, filters: FiltersAPIType) => {
    const inPricesRange =
      item.price >= filters.price[0] && item.price <= filters.price[1];
    if (!inPricesRange) return false;

    if (item.maxGuests < filters.guests.adult + filters.guests.child) {
      return false;
    }

    if (filters.dates[0] !== null) {
      for (let i = 0; i < item.bookedDays.length; i += 1) {
        const date = new Date(item.bookedDays[i].seconds * 1000);
        if (
          date >= (filters.dates[0] as Date) &&
          date <= (filters.dates[1] as Date)
        )
          return false;
      }
    }

    if (item.bedrooms < filters.conveniences.bedrooms.value) return false;
    if (item.beds < filters.conveniences.beds.value) return false;
    if (item.bathrooms < filters.conveniences.bathrooms.value) return false;

    if (filters.rules.maySmoking.checked && !item.maySmoking) return false;
    if (filters.rules.mayWithPets.checked && !item.mayWithPets) return false;
    if (filters.rules.mayInviteGuests.checked && !item.mayInviteGuests) {
      return false;
    }

    if (filters.availability.wideСorridor.checked && !item.wideСorridor) {
      return false;
    }
    if (
      filters.availability.assistantForDisabled.checked &&
      !item.assistantForDisabled
    )
      return false;

    if (
      filters.additionalConvenience.haveBreakfast.checked &&
      !item.haveBreakfast
    )
      return false;
    if (filters.additionalConvenience.haveCrib.checked && !item.haveCrib) {
      return false;
    }
    if (filters.additionalConvenience.haveDesk.checked && !item.haveDesk) {
      return false;
    }
    if (
      filters.additionalConvenience.haveFeedingChair.checked &&
      !item.haveFeedingChair
    )
      return false;
    if (
      filters.additionalConvenience.haveShampoo.checked &&
      !item.haveShampoo
    ) {
      return false;
    }
    if (filters.additionalConvenience.haveTV.checked && !item.haveTV) {
      return false;
    }

    return true;
  };
}

const firebaseAPI = new FirebaseAPI();

export default firebaseAPI;
