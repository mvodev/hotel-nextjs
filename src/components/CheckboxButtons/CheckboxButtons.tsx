import { useState } from 'react';
import CheckboxItem from '../CheckboxItem/CheckboxItem';
import CheckboxButtonsType from './Types';
import style from './CheckboxButtons.module.sass';

const CheckboxButtons = (props: CheckboxButtonsType): React.ReactElement => {
  const { isRich = false, title = '', items } = props;

  const [checkboxItems, setCheckboxItems] = useState(items);

  const handleItemClick = (id: number): void => {
    const newState = checkboxItems.slice(0);
    newState[id].checked = !newState[id].checked;
    setCheckboxItems(newState);
  };

  const titleElement = <h2 className={style.checkboxButtonsTitle}>{title}</h2>;
  const getItemsList = checkboxItems.map((item, index) => (
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
      <ul className={style.checkboxButtonsItems}>{getItemsList}</ul>
    </div>
  );
};

export default CheckboxButtons;
