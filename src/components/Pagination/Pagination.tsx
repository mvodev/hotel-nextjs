/* eslint-disable arrow-body-style */

import { useDispatch } from 'react-redux';
import PaginationState, { SWITCH_PAGE } from 'src/redux/Slices/Pagination/Types';
import Button from '../Button/Button';
import styles from './Pagination.module.scss';

const Pagination = ({
  pageCount,
  activePage,
  roomsCount,
}: PaginationState): React.ReactElement => {
  const dispatch = useDispatch();

  const handlePageButtonClick = (buttonNumber: number): void => {
    dispatch({ type: SWITCH_PAGE, payload: buttonNumber });
  };

  const handleBackButtonClick = (): void => {
    dispatch({ type: SWITCH_PAGE, payload: activePage - 1 });
  };

  const handleForwardButtonClick = (): void => {
    dispatch({ type: SWITCH_PAGE, payload: activePage + 1 });
  };

  const buttonIsAllowed = (button: number): boolean => {
    return (
      button === 1 ||
      button === pageCount ||
      (button === 2 && activePage === 5) ||
      (button === pageCount - 1 && activePage === pageCount - 4) ||
      (button >= activePage - 2 && button <= activePage + 2)
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
    activePage > 1 ? (
      <div className={buttonsClasses}>
        <Button
          theme='paginationIcon'
          text='arrow_back'
          onClick={handleBackButtonClick}
        />
      </div>
    ) : null;

  const forwardButton =
    activePage < pageCount ? (
      <div className={buttonsClasses}>
        <Button
          theme='paginationIcon'
          text='arrow_forward'
          onClick={handleForwardButtonClick}
        />
      </div>
    ) : null;

  const pagesButtons = [...new Array(pageCount)].map((_, index) => {
    const pageNumber = index + 1;
    const theme = activePage === pageNumber ? 'paginationActive' : 'pagination';

    const containerClasses = [
      styles.buttonContainer,
      pageNumber === activePage ? styles.buttonContainerIsMobileDisplayed : '',
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
      <div className={styles.text}>{roomsCount}</div>
    </div>
  );
};

export default Pagination;
