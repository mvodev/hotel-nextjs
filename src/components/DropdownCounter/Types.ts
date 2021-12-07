type DropdownCounterProps<T extends string> = {
  text: string;
  number: number;
  onChange: (counter: number, type: string) => void;
  type: T;
};
export default DropdownCounterProps;
