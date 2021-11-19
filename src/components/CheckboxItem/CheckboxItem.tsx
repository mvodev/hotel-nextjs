/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChangeEvent } from 'react';
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

  const imitatorClass = `${style.checkboxItemImitator} ${
    checked ? style.checkboxItemImitatorChecked : ''
  }`;

  const handleCheckboxChange = (event: ChangeEvent) => {
    onClick(id, (event.currentTarget as HTMLInputElement).checked);
  };

  return (
    <label
      className={itemClass}
      tabIndex = {0}
    >
      <span className = { imitatorClass }>
        <input 
          className={ style.checkboxItemCheckbox } 
          onChange = { handleCheckboxChange }
          type = "checkbox"
          checked = {checked}
        />
      </span>
      <div className={style.checkboxItemLabel}>
        {titleElement}
        <p className={style.checkboxItemText}>{text}</p>
      </div>
    </label>
  );
};

export default CheckboxItem;
