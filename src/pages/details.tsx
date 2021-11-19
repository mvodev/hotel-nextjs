import type { ReactElement } from 'react';
import Layout from '../components/Layout';
import RoomPhotoGallery from 'src/components/RoomPhotoGallery/RoomPhotoGallery';
import styles from '../styles/pages/details.module.scss';
import Impressions from 'src/components/Impressions/Impressions';
import impressionsDefaultProps from 'src/components/Impressions/ImpressionsDefaultProps';

const Details = (): ReactElement => (
  <Layout title="room details" pageClass="details">
    <div className={styles.detailsWrapper}>
      <RoomPhotoGallery
        mainPhoto="gallery-room-1.webp"
        firstAdditionalPhoto="gallery-room-2.webp"
        secondAdditionalPhoto="gallery-room-3.webp"
      />
      <div className={styles.detailsContent}>
        <section className={styles.detailsDescription}>
          <div>
            <article className={styles.detailsInfo}>
              <Impressions {...impressionsDefaultProps}/>
            </article>
            <article className={styles.detailsInfo}>
              Comments
            </article>
            <article className={styles.detailsRules}>
              Rules
            </article>
          </div>
        </section>
        <section className={styles.detailsForm}>
          <div style={{maxWidth:'380px',height:'511px',border:'1px solid red',width:'100%'}}> </div>
        </section>
      </div>
      

    </div>
  </Layout>
);

export default Details;
