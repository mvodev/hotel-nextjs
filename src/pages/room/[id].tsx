import { ReactElement, useState } from 'react';

import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';
import Reviews from 'src/components/Reviews/Reviews';
import ReviewDefaultProps from 'src/components/Reviews/ReviewDefaultProps';
import Impressions from 'src/components/Impressions/Impressions';
import AboutRoom from 'src/components/AboutRoom/AboutRoom';
import TotalCostCard from 'src/components/TotalCostCard/TotalCostCard';
import totalCostCardDefaultProps from 'src/components/TotalCostCard/DefaultProps';
import BulletList from 'src/components/BulletList/BulletList';
import styles from '@styles/pages/details.module.scss';
import Layout from 'src/components/Layout';
import { useRouter } from 'next/router';
import { GET_CURRENT_ROOM } from 'src/redux/CurrentRoom/Types';
import { useDispatch } from 'react-redux';

const Details = (): ReactElement => {
  const dispatch = useDispatch();
  const [isRoomReceived, setRoomRecived] = useState(false);
  const router = useRouter();

  if (router.query.id && !isRoomReceived) {
    const { id } = router.query;
    setRoomRecived(true);
    dispatch({ type: GET_CURRENT_ROOM, payload: id });
  }

  return (
    <Layout title='room details' pageClass='details'>
      <div className={styles.detailsImages}>
        <RoomPhotoGallery />
      </div>
      <div className={styles.detailsWrapper}>
        <div className={styles.detailsContent}>
          <section className={styles.detailsDescription}>
            <article className={styles.detailsInfo}>
              <AboutRoom />
              <Impressions header='Впечатления от номера' />
            </article>
            <article className={styles.detailsReview}>
              <Reviews {...ReviewDefaultProps} />
            </article>
            <article className={styles.detailsRules}>
              <div className={styles.detailsRulesWrapper}>
                <BulletList title='Правила' type='rules' />
              </div>
              <BulletList title='Отмена' type='cancellation' />
            </article>
          </section>
          <section className={styles.detailsForm}>
            <TotalCostCard {...totalCostCardDefaultProps} />
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
