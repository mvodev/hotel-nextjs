/* eslint-disable no-console */
import { PieChart } from 'react-minimal-pie-chart';

import ImpressionsProps from './Types';
import { getPosInSpellCasesArray } from '../../utils/Utils';
import styles from './Impressions.module.scss';

const Impressions = (props: ImpressionsProps): JSX.Element => {
  const { value, header } = props;

  const { 
    perfectReviewsNumber,
    goodReviewsNumber,
    satisfactoryReviewsNumber,
    poorReviewsNumber } = value;

  const totalReviewsNumber =
    perfectReviewsNumber +
    goodReviewsNumber +
    satisfactoryReviewsNumber +
    poorReviewsNumber;

  const spellCases = {
    total: ['голос', 'голоса', 'голосов'],
  };

  return (
    <div className={styles.impressions}>
      <h2 className={styles.impressionsHeader}>{header}</h2>
      <div className={styles.impressionsDiagram}>
        <figure className={styles.impressionsDiagramChart}>
          <PieChart
            lineWidth={6.7}
            paddingAngle={2}
            radius={60}
            startAngle={92}
            center={[60,60]}
            viewBoxSize={[120, 120]}
            data={[
              {
                title: 'perfect',
                value: perfectReviewsNumber,
                color: '#FFE39C',
              },
              { title: 'good', value: goodReviewsNumber, color: '#6FCF97' },
              {
                title: 'satisfactory',
                value: satisfactoryReviewsNumber,
                color: '#BC9CFF',
              },
              { title: 'poor', value: poorReviewsNumber, color: '#919191' },
            ]}
          />
          <div className={styles.impressionsDiagramLabels}>
            <div className={styles.impressionsDiagramLabelsNumber}>
              {totalReviewsNumber}
            </div>
            <div className={styles.impressionsDiagramLabelsLabel}>
              {spellCases.total[getPosInSpellCasesArray(totalReviewsNumber)]}
            </div>
          </div>
          <figcaption className={styles.impressionsDiagramDescription}>
            <ul className={styles.impressionsDiagramLabelsList}>
              <li
                className={`${styles.impressionsDiagramDescriptionItem} ${styles.impressionsDiagramDescriptionItemPerfect}`}
              >
                Великолепно
              </li>
              <li
                className={`${styles.impressionsDiagramDescriptionItem} ${styles.impressionsDiagramDescriptionItemGood}`}
              >
                Хорошо
              </li>
              <li
                className={`${styles.impressionsDiagramDescriptionItem} ${styles.impressionsDiagramDescriptionItemSatisfactory}`}
              >
                Удовлетворительно
              </li>
              <li
                className={`${styles.impressionsDiagramDescriptionItem} ${styles.impressionsDiagramDescriptionItemPoor}`}
              >
                Разочарован
              </li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Impressions;
