/* eslint-disable arrow-body-style */

import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';
import PaginationProps from './Types';

const Pagination = ({
  buttonsCount,
  currentPage,
  text,
}: PaginationProps): React.ReactElement => {
  const [active, setActive] = useState(currentPage);

  const handlePageButtonClick = (activeButton: number): void => {
    setActive(activeButton);
  };

  const handleBackButtonClick = (): void => {
    setActive(active - 1);
  };

  const handleForwardButtonClick = (): void => {
    setActive(active + 1);
  };

  const buttonIsAllowed = (button: number): boolean => {
    return (
      button === 1 ||
      button === buttonsCount ||
      (button === 2 && active === 5) ||
      (button === buttonsCount - 1 && active === buttonsCount - 4) ||
      (button >= active - 2 && button <= active + 2)
    );
  };

  const getGapElement = (button: number) => {
    return buttonIsAllowed(button + 1) ? (
      <div key={button} className={styles.buttonContainer}>
        <span className={styles.gap}>...</span>
      </div>
    ) : null;
  };

  const backButton =
    active > 1 ? (
      <div className={styles.buttonContainer}>
        <Button
          theme='paginationIcon'
          text='arrow_back'
          onClick={handleBackButtonClick}
        />
      </div>
    ) : null;

  const forwardButton =
    active < buttonsCount ? (
      <div className={styles.buttonContainer}>
        <Button
          theme='paginationIcon'
          text='arrow_forward'
          onClick={handleForwardButtonClick}
        />
      </div>
    ) : null;

  const pagesButtons = [...new Array(buttonsCount)].map((_, index) => {
    const pageNumber = index + 1;
    const theme = active === pageNumber ? 'paginationActive' : 'pagination';

    return buttonIsAllowed(pageNumber) ? (
      <div key={pageNumber} className={styles.buttonContainer}>
        <Button
          theme={theme}
          text={pageNumber.toString()}
          onClick={() => {
            handlePageButtonClick(pageNumber);
          }}
        />
      </div>
    ) : (
      getGapElement(pageNumber)
    );
  });

  return (
    <div className={styles.pagination}>
      <div className={styles.buttons}>
        {backButton}
        {pagesButtons}
        {forwardButton}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Pagination;
