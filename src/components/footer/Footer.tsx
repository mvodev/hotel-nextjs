import Link from 'next/link';
import React, { useState, ChangeEvent } from 'react';

import { defaultLists } from './defaultProps';
import type { TypeFooterProps } from './defaultProps';
import SubTextField from '../sub-text-field/SubTextField';
import styles from './footer.module.sass';

const Footer = ({
  lists = defaultLists,
}: TypeFooterProps): React.ReactElement => (
  <div className={styles.footer}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.column}>
          <Link href='/'>
            <a className={styles.link} title='домашняя страница'>
              <img
                className={styles.logo}
                src='./img/logo.svg'
                alt='toxin logo'
              />
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
                  <Link href={href}>
                    <a className={styles.listLink} title={name}>
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
          {['twitter', 'facebook', 'instagram'].map((i) => (
            <Link key={i} href={`https://${i}.com`}>
              <a
                className={styles.socialLink}
                title={i}
                target='_blank'
                rel='noopener, noreferrer'
              >
                <img src={`./img/${i}-icon.svg`} alt={`${i} icon`} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
