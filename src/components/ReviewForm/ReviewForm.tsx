import styles from './ReviewForm.module.scss';
import Button from '../Button/Button';

const ReviewForm = (): React.ReactElement => {
  return (
    <section className={styles.reviewForm}>
      <h2 className={styles.title}>Оставьте свой отзыв об этом номере</h2>
      <form className={styles.form}>
        <textarea className={styles.textarea} placeholder='Ваш отзыв' />
        <div className={styles.submitContainer}>
          <Button type='submit' theme='filled' text='Оставить отзыв' />
        </div>
      </form>
    </section>
  );
};

export default ReviewForm;
