import styles from './BulletList.module.scss';
import BulletListProps from './Types';

const BulletList = ({ title, items }: BulletListProps): React.ReactElement => {
  let titleClasses = styles.title;
  titleClasses += items.length > 1 ? ` ${styles.titleThemeShifted}` : '';

  let itemClasses = styles.item;
  itemClasses += items.length > 1 ? ` ${styles.itemThemeMarked}` : '';

  const bulletItems = items.map((item) => (
    <li key={item.id} className={itemClasses}>
      {item.text}
    </li>
  ));

  const bulletList = (
    <div className={styles.bulletList}>
      <h2 className={titleClasses}>{title}</h2>
      <ul className={styles.list}>{bulletItems}</ul>
    </div>
  );

  return bulletList;
};

export default BulletList;
