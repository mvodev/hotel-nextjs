import Layout from 'src/components/Layout';
import Carousel from 'src/components/Carousel/Carousel';
import SignInCard from 'src/components/SignInCard/SignInCard';
import styles from 'src/styles/pages/signIn.module.sass';

const SignIn = (): JSX.Element => (
  <Layout title='Sign In' pageClass={styles.signIn}>
    <Carousel names={['background-room-1.webp', 'background-room-4.webp']} />
    <SignInCard />
  </Layout>
);

export default SignIn;
