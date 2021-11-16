type DropdownRoomValue = {
  text: string;
  value: number;
  spellCases: Array<string>;
}

type DropdownRoomProps = {
  placeholder: string;
  values: Array<DropdownRoomValue>;
}

export default DropdownRoomProps;
