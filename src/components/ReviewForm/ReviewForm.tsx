import { useDispatch, useSelector } from 'react-redux';
import { SET_REVIEW_FORM_RESET, SUBMIT_REVIEW } from 'src/redux/Review/Types';
import { AppState } from 'src/redux/Store';
import { useEffect, useRef } from 'react';
import { useField, useForm } from 'react-final-form-hooks';
import styles from './ReviewForm.module.scss';
import Button from '../Button/Button';
import ImpressionsRadio from './ImpressionsRadio/ImpressionsRadio';
import ReviewData from './Types';
import validate from './validate';

const ReviewForm = (): React.ReactElement | null => {
  const roomID = useSelector((state: AppState) => state.CurrentRoom.roomID);
  const user = useSelector((state: AppState) => state.Authentication.user);
  const isRoomBookedByUser = useSelector(
    (state: AppState) => state.CurrentRoom.isRoomBookedByUser
  );
  const { isSubmitting, isReset } = {
    ...useSelector((state: AppState) => state.review),
  };
  const dispatch = useDispatch();

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

  const { form, handleSubmit } = useForm({
    onSubmit: handleFormSubmit,
    validate,
  });

  const review = useField('review', form);
  const impression = useField('impression', form);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isReset) {
      form.restart();
      formRef.current?.reset();
      dispatch({ type: SET_REVIEW_FORM_RESET, payload: false });
    }
  });

  return isRoomBookedByUser ? (
    <section className={styles.reviewForm}>
      <h2 className={styles.title}>Оставьте свой отзыв об этом номере</h2>

      <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <textarea
          {...review.input}
          className={styles.textarea}
          placeholder='Ваш отзыв'
        />
        {review.meta.touched && review.meta.error && (
          <span className={styles.error}>{review.meta.error}</span>
        )}

        <ImpressionsRadio
          name={impression.input.name}
          onChange={impression.input.onChange}
        />
        {impression.meta.touched && impression.meta.error && (
          <span className={styles.error}>{impression.meta.error}</span>
        )}

        <div className={styles.submitContainer}>
          <Button
            type='submit'
            theme='filled'
            text='Оставить отзыв'
            isDisabled={isSubmitting}
          />
        </div>
      </form>
    </section>
  ) : null;
};

export default ReviewForm;
