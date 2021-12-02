const functions = require("firebase-functions");
const {
  getFirestore, query, getDocs, collection,
} = require("firebase/firestore");
const {initializeApp} = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBCKidrAaH_xAzc-QdlLrY-hkUHqJeijIA",
  authDomain: "breaking-code-ebe74.firebaseapp.com",
  databaseURL: "https://breaking-code-ebe74-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "breaking-code-ebe74",
  storageBucket: "breaking-code-ebe74.appspot.com",
  messagingSenderId: "770591862991",
  appId: "1:770591862991:web:4dea4eda027fcf69ef07ba",
  measurementId: "G-42H384R7P3",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

const filterRoom = (item, filters) => {
  const inPricesRange = (item.price >= filters.price[0]) &&
    (item.price <= filters.price[1]);
  if (!inPricesRange) return false;

  if (item.maxGuests < (filters.guests.adult + filters.guests.child)) {
    return false;
  }

  if (filters.dates != [null, null]) {
    for (let i = 0; i < item.bookedDays.length; i += 1) {
      const date = new Date(item.bookedDays[i].seconds * 1000);
      if (
        (date >= filters.dates[0]) &&
        (date <= filters.dates[1])
      ) return false;
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
  ) return false;

  if (
    filters.additionalConvenience.haveBreakfast.checked && !item.haveBreakfast
  ) return false;
  if (filters.additionalConvenience.haveCrib.checked && !item.haveCrib) {
    return false;
  }
  if (filters.additionalConvenience.haveDesk.checked && !item.haveDesk) {
    return false;
  }
  if (
    filters.additionalConvenience.haveFeedingChair.checked &&
      !item.haveFeedingChair
  ) return false;
  if (filters.additionalConvenience.haveShampoo.checked && !item.haveShampoo) {
    return false;
  }
  if (filters.additionalConvenience.haveTV.checked && !item.haveTV) {
    return false;
  }

  return true;
};

exports.getRooms = functions
    .region("europe-west")
    .https.onCall(({filters, page, itemsOnPage}) => {
      const roomsQuery = query(collection(firestore, "rooms"));
      const rooms = [];

      const selectionOfRooms = getDocs(roomsQuery)
          .then((result) => result.forEach((item) => {
            rooms.push({roomID: item.id, ...item.data()});
          })).then(() => {
            const filtredRooms = rooms.filter((item) => {
              return filterRoom(item, filters);
            });

            return {
              rooms: filtredRooms.slice(
                  ((itemsOnPage * page) - itemsOnPage), (itemsOnPage * page),
              ),
              esultsNumber: filtredRooms.length,
              page,
              pagesNumber: Math.ceil(filtredRooms.length / itemsOnPage),
            };
          });

      return selectionOfRooms;
    });
