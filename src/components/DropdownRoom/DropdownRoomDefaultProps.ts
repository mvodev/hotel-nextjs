import DropdownRoomProps from './Types';

const DropdownRoomDefaultProps: DropdownRoomProps = {
  placeholder: 'Выберите удобства',
  values: [
    {
      text: 'Спальни',
      value: 2,
      spellCases: ['спальня', 'спальни', 'спален'],
    },
    {
      text: 'Кровати',
      value: 2,
      spellCases: ['кровать', 'кровати', 'кроватей'],
    },
    {
      text: 'Ванные комнаты',
      value: 0,
      spellCases: ['ванная', 'ванные', 'ванных'],
    },
  ],
};

export default DropdownRoomDefaultProps;
