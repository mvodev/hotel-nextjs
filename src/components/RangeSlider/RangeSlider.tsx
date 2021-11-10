import React, { useRef, useState } from 'react';

import type TypeRangeSliderProp from './Types';
import styles from './RangeSlider.module.sass';

const RangeSlider = ({
  from = 0,
  to = 1,
}: TypeRangeSliderProp): JSX.Element => {
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef(false);
  const shift = useRef(0);
  const offset = useRef(0);
  const activeIDX = useRef(0);
  const [positions, changePosition] = useState([from, to]);

  const getOppositeBit = (bit: number) => Number(!bit);

  const formExtremums = (idx: number) => [idx, positions[getOppositeBit(idx)]];

  const getExtremums = (idx: number) =>
    idx === 0 ? formExtremums(idx) : formExtremums(idx).reverse();

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const handle = e.target;
    if (handle instanceof HTMLElement) {
      handle.setPointerCapture(e.pointerId);
      trigger.current = true;
      shift.current = e.pageX - handle.getBoundingClientRect().x;
      offset.current = new DOMMatrix(getComputedStyle(handle).transform).e;
      activeIDX.current = getOppositeBit(offset.current);
    }
  };

  const onLostPointerCapture = () => {
    trigger.current = false;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>): void => {
    const containerRect = container.current?.getBoundingClientRect();
    if (trigger.current && containerRect) {
      const [min, max] = getExtremums(activeIDX.current);
      positions[activeIDX.current] = Math.min(
        max,
        Math.max(
          min,
          (e.pageX - containerRect.x - shift.current - offset.current) /
            containerRect.width
        )
      );
      changePosition([...positions]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>): void => {
    if (e.code === 'ArrowLeft') {
      changePosition([positions[0] - 0.1, positions[1]]);
    }
  };

  return (
    <div className={styles.rangeSlider}>
      <div ref={container} className={styles.container}>
        <button
          className={styles.handle}
          type='button'
          aria-label='left handle'
          onPointerDown={onPointerDown}
          onLostPointerCapture={onLostPointerCapture}
          onPointerMove={onPointerMove}
          onKeyDown={onKeyDown}
          style={{ left: `${positions[0] * 100}%` }}
        />
        <button
          className={styles.handle}
          type='button'
          aria-label='right handle'
          onPointerDown={onPointerDown}
          onLostPointerCapture={onLostPointerCapture}
          onPointerMove={onPointerMove}
          style={{ left: `${positions[1] * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RangeSlider;
