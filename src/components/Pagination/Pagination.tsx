/* eslint-disable arrow-body-style */

import Button from '../Button/Button';
import styles from './Pagination.module.scss';
import PaginationProps from './Types';

const Pagination = ({
  buttonsCount,
  currentPage,
}: PaginationProps): React.ReactElement => {
  const buttonIsAllowed = (button: number): boolean => {
    return (
      button === 1 ||
      button === buttonsCount ||
      (button === 2 && currentPage === 5) ||
      (button === 2 && currentPage === 8) ||
      (button >= currentPage - 2 && button <= currentPage + 2)
    );
  };

  const getGapElement = (button: number) => {
    return buttonIsAllowed(button + 1) ? (
      <div className={styles.buttonContainer}>
        <span className={styles.gap}>...</span>
      </div>
    ) : null;
  };

  const backButton =
    currentPage > 1 ? (
      <div className={styles.buttonContainer}>
        <Button theme='paginationIcon' text='arrow_back' />
      </div>
    ) : null;

  const forwardButton =
    currentPage < buttonsCount ? (
      <div className={styles.buttonContainer}>
        <Button theme='paginationIcon' text='arrow_forward' />
      </div>
    ) : null;

  const pagesButtons = [...new Array(buttonsCount)].map((_, index) => {
    const pageNumber = index + 1;
    const theme =
      currentPage === pageNumber ? 'paginationActive' : 'pagination';

    return buttonIsAllowed(pageNumber) ? (
      <div className={styles.buttonContainer}>
        <Button key={pageNumber} theme={theme} text={pageNumber.toString()} />
      </div>
    ) : (
      getGapElement(pageNumber)
    );
  });

  return (
    <div className={styles.pagination}>
      {backButton}
      {pagesButtons}
      {forwardButton}
    </div>
  );
};

export default Pagination;
