type CheckboxButtonItemType = {
  text: string;
  checked: boolean;
  title?: string;
};

type CheckboxButtonsType = {
  items: CheckboxButtonItemType[];
  isRich?: boolean;
  title?: string;
  handleItemChange?: (items: CheckboxButtonItemType[]) => void
};

export default CheckboxButtonsType;

export type { CheckboxButtonItemType };
