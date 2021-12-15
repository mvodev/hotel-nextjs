import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import styles from './ImpressionIndicator.module.scss';

const ImpressionIndicator = (): React.ReactElement | null => {
  const impression = useSelector((state: AppState) => state.currentRoomComments.score)

  return {score ? <span className={[styles.impressionIndicator, styles.impressionIndicator${impression.charAt(0).toUpperCase() + str.slice(1)}].join(' ')}></span> : null}
}

export default ImpressionIndicator;