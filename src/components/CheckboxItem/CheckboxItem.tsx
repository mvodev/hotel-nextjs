/* eslint-disable jsx-a11y/no-static-element-interactions */
import { KeyboardEvent } from 'react';
import CheckboxItemType from './Type';
import style from './CheckboxItem.module.sass';

const CheckboxItem = (props: CheckboxItemType): React.ReactElement => {
  const {
    id,
    isRich = false,
    title = '',
    text,
    checked = false,
    onClick,
  } = props;

  const titleElement = title ? (
    <h3 className={style.checkboxItemTitle}>{title}</h3>
  ) : (
    ''
  );

  const itemClass = `${style.checkboxItem} ${
    isRich ? style.checkboxItemRich : style.checkboxItemNormal
  }`;

  const checkboxClass = `${style.checkboxItemCheckbox} ${
    checked ? style.checkboxItemCheckboxChecked : ''
  }`;

  const handleCheckboxItemClick = () => {
    onClick(id);
  };

  const handleCheckboxItemKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Enter') onClick(id);
  };

  return (
    <div
      className={itemClass}
      onClick={handleCheckboxItemClick}
      onKeyDown={handleCheckboxItemKeyDown}
    >
      <div className={checkboxClass} />
      <div className={style.checkboxItemLabel}>
        {titleElement}
        <p className={style.checkboxItemText}>{text}</p>
      </div>
    </div>
  );
};

export default CheckboxItem;
