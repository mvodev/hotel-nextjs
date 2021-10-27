import type { ReactElement } from 'react';

import Layout from '../components/Layout';

const Index = (): ReactElement => <h1>hihe</h1>;

Index.getLayout = (page: ReactElement) => (
  <Layout title="landing page" pageClass="landing">{page}</Layout>
);

export default Index;
