import type DropdownGuestsProps from '../DropdownGuests/Types';
import type DateDropdownType from '../DateDropdown/Types';
import type { TypeRangeSliderProps } from '../RangeSlider/Types';
import type CheckboxButtonsType from '../CheckboxButtons/Types';
import type DropdownRoomProps from '../DropdownRoom/Types';

type FiltersType = {
  dateDropdown: DateDropdownType;
  dropdownGuests: DropdownGuestsProps;
  rangeSlider: TypeRangeSliderProps;
  checkboxButtons: CheckboxButtonsType;
  richCheckboxButtons: CheckboxButtonsType;
  dropdownRoom: DropdownRoomProps;
  expandableList: CheckboxButtonsType;
};

export default FiltersType;
