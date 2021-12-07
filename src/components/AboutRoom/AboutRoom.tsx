import styles from './AboutRoom.module.sass';
import type { TypeAboutRoomProps } from './Types';
import defaultSections from './DefaultProps';

const AboutRoom = ({
  sections = defaultSections,
}: TypeAboutRoomProps): JSX.Element => (
  <div className={styles.aboutRoom}>
    <h2 className={styles.title}>Сведения о номере</h2>
    <ul className={styles.container}>
      {sections.map(({ icon, title, description }) => (
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

export default AboutRoom;
