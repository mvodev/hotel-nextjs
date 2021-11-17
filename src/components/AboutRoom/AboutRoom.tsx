import styles from './AboutRoom.module.sass';
import type TypeAboutRoomProps from './Types';
import sections from './Sections';

const AboutRoom = ({
  sectionNames = ['comfort', 'convenience', 'coziness'],
}: TypeAboutRoomProps): JSX.Element => (
  <ul className={styles.aboutRoom}>
    <h2 className={styles.title}>Сведения о номере</h2>
    {sectionNames.map((n) => (
      <li className={styles.container} key={n}>
        <div className={styles.section}>
          <div
            className={[
              styles.sectionIcon,
              styles[`sectionIconType${n[0].toUpperCase()}${n.slice(1)}`],
            ].join(' ')}
          />
          <h3 className={styles.sectionTitle}>{sections[n].title}</h3>
          <span className={styles.sectionDescription}>
            {sections[n].description}
          </span>
        </div>
        <div className={styles.separator} />
      </li>
    ))}
  </ul>
);

export default AboutRoom;
