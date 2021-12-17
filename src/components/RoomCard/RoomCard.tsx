/* eslint-disable arrow-body-style */

import Link from 'next/link';
import RoomSlider from './RoomSlider/RoomSlider';
import InfoSection from './InfoSection/InfoSection';
import styles from './RoomCard.module.scss';
import RoomCardProps from './Types';

const RoomCard = ({
  id,
  infoSection,
  slides,
}: RoomCardProps): React.ReactElement => {
  return (
    <Link href={`/room/${id}`}>
      <a className={styles.roomCard}>
        <RoomSlider {...{ slides }} />
        <InfoSection {...infoSection} />
      </a>
    </Link>
  );
};

export default RoomCard;
