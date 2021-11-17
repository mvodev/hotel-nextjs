import { useRef } from 'react';

import styles from './RangeSlider.module.sass';
import type { TypeHandleProps } from './Types';

const Handle = ({
  handlePointerMove,
  position,
  handleID,
}: TypeHandleProps): JSX.Element => {
  const trigger = useRef(false);
  const shift = useRef(0);
  const offset = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const handle = e.target;
    if (handle instanceof HTMLElement) {
      handle.setPointerCapture(e.pointerId);
      trigger.current = true;
      shift.current = e.pageX - handle.getBoundingClientRect().x;
      offset.current = new DOMMatrix(getComputedStyle(handle).transform).e;
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (trigger.current) {
      handlePointerMove({
        handleID,
        pageX: e.pageX,
        shift: shift.current,
        offset: offset.current,
      });
    }
  };

  return (
    <button
      className={styles.handle}
      type='button'
      aria-label={`${handleID === 0 ? 'left' : 'right'} handle`}
      onPointerDown={onPointerDown}
      onLostPointerCapture={() => {
        trigger.current = false;
      }}
      onPointerMove={onPointerMove}
      style={{ left: `${position * 100}%` }}
      tabIndex={-1}
    />
  );
};

export default Handle;
