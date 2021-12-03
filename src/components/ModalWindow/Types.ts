type ModalWindowProps = {
  isEnabled?: boolean;
  image?: string;
  title: string;
  text: string;
  handleCloseClick?: () => void;
};

export default ModalWindowProps;
