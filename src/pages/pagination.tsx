import Pagination from 'src/components/Pagination/Pagination';
import Layout from '../components/Layout';

const pagination = (): React.ReactElement => (
  <Layout title='pagination demo' pageClass='paginationDemo'>
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pagination {...{ buttonsCount: 15, currentPage: 1 }} />
    </div>
  </Layout>
);

export default pagination;
