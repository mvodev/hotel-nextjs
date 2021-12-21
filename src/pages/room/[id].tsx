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
<<<<<<< HEAD
import Spin from 'src/components/Spin/Spin';
=======
import Preloader from 'src/components/Preloader/Preloader';
import ModalWindow from 'src/components/ModalWindow/ModalWindow';
import { switchModelWindow } from 'src/redux/ModalWindow/ModalWindow';
>>>>>>> 21b532fb3f3267ef548c2eab2daae29cd97e8e28

const Room = ({ id }: { id: string }): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isDataRequested, setDataRequested] = useState(false);
  
  const roomID = useSelector((state: AppState) => state.CurrentRoom.roomID);

  const isLoading = useSelector(
    (state: AppState) => state.CurrentRoom.isLoading
  );
  const modalWindow = useSelector((state: AppState) => state.modalWindiw);

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
      <ModalWindow
        handleCloseClick={() => dispatch(switchModelWindow(false))}
        {...modalWindow}
      />
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
            <TotalCostCard />
          </section>
        </div>
      </div>
    </>
  );

  return (
    <Layout title='room details' pageClass='details'>
      {isLoading ? (
        <div className={styles.spinContainer}>
          <Spin />
        </div>
      ) : (
        pageContent
      )}
    </Layout>
  );
};

export default Room;

Room.getInitialProps = async ({ query }: NextPageContext) => ({ id: query.id });
