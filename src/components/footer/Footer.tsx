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
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <Link href='/'>
            <a className={styles.footer__link} title='домашняя страница'>
              <img className={styles.footer__logo} src='./img/logo.svg' alt='toxin logo' />
            </a>
          </Link>
          <p className={styles.footer__chapter}>
            Бронирование номеров в лучшем отеле 2019 года по версии ассоциации
            «Отельные взгляды»
          </p>
        </div>
        {lists.map(({ title, links, id }) => (
          <div className={styles.footer__column} key={id}>
            <h3 className={styles.footer__title}>{title}</h3>
            <ul className={styles.footer__list}>
              {links.map(({ name, href, id: itemID }) => (
                <li className={styles['footer__list-item']} key={itemID}>
                  <Link href={href}>
                    <a className={styles['footer__list-link']} title={name}>
                      {name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.footer__column}>
          <h3 className={styles.footer__title}>Подписка</h3>
          <p className={styles.footer__chapter}>
            Получайте специальные предложения и новости сервиса
          </p>
          <SubTextField />
        </div>
      </div>
    </div>
    <div className={styles.footer__wrapper}>
      <div className={styles.footer__bottom}>
        <div className={styles['footer__bottom-container']}>
          <p className={styles.footer__copyright}>
            Copyright © 2018 Toxin отель. Все права защищены.
          </p>
          <div className={styles.footer__social}>
            {['twitter', 'facebook', 'instagram'].map((i) => (
              <Link key={i} href={`https://${i}.com`}>
                <a 
                  className={styles['footer__social-link']}
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
  </div>
);

export default Footer;
