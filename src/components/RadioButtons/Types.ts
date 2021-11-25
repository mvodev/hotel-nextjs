type RadioButtonsItemType = {
  id: number;
  text: string;
  value: string;
  checked: boolean;
};

type RadioButtonsType = {
  groupName: string;
  items: Array<RadioButtonsItemType>;
};

export default RadioButtonsType;
