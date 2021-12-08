/* eslint-disable arrow-body-style */

import React from 'react';
import { Field, FieldMetaState, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLOSE_MODAL_WINDOW,
  SUBMIT_FORM,
} from 'src/redux/Registration/Types';
import { AppState } from 'src/redux/Store';
import Button from '../Button/Button';
import DateTextField from '../DateTextField/DateTextField';
import ModalWindow from '../ModalWindow/ModalWindow';
import RadioButtons from '../RadioButtons/RadioButtons';
import TextField from '../TextField/TextField';
import Toggle from '../Toggle/Toggle';
import styles from './RegistrationCard.module.scss';
import FormData from './Types';
import validate from './validate';

const RegistrationCard = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { submitting, modalWindow } = {
    ...useSelector((state: AppState) => state.Registration),
  };

  const handleFormSubmit = (values: FormData) => {
    dispatch({ type: SUBMIT_FORM, payload: values });
  };

  const validationBlock = (meta: FieldMetaState<any>) => {
    return (
      meta.error &&
      meta.touched && <span className={styles.error}>{meta.error}</span>
    );
  };

  const modal = modalWindow.isEnabled ? (
    <ModalWindow
      {...modalWindow}
      handleCloseClick={() => dispatch({ type: CLOSE_MODAL_WINDOW })}
    />
  ) : null;

  return (
    <div className={styles.registrationCard}>
      <h1 className={styles.title}>Регистрация аккаунта</h1>
      <Form onSubmit={handleFormSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field name="name">
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder="Имя" />
                  {validationBlock(meta)}
                </>
              )}
            </Field>

            <Field name="surname">
              {({ input, meta }) => (
                <>
                  <TextField {...input} placeholder="Фамилия" />
                  {validationBlock(meta)}
                </>
              )}
            </Field>

            <Field name="gender" type="radio" initialValue="man">
              {(props) => (
                <RadioButtons
                  groupName={props.input.name}
                  onChange={props.input.onChange}
                  items={[
                    {
                      text: "Мужчина",
                      value: "man",
                      checked: true,
                    },
                    {
                      text: "Женщина",
                      value: "woman",
                      checked: false,
                    },
                  ]}
                />
              )}
            </Field>

            <div className={styles.group}>
              <h3 className={styles.groupTitle}>дата рождения</h3>
              <div className={styles.groupItems}>
                <Field name="birthday">
                  {({ input, meta }) => (
                    <>
                      <DateTextField {...input} />
                      {validationBlock(meta)}
                    </>
                  )}
                </Field>
              </div>
            </div>

            <div className={styles.group}>
              <h3 className={styles.groupTitle}>данные для входа в сервис</h3>
              <div className={styles.groupItems}>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <TextField {...input} placeholder="email" />
                      {validationBlock(meta)}
                    </>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <>
                      <TextField
                        {...input}
                        type="password"
                        placeholder="Пароль"
                      />
                      {validationBlock(meta)}
                    </>
                  )}
                </Field>

                <Field name="specialOffers" type="checkbox" initialValue>
                  {(props) => (
                    <Toggle
                      description="Получать спецпредложения"
                      name={props.input.name}
                      onChange={props.input.onChange}
                      isChecked
                    />
                  )}
                </Field>
              </div>
            </div>

            <div className={styles.registrationButtonContainer}>
              <Button
                theme="filled"
                isDisabled={submitting}
                type="submit"
                text="Зарегистрироваться"
              />
            </div>

            <div className={styles.signInSection}>
              <span className={styles.text}>Уже есть аккаунт на Toxin</span>
              <div className={styles.signInButtonContainer}>
                <Button theme="bordered" link="/signIn" text="Войти" />
              </div>
            </div>
          </form>
        )}
      </Form>
      {modal}
    </div>
  );
};

export default RegistrationCard;
