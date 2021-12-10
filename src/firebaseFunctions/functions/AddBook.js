const functions = require("firebase-functions");
const cors = require("cors");
const admin = require("firebase-admin");
const db = admin.firestore();

const checkDates = (dates, bookedDays) => {
  for (let i = 0; i < bookedDays.length; i += 1) {
    const date = new Date(bookedDays[i].seconds * 1000);
    if (
      (date >= new Date(dates[0])) &&
      (date <= new Date(dates[1]))
    ) return false;
  }

  return true;
};

const getNewBookedDays = (dates, bookedDays) => {
  const newBookedDays = bookedDays.slice(0);
  for (let i = new Date(dates[0]); i <= dates[1]; i.setDate(i.getDate() + 1)) {
    newBookedDays.push(new Date(i));
  }
  return newBookedDays;
};

exports.addBook = functions.region("europe-west3")
    .https.onRequest((req, res) => {
      const {userID, roomID, dates} =JSON.parse(req.body);
      const transformedDates = dates.map((item) => new Date(item));

      db.doc(`rooms/${roomID}`).get().then((doc) => {
        const room = doc.data();

        if (checkDates(transformedDates, room.bookedDays)) {
          db.collection("bookingList").add({
            dates: transformedDates, 
            roomID, 
            userID
          })
            .then(() => {
                db.doc(`rooms/${roomID}`)
                    .update({bookedDays: getNewBookedDays(transformedDates, room.bookedDays)})
                    .then(() => {
                      cors()(req, res, () => {
                        return res.send({
                          isBooked: true,
                          massage: "Номер забронирован",
                        });
                      });
                    })
                    .catch((e) => {
                      cors()(req, res, () => {
                        return res.send({
                          isBooked: false,
                          massage: "Ошибка при добавлении дат в данные номера",
                        });
                      });
                    });
            })
            .catch((error) => {
              console.log(error)
              cors()(req, res, () => {
                return res.send({
                  isBooked: false, 
                  massage: "Ошибка при добавленнии брони в список бронирования"
                });
              });
            });
        } else {
          cors()(req, res, () => {
            return res.send({
              isBooked: false,
              massage: "Данный номер только что был забронирован кемто другим",
            });
          });
        } 
      });
    });
