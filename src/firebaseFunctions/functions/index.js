const admin = require("firebase-admin");
admin.initializeApp();

const getRooms = require("./AddRooms");
const addBook = require("./AddBook");

exports.getRooms = getRooms.getRooms;
exports.addBook = addBook.addBook;
