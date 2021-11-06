type DropdownCounterProps = {
  text: string;
  number: number;
  onChange: (counter: number, type: string) => void;
  type: string;
};
export default DropdownCounterProps;