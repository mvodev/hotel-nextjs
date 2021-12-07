type CheckboxButtonItemType = {
  text: string;
  checked: boolean;
  title?: string;
};

type CheckboxButtonsType<T extends CheckboxButtonItemType> = {
  items: T[];
  isRich?: boolean;
  title?: string;
  handleItemChange?: (items: T[]) => void;
};

export default CheckboxButtonsType;

export type { CheckboxButtonItemType };
