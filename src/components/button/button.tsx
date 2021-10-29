import Link from 'next/link';
import styles from './button.module.scss';

interface IButton {
  type?: string;
  text?: string;
  isDisabled?: boolean;
  theme?: string;
  size?: string;
  color?: string;
  link?: string;
  callback?: () => void;
}

interface IModifiers {
  [key: string]: string;
}

const Button = ({
  type = '',
  text = 'click me',
  isDisabled = false,
  theme = '',
  size = '',
  color = '',
  link,
  callback,
}: IButton): JSX.Element => {
  const themes: IModifiers = {
    filled: styles.button_theme_filled,
    bordered: styles.button_theme_bordered,
    rounded: styles.button_theme_rounded,
  };
  const colors: IModifiers = { darkestGray: styles.button_color_darkest_gray };
  const sizes: IModifiers = {
    small: styles.button_size_small,
    fixed: styles.button_size_fixed,
  };
  const modifiedType = type === 'submit' ? 'submit' : 'button';

  const classes = [styles.button, themes[theme], colors[color], sizes[size]];
  const classesString = classes.filter((classItem) => classItem).join(' ');

  const handleButtonClick = (): void => {
    if (callback) {
      callback();
    }
  };

  if (link) {
    return (
      <Link href={link}>
        <a className={classesString}>{text}</a>
      </Link>
    );
  }

  return (
    <button
      className={classesString}
      type={modifiedType}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
