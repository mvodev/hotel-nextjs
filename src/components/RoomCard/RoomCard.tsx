import RoomSlider from '../RoomSlider/RoomSlider';
import InfoSection from './InfoSection/InfoSection';
import styles from './RoomCard.module.scss';
import RoomCardProps from './Types';

const RoomCard = ({
  infoSection,
  slides,
}: RoomCardProps): React.ReactElement => {
  const roomCard = (
    <div className={styles.roomCard}>
      <RoomSlider {...{ slides }} />
      <InfoSection {...infoSection} />
    </div>
  );

  return roomCard;
};

export default RoomCard;
