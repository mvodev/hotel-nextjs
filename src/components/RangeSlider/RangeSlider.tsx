import { useRef, useState } from 'react';

import type {
  TypeRangeSliderProps,
  TypeHandleMoveArgs,
  TypeCalcPositionArgs,
} from './Types';
import styles from './RangeSlider.module.sass';
import Handle from './Handle';

const RangeSlider = ({
  min = 0,
  max = 15000,
  from = 5000,
  to = 10000,
  step = 100,
}: TypeRangeSliderProps): JSX.Element => {
  const [positions, changePosition] = useState(
    [from, to].map((p) => p / (max - min))
  );
  const container = useRef<HTMLDivElement>(null);

  const calcValue = (position: number) =>
    Math.min(
      max,
      Math.floor((position * (max - min + step)) / step) * step + min
    );

  const formateValue = (value: number) =>
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .format(value)
      .replace(/\s(?!\d)/, '');

  const calcPosition = ({
    pageX,
    shift = 0,
    offset = 0,
  }: TypeCalcPositionArgs): number => {
    const { x, width } = container.current?.getBoundingClientRect() || {
      x: 0,
      width: 0,
    };
    return (pageX - x - shift - offset) / width;
  };

  const handleHandlePointerMove = ({
    handleID,
    pageX,
    shift,
    offset,
  }: TypeHandleMoveArgs): void => {
    const [relativeMin, relativeMax] = [
      positions[Number(!handleID)],
      handleID,
    ].sort((a, b) => a - b);
    positions[handleID] = Math.min(
      relativeMax,
      Math.max(relativeMin, calcPosition({ pageX, shift, offset }))
    );
    changePosition([...positions]);
  };

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const newPosition = calcPosition({ pageX: e.clientX });
    const diffs = positions.map((p) => Math.abs(p - newPosition));
    const activeIDX = diffs.indexOf(Math.min(...diffs));
    positions[newPosition > positions[1] ? 1 : activeIDX] = newPosition;
    changePosition([...positions]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>диапазон цены</h2>
        <div className={styles.rangeLabel}>
          <span className={styles.value}>
            {formateValue(calcValue(positions[0]))}
          </span>
          {' - '}
          <span className={styles.value}>
            {formateValue(calcValue(positions[1]))}
          </span>
        </div>
      </div>
      <div className={styles.rangeSlider}>
        <button
          className={styles.filler}
          type='button'
          aria-label='track'
          onPointerDown={() => changePosition([0, positions[1]])}
          tabIndex={-1}
        />
        <button
          className={styles.filler}
          type='button'
          aria-label='track'
          onPointerDown={() => changePosition([positions[0], 1])}
          tabIndex={-1}
        />
        <div ref={container} className={styles.container}>
          <Handle
            handlePointerMove={handleHandlePointerMove}
            position={positions[0]}
            handleID={0}
          />
          <Handle
            handlePointerMove={handleHandlePointerMove}
            position={positions[1]}
            handleID={1}
          />
          <button
            className={styles.track}
            type='button'
            aria-label='track'
            onPointerDown={handleTrackPointerDown}
            tabIndex={-1}
          >
            <div
              className={styles.progressBar}
              style={{ flexBasis: `${positions[0] * 100}%` }}
            />
            <div
              className={styles.progressBar}
              style={{ flexBasis: `${(1 - positions[1]) * 100}%` }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
