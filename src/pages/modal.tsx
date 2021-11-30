import type { ReactElement } from 'react';
import ModalWindow from 'src/components/ModalWindow/ModalWindow';
import Carousel from '../components/Carousel/Carousel';
import Layout from '../components/Layout';
import styles from '../styles/pages/index.module.scss';

const Modal = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <section className={styles.landingPage}>
      <Carousel
        names={[
          'background-room-1.webp',
          'background-room-2.webp',
          'background-room-3.webp',
        ]}
      />
      <ModalWindow
        image='users.png'
        title='Профиль зарегистрирован!'
        text='Вы успешно зарегистрировались на сайте Toxin. Сейчас вы будете автоматически перенаправлены на главную страницу.'
      />
    </section>
  </Layout>
);

export default Modal;
