import styles from './AboutRoom.module.sass';
import type { TypeAboutRoomProps } from './Types';
import defaultSections from './DefaultProps';

const AboutRoom = ({
  sections = defaultSections,
}: TypeAboutRoomProps): JSX.Element => (
  <ul className={styles.aboutRoom}>
    <h2 className={styles.title}>Сведения о номере</h2>
    {sections.map((s) => (
      <li className={styles.container} key={s.icon}>
        <div className={styles.section}>
          <div
            className={[
              styles.sectionIcon,
              styles[
                `sectionIconType${s.icon[0].toUpperCase()}${s.icon.slice(1)}`
              ],
            ].join(' ')}
          />
          <h3 className={styles.sectionTitle}>{s.title}</h3>
          <span className={styles.sectionDescription}>{s.description}</span>
        </div>
        <div className={styles.separator} />
      </li>
    ))}
  </ul>
);

export default AboutRoom;
