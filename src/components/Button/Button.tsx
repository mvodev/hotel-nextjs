import Link from 'next/link';
import styles from './Button.module.scss';
import { ButtonModifiers, ButtonProps } from './Types';

const Button = ({
  type,
  text = 'click me',
  isDisabled = false,
  theme,
  size,
  link,
  onClick,
}: ButtonProps): JSX.Element => {
  const themes: ButtonModifiers = {
    filled: styles.buttonThemeFilled,
    bordered: styles.buttonThemeBordered,
    rounded: styles.buttonThemeRounded,
  };

  const sizes: ButtonModifiers = {
    small: styles.buttonSizeSmall,
    fixed: styles.buttonSizeFixed,
  };

  const classes = [styles.button, themes[theme || ''], sizes[size || '']];
  const classesString = classes.join(' ');

  const handleButtonClick = (): void => {
    if (onClick) {
      onClick();
    }
  };
  const button = link ? (
    <Link href={link}>
      <a className={classesString}>{text}</a>
    </Link>
  ) : (
    <button
      className={classesString}
      type={type}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );

  return button;
};

export default Button;
