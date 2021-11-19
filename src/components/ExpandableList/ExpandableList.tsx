import { useState } from 'react';
import styles from './ExpandableList.module.scss';
import ExpandableListProps from './Types';

const ExpandableList = ({
  children,
  title,
}: ExpandableListProps): React.ReactElement => {
  const [isOpened, setIsOpened] = useState(false);

  const handleTitleElementClick = (): void => {
    setIsOpened(!isOpened);
  };

  let classes = styles.expandableList;
  classes += isOpened ? ` ${styles.expandableListOpened}` : '';

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
      <div className={styles.hiddenList}>{children}</div>
    </div>
  );

  return expandableList;
};

export default ExpandableList;
