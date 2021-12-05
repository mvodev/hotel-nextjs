import { getPosInSpellCasesArray } from './Utils';

const GetPaginationText = (
  roomsOnPage: number,
  roomsCount: number,
  activePage: number
): string => {
  const roundedNumbers: Record<number, number> = {
    3: 100,
    4: 1000,
    5: 10000,
    6: 100000,
    7: 1000000,
  };
  const maxRoomOnPage = activePage * roomsOnPage;
  const startRoomCount = maxRoomOnPage - roomsOnPage + 1;
  const endRoomsCount =
    maxRoomOnPage <= roomsCount ? maxRoomOnPage : roomsCount;
  const roomsTotal =
    roomsCount > 100
      ? `${roundedNumbers[roomsCount.toString().length]}+`
      : roomsCount;

  return `${startRoomCount} – ${endRoomsCount} из ${roomsTotal} ${
    ['варианта', 'вариантов', 'вариантов'][getPosInSpellCasesArray(roomsCount)]
  } аренды`;
};

export default GetPaginationText;
