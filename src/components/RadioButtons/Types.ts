<<<<<<< HEAD
import { InputHTMLAttributes } from "react";

type RadioButtonsItemType = {
=======
type RadioButtonsItemType = {
  id: number;
>>>>>>> 9235f54 (rebase???)
  text: string;
  value: string;
  checked: boolean;
};

type RadioButtonsType = {
  groupName: string;
  items: Array<RadioButtonsItemType>;
<<<<<<< HEAD
} & InputHTMLAttributes<HTMLInputElement>;
=======
};
>>>>>>> 9235f54 (rebase???)

export default RadioButtonsType;
