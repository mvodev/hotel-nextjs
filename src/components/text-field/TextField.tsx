import styles from './text-field.module.sass';

const TextField = (
  props: React.InputHTMLAttributes<HTMLInputElement>
): React.ReactElement => <input className={styles['text-field']} {...props} />;

export default TextField;
