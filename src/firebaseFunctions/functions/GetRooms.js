const functions = require("firebase-functions");
const cors = require("cors");
const admin = require("firebase-admin");
const db = admin.firestore();

const filterRoom = (item, filters) => {
  const inPricesRange =
    ((item.price >= filters.price.from) && (item.price <= filters.price.to));
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

exports.getRooms = functions.region("europe-west3")
    .https.onRequest((req, res) => {
      const roomsQuery = db.collection("rooms");
      roomsQuery.get().then((docs) => {
        const {filters, page, itemsOnPage} =JSON.parse(req.body);
        const rooms = [];
        docs.forEach((doc) => rooms.push({roomID: doc.id, ...doc.data()}));

        const filtredRooms = rooms.filter((item) => {
          return filterRoom(item, filters);
        });

        const result = {
          rooms: filtredRooms.slice(
              ((itemsOnPage * page) - itemsOnPage),
              (itemsOnPage * page),
          ),
          resultsNumber: filtredRooms.length,
          page,
          pagesNumber: Math.ceil(filtredRooms.length / itemsOnPage),
        };

        cors()(req, res, () => {
          return res.send(result);
        });
      });
    });
