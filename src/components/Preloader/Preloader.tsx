import styles from './Preloader.module.scss';

const Preloader = (): React.ReactElement => (
  <div className={styles.preloader}>
    <img src='./images/preloader.svg' width='100%' alt='Preloader' />
  </div>
);

export default Preloader;
