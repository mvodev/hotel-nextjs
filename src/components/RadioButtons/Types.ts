import { InputHTMLAttributes } from "react";

type RadioButtonsItemType = {
  id: number;
  text: string;
  value: string;
  checked: boolean;
};

type RadioButtonsType = {
  groupName: string;
  items: Array<RadioButtonsItemType>;
  props: InputHTMLAttributes<HTMLInputElement>
};

export default RadioButtonsType;
