import { useDispatch, useSelector } from 'react-redux';
import { Field, Form, FieldMetaState } from 'react-final-form';
import TextField from 'src/components/TextField/TextField';
import Button from 'src/components/Button/Button';
import { setModalWindow, submitForm } from 'src/redux/SignInCard/SignInCardActions';
import { AppState } from 'src/redux/Store';
import ModalWindow from '../ModalWindow/ModalWindow';
import FormData from './Types';
import styles from './SignInCard.module.scss';
import validate from './validate';

const SignInCard = (): React.ReactElement => {

  const dispatch = useDispatch();

  const { submitting, error, success } = {...useSelector((state: AppState) => state.signInCardReducer)};

  const handleModalWindowClose = ()=>{
    dispatch(setModalWindow(false));
  }
  
  const modalWindow = success ? 
    <ModalWindow 
      title="Вы авторизованы!" 
      text="Вы успешно авторизовались на сайте Toxin. Через 5 секунд вы будете автоматически перенаправлены на главную страницу."
      isEnabled
      handleCloseClick={handleModalWindowClose}
      />
    : null;

  const validationBlock = (meta: FieldMetaState<unknown>) => (
      meta.error &&
      meta.touched && <span className={styles.signInCardError}>{meta.error}</span>
    );

  const handleFormSubmit = (values: FormData) => {
    dispatch(submitForm(values));
  };

  return (
    <div className={styles.signInCard}>
      <h1 className={styles.signInCardTitle}>Войти</h1>
      <Form onSubmit={handleFormSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form className={styles.signInCardForm} onSubmit={handleSubmit}>
            <Field name="email">
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder="Email" />
                  {validationBlock(meta)}
                </>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder="Пароль" type="password"/>
                  {validationBlock(meta)}
                </>
              )}
            </Field>
            <span className={styles.signInCardError} style={error ? { display: "block"} : {}}>
              Некорректное имя пользователя/пароль.
            </span>
            <div className={styles.signInCardButtonContainer}>
              <Button
                theme="filled"
                isDisabled={submitting}
                type="submit"
                text="Войти"
              />
            </div>
            <div className={styles.signInCardBottomSection}>
              <span className={styles.text}>Нет аккаунта на Toxin?</span>
              <div className={styles.signInCardBorderContainer}>
                <Button theme="bordered" link="/registration" text="Создать" />
              </div>
            </div>
          </form>
        )}
      </Form>
      {modalWindow}
    </div>
  );
};

export default SignInCard;
