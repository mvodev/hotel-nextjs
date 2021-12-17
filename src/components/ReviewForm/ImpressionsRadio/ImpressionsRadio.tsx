import styles from './ImpressionsRadio.module.scss';
import Values from './Values';

const ImpressionsRadio = (): React.ReactElement => {
  const radios = Values.map((radio) => {
    return (
      <label
        key={radio.key}
        className={[
          styles.label,
          styles[
            `label${radio.key.charAt(0).toUpperCase()}${radio.key.slice(1)}`
          ],
        ].join(' ')}
      >
        {radio.value}
        <input
          className={styles.radio}
          type='radio'
          name='impressions'
          value={radio.key}
        />
      </label>
    );
  });

  return <div className={styles.impressionsRadio}>{radios}</div>;
};

export default ImpressionsRadio;
