import Layout from '../components/layout';

const Index = () => {
  return <h1>hihe</h1>;
}

Index.getLayout = (page: React.ReactElement) => {
  return (
    <Layout title="landing" pageClass="landing">{page}</Layout>
  );
};

export default Index;

