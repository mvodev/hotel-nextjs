/* eslint-disable no-console */
import { PieChart } from 'react-minimal-pie-chart';

import { getPosInSpellCasesArray } from '../../utils/Utils';
import ImpressionsProps from './Types';
import styles from './Impressions.module.scss';

const Impressions = (props: ImpressionsProps): JSX.Element => {
  const { value, header } = props;

  let totalReviewsNumber = 0;

  const spellCases = {
    total: ['голос', 'голоса', 'голосов'],
  };

  const descriptionList = value.map((elem) => {
    totalReviewsNumber += elem.value;
    return (
      <li
        key={elem.description}
        className={styles.impressionsDiagramDescriptionItem}
      >
        <div
          className={styles.impressionsDiagramDescriptionItemMarker}
          style={{ background: `${elem.color}` }}
        />
        {elem.description}
      </li>
    );
  });

  return (
    <div className={styles.impressions}>
      <h2 className={styles.impressionsHeader}>{header}</h2>
      <div className={styles.impressionsDiagram}>
        <figure className={styles.impressionsDiagramChart}>
          <div className={styles.impressionsDiagramChartWrapper}>
            <PieChart
              lineWidth={6.7}
              paddingAngle={2}
              radius={60}
              startAngle={92}
              center={[60, 60]}
              viewBoxSize={[120, 120]}
              data={value}
            />
            <div className={styles.impressionsDiagramLabels}>
              <span className={styles.impressionsDiagramLabelsNumber}>
                {totalReviewsNumber}
              </span>
              <span className={styles.impressionsDiagramLabelsLabel}>
                {spellCases.total[getPosInSpellCasesArray(totalReviewsNumber)]}
              </span>
            </div>
          </div>

          <figcaption className={styles.impressionsDiagramDescription}>
            <ul className={styles.impressionsDiagramLabelsList}>
              {descriptionList}
            </ul>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Impressions;
