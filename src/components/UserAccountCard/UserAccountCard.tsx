import { ReactElement, useEffect } from "react";
import { Field, FieldMetaState, Form } from 'react-final-form';
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "src/redux/Store";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import FormData from "./Types";
import styles from './UserAccountCard.module.scss';
import validate from './validate';

const UserAccount = (): ReactElement => {
  const dispatch = useDispatch();

  const uid = useSelector((state: AppState) => state.Authentication.user.uid) as string;
  const userName = useSelector((state: AppState) => state.Authentication.user.name) as string;
  const userSurname = useSelector((state: AppState) => state.Authentication.user.surname) as string;
  const userEmail = useSelector((state:AppState) => state.Authentication.user.email) as string;
  
  const handleFormSubmit = (values: FormData) => {
    if (values.name && values.name !== userName) {
      dispatch({ type: 'CHANGE_USER_NAME', payload: {
        id: uid,
        userName: values.name 
      }});
    }
    if (values.surname && values.surname !== userSurname) {
      dispatch({ type: 'CHANGE_USER_SURNAME', payload: {
        id: uid,
        userSurname: values.surname 
      }});
    }
    if (values.email && values.email !== userEmail) {
      dispatch({ type: 'CHANGE_EMAIL', payload: values.email });
    }
    if (values.password) {
      dispatch({ type: 'CHANGE_PASSWORD', payload: values.password });
    }
  };

  const validationBlock = (meta: FieldMetaState<any>) => {
    return (
      meta.error &&
      meta.touched && <span className={styles.error}>{meta.error}</span>
    );
  };

  return (
    <div className={styles.userAccountCard}>
      <h1 className={styles.title}>Личный кабинет</h1>
      <Form onSubmit={handleFormSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.fieldTitle}>Имя</h3>
            <Field name="name">
              {({ input }) => (
                <>
                  <TextField {...input} placeholder={userName} />
                </>
              )}
            </Field>
            
            <h3 className={styles.fieldTitle}>Фамилия</h3>
            <Field name="surname">
              {({ input }) => (
                <>
                  <TextField {...input} placeholder={userSurname} />
                </>
              )}
            </Field>
            
            <h3 className={styles.fieldTitle}>Email</h3>
            <Field name="email">
                {({ input, meta }) => (
                <>
                    <TextField {...input} 
                      placeholder={userEmail}
                      autoComplete="off"
                    />
                    {validationBlock(meta)}
                </>
                )}
            </Field>
            
            <h3 className={styles.fieldTitle}>Пароль</h3>
            <Field name="password">
                {({ input, meta }) => (
                <>
                    <TextField
                    {...input}
                    type="password"
                    autoComplete="off"
                    placeholder="Новый пароль"
                    />
                    {validationBlock(meta)}
                </>
                )}
            </Field>

            <div className={styles.buttonContainer}>
              <Button
                theme="filled"
                //isDisabled={submitting}
                type="submit"
                text="Сохранить изменения"
              />
            </div>
          </form>
        )}
      </Form>
    </div>
  );
}

export default UserAccount;