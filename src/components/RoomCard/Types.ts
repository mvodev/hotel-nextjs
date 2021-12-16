import InfoSectionProps from './InfoSection/Types';

type RoomCardProps = {
  id: string;
  infoSection: InfoSectionProps;
  slides: string[];
  onClick?: (id: string) => void;
};

export default RoomCardProps;
