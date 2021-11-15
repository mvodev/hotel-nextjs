/* eslint-disable arrow-body-style */

import Link from 'next/link';
import RoomSlider from './RoomSlider/RoomSlider';
import InfoSection from './InfoSection/InfoSection';
import styles from './RoomCard.module.scss';
import RoomCardProps from './Types';

const RoomCard = ({
  infoSection,
  link,
  slides,
}: RoomCardProps): React.ReactElement => {
  return (
    <div className={styles.roomCard}>
      <Link href={link}>
        <a className={styles.link}>
          <RoomSlider {...{ slides }} />
          <InfoSection {...infoSection} />
        </a>
      </Link>
    </div>
  );
};

export default RoomCard;
