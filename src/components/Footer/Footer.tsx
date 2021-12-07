import Link from 'next/link';

import SubTextField from 'src/components/SubTextField/SubTextField';

import { defaultLists, defaultSocials } from './DefaultProps';
import type { TypeFooterProps } from './Types';
import styles from './Footer.module.sass';

const Footer = ({
  lists = defaultLists,
  socials = defaultSocials,
}: TypeFooterProps): React.ReactElement => (
  <div className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Link href="/" passHref>
            <a href='replace' className={styles.link} title='домашняя страница'>
              <img src='./images/logo.svg' alt='toxin logo' />
            </a>
          </Link>
          <p className={styles.chapter}>
            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
            «Отельные взгляды»
          </p>
        </div>
        {lists.map(({ title, links, id }) => (
          <div className={styles.column} key={id}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.list}>
              {links.map(({ name, href, id: itemID }) => (
                <li className={styles.listItem} key={itemID}>
                  <Link href={href} passHref>
                    <a href='replace' className={styles.listLink} title={name}>
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.column}>
          <h3 className={styles.title}>Подписка</h3>
          <p className={styles.chapter}>
            Получайте специальные предложения и новости сервиса
          </p>
          <SubTextField />
        </div>
      </div>
    </div>
    <div className={styles.wrapper}>
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright © 2018 Toxin отель. Все права защищены.
        </p>
        <div className={styles.social}>
          {socials.map(({ id, href, src }) => (
            <Link key={id} href={href} passHref>
              <a
                href="replace"
                className={styles.socialLink}
                title={id}
                target="_blank"
                rel="noopener, noreferrer"
              >
                <img src={src} alt={`${id} icon`} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
