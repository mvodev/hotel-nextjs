type ButtonProps = {
  type?: 'button' | 'submit';
  text?: string;
  isDisabled?: boolean;
  theme?: 'filled' | 'bordered' | 'rounded';
  size?: 'small' | 'fixed';
  link?: string;
  onClick?: () => void;
};

type ButtonModifiers = Record<string, string>;

export type { ButtonProps, ButtonModifiers };
