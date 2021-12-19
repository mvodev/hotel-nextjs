import { Field, FieldMetaState, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { SET_REVIEW_FORM_RESET, SUBMIT_REVIEW } from 'src/redux/Review/Types';
import { AppState } from 'src/redux/Store';
import { useEffect, useRef } from 'react';
import styles from './ReviewForm.module.scss';
import Button from '../Button/Button';
import ImpressionsRadio from './ImpressionsRadio/ImpressionsRadio';
import ReviewData from './Types';
import validate from './validate';

const ReviewForm = (): React.ReactElement => {
  const roomID = useSelector((state: AppState) => state.CurrentRoom.roomID);
  const user = useSelector((state: AppState) => state.Authentication.user);
  const { isSubmitting, isReset } = {
    ...useSelector((state: AppState) => state.review),
  };
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isReset && formRef.current) {
      const form = formRef.current;
      form.reset();
      dispatch({ type: SET_REVIEW_FORM_RESET, payload: false });
    }
  });

  const handleFormSubmit = (values: ReviewData) => {
    const reviewData = {
      uid: user.uid,
      roomID,
      score: values.impression,
      text: values.review,
      userName: user.name,
    };
    dispatch({ type: SUBMIT_REVIEW, payload: reviewData });
  };

  const validationBlock = (meta: FieldMetaState<any>) =>
    meta.error &&
    meta.touched && <span className={styles.error}>{meta.error}</span>;

  return (
    <section className={styles.reviewForm}>
      <h2 className={styles.title}>Оставьте свой отзыв об этом номере</h2>
      <Form onSubmit={handleFormSubmit} validate={validate}>
        {({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
            <Field name='review'>
              {({ input, meta }) => (
                <>
                  <textarea
                    className={styles.textarea}
                    placeholder='Ваш отзыв'
                    {...input}
                  />
                  {validationBlock(meta)}
                </>
              )}
            </Field>

            <Field name='impression' type='radio'>
              {({ input, meta }) => (
                <>
                  <ImpressionsRadio
                    name={input.name}
                    onChange={input.onChange}
                  />
                  {validationBlock(meta)}
                </>
              )}
            </Field>

            <div className={styles.submitContainer}>
              <Button
                type='submit'
                theme='filled'
                text='Оставить отзыв'
                isDisabled={isSubmitting}
              />
            </div>
          </form>
        )}
      </Form>
    </section>
  );
};

export default ReviewForm;
