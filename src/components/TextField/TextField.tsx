import styles from './TextField.module.sass';

const TextField = (
  props: React.InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => <input className={styles.textField} {...props} />;

export default TextField;
