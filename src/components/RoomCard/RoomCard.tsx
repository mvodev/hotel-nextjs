import RoomSlider from './RoomSlider/RoomSlider';
import InfoSection from './InfoSection/InfoSection';
import styles from './RoomCard.module.scss';
import RoomCardProps from './Types';

const RoomCard = ({
  infoSection,
  slides,
}: RoomCardProps): React.ReactElement => {
  return (
    <div className={styles.roomCard}>
      <RoomSlider {...{ slides }} />
      <InfoSection {...infoSection} />
    </div>
  );
};

export default RoomCard;
