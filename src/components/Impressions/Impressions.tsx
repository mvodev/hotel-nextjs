import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';
import Diagram from './Diagram/Diagram';
import { getPosInSpellCasesArray } from '../../utils/Utils';
import styles from './Impressions.module.scss';
import DiagramSettings from './DiagramSettings';
import DiagramSegment from './Types';

const Impressions = ({ header }: { header: string }): React.ReactElement => {
  const values = useSelector(
    (state: AppState) => state.CurrentRoom.impressions
  );
  const segments = DiagramSettings.map((segment: DiagramSegment) => ({
    ...segment,
    value: values[segment.type],
  }));

  let totalReviewsNumber = 0;

  const spellCases = {
    total: ['голос', 'голоса', 'голосов'],
  };

  const descriptionList = segments.map((segment) => {
    totalReviewsNumber += segment.value;
    return (
      <li
        key={segment.description}
        className={styles.impressionsDiagramDescriptionItem}
      >
        <div
          className={styles.impressionsDiagramDescriptionItemMarker}
          style={
            segment.withGradient
              ? {
                  background: `linear-gradient(180deg, ${segment.color} 0%, ${segment.stopColor} 100%)`,
                }
              : { background: `${segment.color}` }
          }
        />
        {segment.description}
      </li>
    );
  });

  return (
    <div className={styles.impressions}>
      <h2 className={styles.impressionsHeader}>{header}</h2>
      <div className={styles.impressionsDiagram}>
        <figure className={styles.impressionsDiagramChart}>
          <div className={styles.impressionsDiagramChartWrapper}>
            <Diagram segments={segments} />
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
