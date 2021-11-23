import TextField from 'src/components/TextField/TextField';
import Button from 'src/components/Button/Button';

import styles from './SignInCard.module.sass';

const SignInCard = (): JSX.Element => (
  <form className={styles.signInCard}>
    <h1 className={styles.title}>Войти</h1>
    <div className={styles.inputsContainer}>
      <TextField placeholder="Email" type="email" />
      <TextField placeholder="Пароль" type="password" required />
    </div>
    <div className={styles.bigButton}>
      <Button text="войти" type="submit" theme="filled" />
    </div>
    <div className={styles.regSection}>
      <span className={styles.regSectionSign}>Нет аккаунта на Toxin?</span>
      <div className={styles.regSectionButton}>
        <Button link="/reg" theme="bordered" text="создать" />
      </div>
    </div>
  </form>
);

export default SignInCard;
