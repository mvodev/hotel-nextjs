type CheckboxItemType = {
  id: number;
  isRich: boolean;
  title: string;
  text: string;
  checked: boolean;
  onClick: (id: number) => void;
};

export default CheckboxItemType;
