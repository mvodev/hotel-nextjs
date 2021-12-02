import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPrices, setPrices } from 'src/redux/Prices/PricesSlice';
import clamp from 'src/utils/Clamp';
import formateToRuble from 'src/utils/FormateToRuble';

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
  step = 100,
}: TypeRangeSliderProps): JSX.Element => {
  const prices = useSelector(selectPrices);
  const dispatch = useDispatch();
  const positions = prices.map((p) => clamp(min, p / (max - min), max)) as [number, number];
  const container = useRef<HTMLDivElement>(null);

  const relativeToAbsolute = (position: number) =>
    Math.min(
      max,
      Math.floor((position * (max - min + step)) / step) * step + min
    );

  const updatePrices = (newPositions: [number, number]) => 
    dispatch(setPrices(newPositions.map(relativeToAbsolute) as [number, number]));

  const calcPosition = ({
    pageX,
    shift = 0,
    offset = 0,
  }: TypeCalcPositionArgs): number => {
    const { x, width } = container.current?.getBoundingClientRect() || {
      x: 0,
      width: 0,
    };
    return (pageX - x - shift - offset) / width || 0;
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
    updatePrices(positions);
  };

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const newPosition = calcPosition({ pageX: e.clientX });
    const diffs = positions.map((p) => Math.abs(p - newPosition));
    const activeIDX = newPosition > positions[1] ? 1 : diffs.indexOf(Math.min(...diffs));
    positions[activeIDX] = newPosition;
    updatePrices(positions);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>диапазон цены</h2>
        <div className={styles.rangeLabel}>
          <span className={styles.value}>
            {formateToRuble(prices[0])}
          </span>
          {' - '}
          <span className={styles.value}>
            {formateToRuble(prices[1])}
          </span>
        </div>
      </div>
      <div className={styles.rangeSlider}>
        <button
          className={styles.filler}
          type='button'
          aria-label='track'
          onPointerDown={() => updatePrices([0, positions[1]])}
          tabIndex={-1}
        />
        <button
          className={styles.filler}
          type='button'
          aria-label='track'
          onPointerDown={() => updatePrices([positions[0], 1])}
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
