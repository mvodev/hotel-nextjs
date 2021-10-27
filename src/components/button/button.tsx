import styles from './button.module.scss';

interface IButton {
  type?: string;
  text?: string;
  isDisabled?: boolean;
  theme?: string;
  size?: string;
  color?: string;
  link?: string;
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
}: IButton): JSX.Element => {
  const themes: IModifiers = {
    filled: styles.button_theme_filled,
    bordered: styles.button_theme_bordered,
  };
  const colors: IModifiers = { darkestGray: styles.button_color_darkest_gray };
  const sizes: IModifiers = { small: styles.button_size_small };
  const modifiedType = type === 'submit' ? 'submit' : 'button';

  const classes = [styles.button, themes[theme], colors[color], sizes[size]];
  const classesString = classes.filter((classItem) => classItem).join(' ');

  if (link) {
    return (
      <a className={classesString} href={link}>
        {text}
      </a>
    );
  }

  return (
    <button className={classesString} type={modifiedType} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
