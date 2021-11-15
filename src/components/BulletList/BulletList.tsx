import styles from './BulletList.module.scss';
import BulletListProps from './Types';

const BulletList = ({ title, items }: BulletListProps): React.ReactElement => {
  const titleClasses = [
    styles.title,
    items.length > 1 ? styles.titleThemeShifted : '',
  ].join(' ');

  const itemClasses = [
    styles.item,
    items.length > 1 ? styles.itemThemeMarked : '',
  ].join(' ');

  const bulletItems = items.map((item) => (
    <li key={item.id} className={itemClasses}>
      {item.text}
    </li>
  ));

  return (
    <div className={styles.bulletList}>
      <h2 className={titleClasses}>{title}</h2>
      <ul className={styles.list}>{bulletItems}</ul>
    </div>
  );
};

export default BulletList;
