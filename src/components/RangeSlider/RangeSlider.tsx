import { useRef, useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectPrice, setPrice } from 'src/redux/Slices/Filters/FiltersSlice';
import formateToRuble from 'src/utils/FormateToRuble';
import clamp from 'src/utils/Clamp';

import type { TypeHandleMoveArgs, TypeCalcPositionArgs } from './Types';
import Handle from './Handle';
import styles from './RangeSlider.module.sass';

const RangeSlider = ({ step = 100 }: { step?: number }): JSX.Element => {
  const { min, max, from, to } = useSelector(selectPrice);
  const dispatch = useDispatch();
  const absoluteToRelative = useCallback(
    (p: number) => clamp(min, p / (max - min), max),
    [max, min]
  );
  const [positions, setPositions] = useState(
    [from, to].map(absoluteToRelative)
  );
  const container = useRef<HTMLDivElement>(null);
  const timer = useRef(0);

  useEffect(
    () => setPositions([from, to].map(absoluteToRelative)),
    [from, to, absoluteToRelative]
  );

  const relativeToAbsolute = (position: number) =>
    Math.min(
      max,
      Math.floor((position * (max - min + step)) / step) * step + min
    );

  const updatePositions = (newPositions: number[]): void => {
    setPositions([...newPositions]);
    clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () =>
        dispatch(
          setPrice({
            from: relativeToAbsolute(newPositions[0]),
            to: relativeToAbsolute(newPositions[1]),
          })
        ),
      200
    );
  };

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
    updatePositions(positions);
  };

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const newPosition = calcPosition({ pageX: e.clientX });
    const diffs = positions.map((p) => Math.abs(p - newPosition));
    const activeIDX =
      newPosition > positions[1] ? 1 : diffs.indexOf(Math.min(...diffs));
    positions[activeIDX] = newPosition;
    updatePositions(positions);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>диапазон цены</h2>
        <div className={styles.rangeLabel}>
          <span className={styles.value}>
            {formateToRuble(relativeToAbsolute(positions[0]))}
          </span>
          {' - '}
          <span className={styles.value}>
            {formateToRuble(relativeToAbsolute(positions[1]))}
          </span>
        </div>
      </div>
      <div className={styles.rangeSlider}>
        <button
          className={styles.filler}
          type="button"
          aria-label="track"
          onPointerDown={() => updatePositions([0, positions[1]])}
          tabIndex={-1}
        />
        <button
          className={styles.filler}
          type="button"
          aria-label="track"
          onPointerDown={() => updatePositions([positions[0], 1])}
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
            type="button"
            aria-label="track"
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
