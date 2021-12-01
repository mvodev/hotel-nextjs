import type { ReactElement } from 'react';

import Layout from '../components/Layout';
import Filters from '../components/Filters/Filters';
import RoomCard from '../components/RoomCard/RoomCard';
import Pagination from '../components/Pagination/Pagination';
import FiltersProps from '../components/Filters/FiltersProps';
import roomCardProps from '../components/RoomCard/RoomCardProps';

import styles from '../styles/pages/search.module.sass';

const searchItems = roomCardProps.map((item) => (
  <div key={item.infoSection.roomNumber} className={styles.searchItem}>
    <RoomCard {...item} />
  </div>
));

const Search = (): ReactElement => (
  <Layout title='search room' pageClass='search'>
    <section className={styles.pageContainer}>
      <Filters {...FiltersProps} />
      <div className={styles.searchContent}>
        <h1 className={styles.searchTitle}>
          Номера, которые мы для вас подобрали
        </h1>
        <div className={styles.searchResult}>
          {searchItems}
          <div className={styles.searchPagination}>
            <Pagination
              {...{
                buttonsCount: 15,
                currentPage: 1,
                text: '1 - 12 из 100+ вариантов аренды',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Search;
