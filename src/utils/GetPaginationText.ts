import getPosInSpellCasesArray from './Utils';

const GetPaginationText = (
  roomsOnPage: number,
  roomsCount: number,
  activePage: number
): string => {
  const maxRoomOnPage = activePage * roomsOnPage;
  const startRoomCount = maxRoomOnPage - roomsOnPage + 1;
  const endRoomsCount =
    maxRoomOnPage <= roomsCount ? maxRoomOnPage : roomsCount;
  const roomsTotal = roomsCount > 100 ? '100+' : roomsCount;

  return `${startRoomCount} – ${endRoomsCount} из ${roomsTotal} ${
    ['варианта', 'вариантов', 'вариантов'][getPosInSpellCasesArray(roomsCount)]
  } аренды`;
};

export default GetPaginationText;
