import { useDispatch, useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';
import TextField from 'src/components/TextField/TextField';
import Button from 'src/components/Button/Button';
import { SUBMIT_FORM } from 'src/redux/RegistrationCard/Types';
import FormData from './Types';
import { RootState } from '../../redux/reduces';
import styles from './SignInCard.module.scss';

const SignInCard = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { submitting } = {
    ...useSelector((state: RootState) => state.registrationCard),
  };

  const handleFormSubmit = (values: FormData) => {
    const formData = { ...values };
    dispatch({ type: SUBMIT_FORM, payload: formData });
  };

  return (
    <div className={styles.signInCard}>
      <h1 className={styles.signInCardTitle}>Войти</h1>
      <Form onSubmit={handleFormSubmit}>
        {({ handleSubmit }) => (
          <form className={styles.signInCardForm} onSubmit={handleSubmit}>
            <Field name='name'>
              {(props) => (
                <TextField
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder='Имя'
                />
              )}
            </Field>
            <Field name='surname'>
              {(props) => (
                <TextField
                  name={props.input.name}
                  value={props.input.value}
                  onChange={props.input.onChange}
                  placeholder='Фамилия'
                />
              )}
            </Field>
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
                <Button theme='bordered' link='./registration' text='Создать' />
              </div>
            </div>
          </form>
        )}
      </Form>
    </div>
  );
};

export default SignInCard;
