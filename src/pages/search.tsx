import Layout from 'src/components/Layout';
import Filters from 'src/components/Filters/Filters';
import RoomCard from 'src/components/RoomCard/RoomCard';
import Pagination from 'src/components/Pagination/Pagination';
import roomCardProps from 'src/components/RoomCard/RoomCardProps';
import styles from '@styles/pages/search.module.sass';

const searchItems = roomCardProps.map((item) => (
  <div key={item.infoSection.roomNumber} className={styles.searchItem}>
    <RoomCard {...item}/>
  </div>
))

const Search = (): JSX.Element => (
  <Layout title='search room' pageClass='search'>
    <section className={styles.pageContainer}>
      <Filters />
      <div className={styles.searchContent}>
        <h1 className={styles.searchTitle}>Номера, которые мы для вас подобрали</h1>
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
