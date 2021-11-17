import { useState } from 'react';
import styles from './ExpandableList.module.scss';
import ExpandableListProps from './Types';

const ExpandableList = ({
  text,
  elements,
}: ExpandableListProps): React.ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  const handleTitleClick = (): void => {
    setIsOpened(!isOpened);
  };

  let classes = styles.expandableList;
  classes += isOpened ? ` ${styles.expandableListOpened}` : '';

  const items = elements.map((element) => (
    <li key={element.id} className={styles.item}>
      {element.element}
    </li>
  ));

  const expandableList = (
    <div className={classes}>
      <button type='button' className={styles.title} onClick={handleTitleClick}>
        <span className={styles.text}>{text}</span>
        <span className={styles.arrow}>expand_more</span>
      </button>
      <ul className={styles.hiddenList}>{items}</ul>
    </div>
  );

  return expandableList;
};

export default ExpandableList;
