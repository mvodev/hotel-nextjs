import React, { useState, ChangeEvent } from 'react';

import TextField from '../TextField/TextField';
import styles from './SubTextField.module.sass';

const SubTextField = (): React.ReactElement => {
  const [email, changeEmail] = useState('');
  const [isFocus, toggleFocus] = useState(false);
  const [isHover, toggleHover] = useState(false);

  return (
    <div
      className={[
        styles.subTextField,
        isHover || isFocus ? styles.subTextFieldActive : '',
      ].join(' ')}
      onPointerOver={() => toggleHover(true)}
      onPointerOut={() => toggleHover(false)}
    >
      <TextField
        className={styles.input}
        value={email}
        type='email'
        placeholder='Email'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          changeEmail(e.target.value)
        }
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
      />
      <button
        className={styles.button}
        type='button'
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
      >
        <svg
          className={styles.icon}
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          opacity='0.7'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            className={styles.arrow}
            d='M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z'
            fill='url(#sub-text-field-arrow-focus)'
          />
          <defs>
            <linearGradient
              id='sub-text-field-arrow-focus'
              x1='9'
              y1='-13'
              x2='9'
              y2='31'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#BC9CFF' />
              <stop offset='1' stopColor='#8BA4F9' />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default SubTextField;
