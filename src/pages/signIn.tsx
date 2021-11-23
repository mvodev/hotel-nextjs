import Layout from 'src/components/Layout';
import Carousel from 'src/components/Carousel/Carousel';
import SignInCard from 'src/components/SignInCard/SignInCard';
import styles from 'src/styles/pages/signIn.module.sass';

<<<<<<< HEAD
const SignIn = (): JSX.Element => (
=======
const Sigin = (): JSX.Element => (
>>>>>>> 73e69d4 (added signIn page)
  <Layout title="Sign In" pageClass={styles.signIn}>
    <Carousel
      names={[
        'background-room-1.webp',
        'background-room-4.webp',
      ]}
    />
    <SignInCard />
  </Layout>
);

<<<<<<< HEAD
export default SignIn;
=======
export default Sigin;
>>>>>>> 73e69d4 (added signIn page)
