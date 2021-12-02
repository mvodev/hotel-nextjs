import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Field, Form, FieldMetaState } from 'react-final-form';
import TextField from 'src/components/TextField/TextField';
import Button from 'src/components/Button/Button';
import { submitForm } from 'src/redux/SignInCard/SignInCardActions';
import FormData from './Types';
import { RootState } from '../../redux/reduces';
import styles from './SignInCard.module.scss';
import validate from './validate';

const SignInCard = (): React.ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { submitting } = {
    ...useSelector((state: RootState) => state.signInCardReducer),
  };

  const { error } = {
    ...useSelector((state: RootState) => state.signInCardReducer),
  };

  const { isAuthenticated } = {
    ...useSelector((state: RootState) => state.signInCardReducer),
  };

  useEffect(()=>{
    if(isAuthenticated){
      router.push('/');
    }
  });

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
            <Field name='email'>
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder='Email' />
                  {validationBlock(meta)}
                </>
              )}
            </Field>
            <Field name='password'>
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder='Пароль' type='password'/>
                  {validationBlock(meta)}
                </>
              )}
            </Field>
            <span style={error ? { display: 'block' } : { display: 'none' }}>
              Некорректное имя пользователя/пароль.
            </span>
            <div className={styles.signInCardButtonContainer}>
              <Button
                theme='filled'
                isDisabled={submitting}
                type='submit'
                text='Войти'
              />
            </div>
            <div className={styles.signInCardBottomSection}>
              <span className={styles.text}>Нет аккаунта на Toxin?</span>
              <div className={styles.signInCardBorderContainer}>
                <Button theme='bordered' link='/' text='Создать' />
              </div>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default SignInCard;
