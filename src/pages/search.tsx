import { useSelector } from 'react-redux';
import { select } from 'redux-saga/effects'
import Layout from 'src/components/Layout';
import Filters from 'src/components/Filters/Filters';
import RoomCard from 'src/components/RoomCard/RoomCard';
import Pagination from 'src/components/Pagination/Pagination';
import roomCardProps from 'src/components/RoomCard/RoomCardProps';
import styles from '@styles/pages/search.module.sass';
import { StateType } from '../redux/Rooms/Types';
import RecalculateRating from '../utils/RecalculateRating';


const Search = (): JSX.Element => {
  const roomCards = useSelector((state: StateType) => state.rooms);

  const searchItems = roomCards.rooms.length 
    ? (roomCards.rooms.map((item) => {
      const roomCardItem = {
        slides: item.gallery,
        infoSection: {
          roomNumber: item.roomNumber,
          isLux: item.isLux,
          rating: RecalculateRating(item.impressions),
          price: item.price,
          reviewsCount: (
            item.impressions.perfect
            + item.impressions.good
            + item.impressions.satisfactory
            + item.impressions.poor
          )
        },
        link: 'details'
      }
      return(
        <div key={item.roomID} className={styles.searchItem}>
          <RoomCard {...roomCardItem} />
        </div>
      );
    }))
    : ''


  return(
    <Layout title='search room' pageClass='search'>
      <section className={styles.pageContainer}>
        <Filters />
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
}

export default Search;
