import Layout from '../components/Layout';

const Index = () => {
  return (
    <h1>hihe</h1>
  );
}

Index.getLayout = (page: React.ReactElement) => {
  return (
    <Layout title="landing" pageClass="landing">{page}</Layout>
  );
};

export default Index;

