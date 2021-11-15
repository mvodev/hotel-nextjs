/* eslint-disable no-console */
import Diagram from './Diagram/Diagram';
import { getPosInSpellCasesArray } from '../../utils/Utils';
import ImpressionsProps from './Types';
import styles from './Impressions.module.scss';

const Impressions = ({ value, header }: ImpressionsProps): JSX.Element => {

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
          style={
            elem.withGradient?
            {background:`linear-gradient(180deg, ${elem.color} 0%, ${elem.stopColor} 100%);`}:
            { background: `${elem.color}` }}
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
            <Diagram header='' value={value}/>
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
