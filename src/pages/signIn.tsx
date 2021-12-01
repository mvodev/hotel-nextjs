import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import SignInCard from '../components/SignInCard/SignInCard';
import styles from '../styles/pages/signIn.module.sass';

const SignIn = (): JSX.Element => (
  <Layout title='Sign In' pageClass={styles.signIn}>
    <Carousel names={['background-room-1.webp', 'background-room-4.webp']} />
    <SignInCard />
  </Layout>
);

export default SignIn;
