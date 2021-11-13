import { useState } from 'react';
import styles from './ExpandableList.module.scss';
import ExpandableListProps from './Types';

const ExpandableList = ({
  title,
  elements,
}: ExpandableListProps): React.ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  const handleTitleElementClick = (): void => {
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
      <div className={styles.titleSection}>
        <div
          role='button'
          className={styles.title}
          onClick={handleTitleElementClick}
          onKeyPress={handleTitleElementClick}
          tabIndex={0}
        >
          {title}
        </div>
        <div
          role='button'
          className={styles.arrow}
          onClick={handleTitleElementClick}
          onKeyPress={handleTitleElementClick}
          tabIndex={0}
        >
          expand_more
        </div>
      </div>
      <ul className={styles.hiddenList}>{items}</ul>
    </div>
  );

  return expandableList;
};

export default ExpandableList;
