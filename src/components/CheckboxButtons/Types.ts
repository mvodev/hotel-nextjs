type CheckboxButtonItemType = {
  text: string;
  title?: string;
  checked?: boolean;
};

type CheckboxButtonsType = {
  isRich?: boolean;
  title?: string;
  items: CheckboxButtonItemType[];
};

export default CheckboxButtonsType;

export type { CheckboxButtonItemType };
