import React, { useState, useEffect } from 'react';

import styles from './Carousel.module.sass';

const Carousel = ({ names }: { names: string[] }): React.ReactElement => {
  const [index, changeIndex] = useState(0);
  
  const getNext = () => index === names.length - 1 ? 0 : index + 1;

  useEffect(() => {
    setTimeout(() => changeIndex(getNext()), 10000);
  });

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
