import { useState } from 'react';

import CheckboxButtonsType from './Types';
import style from './CheckboxButtons.module.sass';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const CheckboxButtons = ({
  isRich = false,
  title = '',
  items,
}: CheckboxButtonsType): React.ReactElement => {
  const [checkboxItems, setCheckboxItems] = useState(items);

  const handleItemClick = (id: number, checked: boolean): void => {
    checkboxItems[id].checked = checked;
    setCheckboxItems([...checkboxItems]);
  };

  const titleElement = <h2 className={style.checkboxButtonsTitle}>{title}</h2>;
  const itemsList = checkboxItems.map((item, index) => (
    <li key={item.text}>
      <CheckboxItem
        id={index}
        isRich={isRich}
        title={item.title}
        text={item.text}
        checked={item.checked}
        onClick={handleItemClick}
      />
    </li>
  ));

  return (
    <div className={style.checkboxButtons}>
      {title ? titleElement : ''}
      <ul className={style.checkboxButtonsItems}>{itemsList}</ul>
    </div>
  );
};

export default CheckboxButtons;
