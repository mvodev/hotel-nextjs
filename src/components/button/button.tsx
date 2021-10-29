import Link from 'next/link';
import styles from './button.module.scss';

type ButtonType  = {
  type: 'button' | 'submit';
  text?: string;
  isDisabled?: boolean;
  theme?: string;
  size?: string;
  color?: string;
  link?: string;
  onClick?: () => void;
}
type Modifiers = Record<string, string>

const Button = ({
  type,
  text = 'click me',
  isDisabled = false,
  theme = '',
  size = '',
  color = '',
  link,
  onClick,
}: ButtonType): JSX.Element => {
  const themes: Modifiers = {
    filled: styles.button_theme_filled,
    bordered: styles.button_theme_bordered,
    rounded: styles.button_theme_rounded,
  };
  const colors: Modifiers = { darkestGray: styles['button_color_darkest-gray'] };
  const sizes: Modifiers = {
    small: styles.button_size_small,
    fixed: styles.button_size_fixed,
  };

  const classes = [styles.button, themes[theme], colors[color], sizes[size]];
  const classesString = classes.filter((classItem) => classItem).join(' ');

  const handleButtonClick = (): void => {
    if (onClick) {
      onClick();
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
      type={type}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
