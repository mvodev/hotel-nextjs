import getPosInSpellCasesArray from 'src/utils/Utils';
import DateDropdown from 'src/components/DateDropdown/DateDropdown';
import DropdownGuests from 'src/components/DropdownGuests/DropdownGuests';
import Button from 'src/components/Button/Button';

import styles from './TotalCostCard.module.sass';
import TypeTotalCostCardProps from './Types';

const TotalCostCard = ({
  roomNumber,
  isLuxury,
  costPerDay,
  discount,
  fee,
  initDate,
  adult,
  child,
  infants,
}: TypeTotalCostCardProps): JSX.Element => {
  const nDays = Math.ceil(
    (initDate[1].getTime() - initDate[0].getTime()) / (24 * 60 * 60 * 1000)
  );

  const preTotal = costPerDay * nDays;

  const spells = ['сутки', 'суток', 'суток'];

  const formatInRubles = (value: number) =>
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace(/\s(?!\d)/, '');

  return (
    <form className={styles.totalCostCard}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1
            className={[
              styles.roomNumber,
              isLuxury ? styles.roomNumberDeluxe : '',
            ].join(' ')}
          >
            {roomNumber}
          </h1>
          <span className={styles.costPerDay}>
            {formatInRubles(costPerDay)}
          </span>
        </div>
        <div className={styles.dateDropdownWrapper}>
          <DateDropdown
            titles={['прибытие', 'выезд']}
            modifier='double'
            initDate={initDate}
          />
        </div>
        <div className={styles.dropdownGuestsWrapper}>
          <h3 className={styles.dropdownGuestsTitle}>гости</h3>
          <DropdownGuests
            placeholder='Сколько гостей'
            opened={false}
            value={{
              adult,
              child,
              infants,
            }}
          />
        </div>
        <div className={styles.costTable}>
          <div className={styles.costTableServiceDescription}>
            <span className={styles.costTableCostPerDay}>
              {formatInRubles(costPerDay)}
            </span>
            {' x '}
            <span className={styles.costTableNDays}>
              {nDays} {spells[getPosInSpellCasesArray(nDays)]}
            </span>
          </div>
          <div className={styles.costTableInfo} title='info' />
          <div className={styles.costTableCost}>{formatInRubles(preTotal)}</div>
          <div className={styles.costTableServiceDescription}>
            {`Сбор за услуги: скидка ${formatInRubles(discount)}`}
          </div>
          <div className={styles.costTableInfo} title='info' />
          <div className={styles.costTableCost}>0₽</div>
          <div className={styles.costTableServiceDescription}>
            Сбор за дополнительные {'\n'} услуги
          </div>
          <div className={styles.costTableInfo} title='info' />
          <div className={styles.costTableCost}>{formatInRubles(fee)}</div>
        </div>
        <div className={styles.total}>
          <span className={styles.totalCaption}>Итого</span>
          <div className={styles.totalDashedLine} />
          <span className={styles.totalCost}>
            {formatInRubles(preTotal - discount + fee)}
          </span>
        </div>
        <Button text='ЗАБРОНИРОВАТЬ' type='submit' theme='filled' />
      </div>
    </form>
  );
};

export default TotalCostCard;
