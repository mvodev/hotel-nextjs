import styles from './AboutRoom.module.sass';
import type { TypeAboutRoomProps } from './Types';
import defaultSections from './DefaultProps';

const AboutRoom = ({
  sections = defaultSections,
}: TypeAboutRoomProps): JSX.Element => (
  <ul className={styles.aboutRoom}>
    <h2 className={styles.title}>Сведения о номере</h2>
    {sections.map(({ icon, title, description }) => (
      <li className={styles.container} key={icon}>
        <div className={styles.section}>
          <img 
            src={`/images/${icon}`} 
            alt="room service icon" 
            className={styles.sectionIcon} 
          />
          <h3 className={styles.sectionTitle}>{title}</h3>
          <span className={styles.sectionDescription}>{description}</span>
        </div>
        <div className={styles.separator} />
      </li>
    ))}
  </ul>
);

export default AboutRoom;
