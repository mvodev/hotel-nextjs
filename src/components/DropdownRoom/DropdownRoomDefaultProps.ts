const DropdownRoomDefaultProps = {
  placeholder: 'Выберите опции',
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
