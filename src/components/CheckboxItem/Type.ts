type CheckboxItemType = {
  id: number;
  text: string;
  checked: boolean;
  onClick: (id: number, checked: boolean) => void;
  isRich?: boolean;
  title?: string;
};

export default CheckboxItemType;
