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
  const [activeButton, setActive] = useState(currentPage);

  const handlePageButtonClick = (button: number): void => {
    setActive(button);
  };

  const handleBackButtonClick = (): void => {
    setActive(activeButton - 1);
  };

  const handleForwardButtonClick = (): void => {
    setActive(activeButton + 1);
  };

  const buttonIsAllowed = (button: number): boolean => {
    return (
      button === 1 ||
      button === buttonsCount ||
      (button === 2 && activeButton === 5) ||
      (button === buttonsCount - 1 && activeButton === buttonsCount - 4) ||
      (button >= activeButton - 2 && button <= activeButton + 2)
    );
  };

  const getGapElement = (button: number) => {
    return buttonIsAllowed(button + 1) ? (
      <div key={button} className={styles.buttonContainer}>
        <span className={styles.gap}>...</span>
      </div>
    ) : null;
  };

  const buttonsClasses = `${styles.buttonContainer} ${styles.buttonContainerIsMobileDisplayed}`;

  const backButton =
    activeButton > 1 ? (
      <div className={buttonsClasses}>
        <Button
          theme="paginationIcon"
          text="arrow_back"
          onClick={handleBackButtonClick}
        />
      </div>
    ) : null;

  const forwardButton =
    activeButton < buttonsCount ? (
      <div className={buttonsClasses}>
        <Button
          theme="paginationIcon"
          text="arrow_forward"
          onClick={handleForwardButtonClick}
        />
      </div>
    ) : null;

  const pagesButtons = [...new Array(buttonsCount)].map((_, index) => {
    const pageNumber = index + 1;
    const theme =
      activeButton === pageNumber ? 'paginationActive' : 'pagination';

    const containerClasses = [
      styles.buttonContainer,
      pageNumber === activeButton
        ? styles.buttonContainerIsMobileDisplayed
        : '',
    ].join(' ');

    return buttonIsAllowed(pageNumber) ? (
      <div key={pageNumber} className={containerClasses}>
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
