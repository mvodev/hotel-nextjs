import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import styles from './BulletList.module.scss';
import BulletListProps from './Types';

const BulletList = ({
  title,
  type,
}: BulletListProps): React.ReactElement | null => {
  const items = useSelector((state: AppState) =>
    type === 'rules'
      ? state.CurrentRoom.rules
      : [state.CurrentRoom.cancellation]
  ).filter((item) => item !== '');

  const titleClasses = [
    styles.title,
    items.length > 1 ? styles.titleThemeShifted : '',
  ].join(' ');

  const itemClasses = [
    styles.item,
    items.length > 1 ? styles.itemThemeMarked : '',
  ].join(' ');

  const bulletItems = items.map((item) => (
    <li key={item} className={itemClasses}>
      {item}
    </li>
  ));

  return items.length > 0 ? (
    <div className={styles.bulletList}>
      <h2 className={titleClasses}>{title}</h2>
      <ul className={styles.list}>{bulletItems}</ul>
    </div>
  ) : null;
};

export default BulletList;
