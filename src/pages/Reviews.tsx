import type { ReactElement } from 'react';
import Reviews from '../components/Reviews/Reviews';
import Layout from '../components/Layout';
import ReviewDefaultProps from '../components/Reviews/ReviewDefaultProps';

const { title, reviews } = ReviewDefaultProps;

const Index = (): ReactElement => (
  <Layout title='landing page' pageClass='landing'>
    <div className='container'>
      <Reviews title={title} reviews={reviews} />
    </div>
    <style jsx>
      {`
        .container {
          max-width: 740px;
          width: 100%;
          padding: 30px 15px;
          margin: auto;
        }
      `}
    </style>
  </Layout>
);

export default Index;
