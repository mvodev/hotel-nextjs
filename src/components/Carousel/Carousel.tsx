import React, { useState } from 'react';

import styles from './Carousel.module.sass';
import TypeCarouselProps from './Types';

const Carousel = ({
  names,
  delay = 20000,
}: TypeCarouselProps): React.ReactElement => {
  const [index, changeIndex] = useState(0);

  const getNext = () => (index === names.length - 1 ? 0 : index + 1);

  setTimeout(() => changeIndex(getNext()), delay);

  return (
    <div className={styles.carousel}>
      {names.map((name, idx) => (
        <img
          className={[
            styles.photo,
            idx === index ? styles.photoSelected : '',
          ].join(' ')}
          key={name}
          src={`./images/${name}`}
          alt='amaizing hotel room'
        />
      ))}
    </div>
  );
};

export default Carousel;
