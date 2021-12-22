import styles from '@styles/pages/userAccount.module.sass';
import UserAccount from 'src/components/UserAccountCard/UserAccountCard';
import Layout from '../components/Layout';


const Index = (): JSX.Element => (
  <Layout title='landing page' pageClass='landing'>
    <section className={styles.userAccountPage}>
      <div className={styles.pageContainer}>
        <UserAccount />
      </div>
    </section>
  </Layout>
);

export default Index;