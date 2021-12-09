import { useSelector } from 'react-redux';
import { AppState } from 'src/redux/Store';

import styles from './AboutRoom.module.sass';

const AboutRoom = (): JSX.Element | null => {
  const aboutBlocks = useSelector(
    (state: AppState) => state.CurrentRoom.information
  );

  const aboutBlock = (
    <div className={styles.aboutRoom}>
      <h2 className={styles.title}>Сведения о номере</h2>
      <ul className={styles.container}>
        {aboutBlocks.map(({ icon, title, description }) => (
          <li className={styles.section} key={icon}>
            <img
              src={`/images/${icon}`}
              alt="room service icon"
              className={styles.sectionIcon}
            />
            <h3 className={styles.sectionTitle}>{title}</h3>
            <span className={styles.sectionDescription}>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return aboutBlocks.length > 0 ? aboutBlock : null;
};

export default AboutRoom;
