import { useState, useEffect } from 'react';

import CheckboxItem from 'src/components/CheckboxItem/CheckboxItem';

import CheckboxButtonsType, { CheckboxButtonItemType } from './Types';
import style from './CheckboxButtons.module.sass';

const CheckboxButtons = <T extends CheckboxButtonItemType>({
  isRich = false,
  title = '',
  items,
  handleItemChange = () => {},
}: CheckboxButtonsType<T>): React.ReactElement => {
  const [checkboxItems, setCheckboxItems] = useState(items);

  useEffect(() => setCheckboxItems(items), [items]);

  const handleItemClick = (id: number, checked: boolean): void => {
    const copy = checkboxItems.map((i, idx) =>
      idx === id ? { ...i, checked } : i
    );
    setCheckboxItems(copy);
    handleItemChange(copy);
  };

  const titleElement = <h2 className={style.checkboxButtonsTitle}>{title}</h2>;
  const itemsList = checkboxItems.map((item, index) => (
    <li key={item.text}>
      <CheckboxItem
        id={index}
        isRich={isRich}
        title={item?.title}
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
