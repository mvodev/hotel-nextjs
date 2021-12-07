import type { ReactElement } from 'react';

import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';
import Reviews from 'src/components/Reviews/Reviews';
import ReviewDefaultProps from 'src/components/Reviews/ReviewDefaultProps';
import Impressions from 'src/components/Impressions/Impressions';
import impressionsDefaultProps from 'src/components/Impressions/ImpressionsDefaultProps';
import AboutRoom from 'src/components/AboutRoom/AboutRoom';
import TotalCostCard from 'src/components/TotalCostCard/TotalCostCard';
import totalCostCardDefaultProps from 'src/components/TotalCostCard/DefaultProps';
import BulletList from 'src/components/BulletList/BulletList';
import styles from '../styles/pages/details.module.scss';
import Layout from '../components/Layout';

const Details = (): ReactElement => (
  <Layout title='room details' pageClass='details'>
    <div className={styles.detailsImages}>
      <RoomPhotoGallery
        mainPhoto='gallery-room-1.webp'
        firstAdditionalPhoto='gallery-room-2.webp'
        secondAdditionalPhoto='gallery-room-3.webp'
      />
    </div>
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsContent}>
        <section className={styles.detailsDescription}>
          <article className={styles.detailsInfo}>
            <AboutRoom />
            <Impressions {...impressionsDefaultProps} />
          </article>
          <article className={styles.detailsReview}>
            <Reviews {...ReviewDefaultProps} />
          </article>
          <article className={styles.detailsRules}>
            <div className={styles.detailsRulesWrapper}>
              <BulletList
                title='Правила'
                items={[
                  { id: 1, text: 'Можно с питомцами' },
                  { id: 2, text: 'Без вечеринок и мероприятий' },
                  {
                    id: 3,
                    text: 'Время прибытия — после 13:00,а выезд до 12:00',
                  },
                ]}
              />
            </div>
            <BulletList
              title='Отмена'
              items={[
                {
                  id: 1,
                  text: 'Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора за услуги.',
                },
              ]}
            />
          </article>
        </section>
        <section className={styles.detailsForm}>
          <TotalCostCard {...totalCostCardDefaultProps} />
        </section>
      </div>
    </div>
  </Layout>
);

export default Details;
