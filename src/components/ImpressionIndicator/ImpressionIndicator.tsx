import styles from './ImpressionIndicator.module.scss';
import ImpressionIndicatorProps from './Types';

const ImpressionIndicator = ({
  impression,
}: ImpressionIndicatorProps): React.ReactElement => {
  const translation = {
    perfect: 'Великолепно',
    good: 'Хорошо',
    satisfactory: 'Удовлетворительно',
    poor: 'Разочарован',
  };

  return (
    <div
      className={[
        styles.impressionIndicator,
        styles[`impressionIndicator${impression.charAt(0).toUpperCase()}${impression.slice(1)}`],
      ].join(' ')}
    >
      {translation[impression]}
    </div>
  );
};

export default ImpressionIndicator;
