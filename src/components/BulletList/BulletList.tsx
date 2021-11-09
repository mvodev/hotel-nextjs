import styles from './BulletList.module.scss';
import BulletListProps from './Types';

const BulletList = ({ title, items }: BulletListProps): React.ReactElement => {
  let titleClasses = styles.title;
  titleClasses += items.length > 1 ? styles.titleThemeShifted : '';

  let itemClasses = styles.item;
  itemClasses += items.length > 1 ? styles.itemThemeMarked : '';

  const bulletItems = items.map((item) => (
    <li key={item.id} className={styles.item}>
      {item.text}
    </li>
  ));

  const bulletList = (
    <div className={styles.bulletList}>
      <h1 className={titleClasses}>{title}</h1>
      <ul className={itemClasses}>{bulletItems}</ul>
    </div>
  );

  return bulletList;
};

export default BulletList;
