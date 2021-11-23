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
<<<<<<< HEAD
      <Button text="войти" type="submit" theme="filled" />
=======
      <Button text='войти' type='submit' theme='filled' />
>>>>>>> 73e69d4 (added signIn page)
    </div>
    <div className={styles.regSection}>
      <span className={styles.regSectionSign}>Нет аккаунта на Toxin?</span>
      <div className={styles.regSectionButton}>
<<<<<<< HEAD
        <Button link="/registration" theme="bordered" text="создать" />
=======
        <Button link='/reg' theme='bordered' text='создать' />
>>>>>>> 73e69d4 (added signIn page)
      </div>
    </div>
  </form>
);

export default SignInCard;
