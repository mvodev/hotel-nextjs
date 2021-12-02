type DropdownRoomValue = {
  text: string;
  value: number;
  spellCases: Array<string>;
};

type DropdownRoomProps = {
  placeholder: string;
  values: Array<DropdownRoomValue>;
  handleCountersChange?: (valus: DropdownRoomValue[]) => void;
};

export type { DropdownRoomValue };

export default DropdownRoomProps;
