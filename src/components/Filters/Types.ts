import type DropdownGuestsProps from '../DropdownGuests/Types';
import type DateDropdownType from '../DateDropdown/Types';
import type CheckboxButtonsType from '../CheckboxButtons/Types';

type FiltersType = {
  dateDropdown: DateDropdownType;
  dropdownGuests: DropdownGuestsProps;
  checkboxButtons: CheckboxButtonsType;
  richCheckboxButtons: CheckboxButtonsType;
  expandableList: CheckboxButtonsType;
};

export default FiltersType;
