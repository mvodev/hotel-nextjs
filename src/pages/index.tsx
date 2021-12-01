import type { ReactElement } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Layout from '../components/Layout';
import SearchRoomCard from '../components/SearchRoomCard/SearchRoomCard';
import styles from '../styles/pages/index.module.scss';

const Index = (): ReactElement => (
  <Layout title="landing page" pageClass="landing">
    <section className={styles.landingPage}>
      <Carousel
        names={[
          'background-room-1.webp',
          'background-room-2.webp',
          'background-room-3.webp',
        ]}
      />
      <div className={styles.pageContainer}>
        <div className={styles.cardContainer}>
          <SearchRoomCard />
        </div>
        <div className={styles.textBlock}>
          Лучшие номера для вашей работы, отдыха и просто вдохновения
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
