import { ReactElement, useEffect, useState } from 'react';

import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';
import Reviews from 'src/components/Reviews/Reviews';
import Impressions from 'src/components/Impressions/Impressions';
import AboutRoom from 'src/components/AboutRoom/AboutRoom';
import TotalCostCard from 'src/components/TotalCostCard/TotalCostCard';
import totalCostCardDefaultProps from 'src/components/TotalCostCard/DefaultProps';
import BulletList from 'src/components/BulletList/BulletList';
import styles from '@styles/pages/details.module.scss';
import Layout from 'src/components/Layout';
import { useRouter } from 'next/router';
import { GET_CURRENT_ROOM } from 'src/redux/CurrentRoom/Types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import { NextPageContext } from 'next';
import Preloader from 'src/components/Preloader/Preloader';

const Room = ({ id }: { id: string }): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDataRequested, setDataRequested] = useState(false);

  const roomID = useSelector((state: AppState) => state.CurrentRoom.roomID);
  const room = useSelector((state: AppState) => state.CurrentRoom);
  console.log(room);
  const isLoading = useSelector(
    (state: AppState) => state.CurrentRoom.isLoading
  );

  useEffect(() => {
    if (!isDataRequested) {
      dispatch({ type: GET_CURRENT_ROOM, payload: id });
      setDataRequested(true);
    }

    if (!isLoading && roomID === '') {
      router.push('/404');
    }
  }, [isDataRequested, isLoading, roomID, dispatch, id, router]);

  const pageContent = (
    <>
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
              <Reviews title='Отзывы посетителей номера' />
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
    </>
  );

  return (
    <Layout title='room details' pageClass='details'>
      {isLoading ? <Preloader /> : pageContent}
    </Layout>
  );
};

export default Room;

Room.getInitialProps = async ({ query }: NextPageContext) => ({ id: query.id });
