import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'src/components/Carousel/Carousel';
import RegistrationCard from 'src/components/RegistrationCard/RegistrationCard';
import { AppState } from 'src/redux/store';
import Layout from '../components/Layout';
import styles from '../styles/pages/registration.module.scss';

const Registration = (): React.ReactElement => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: AppState) => state.Authentication.isAuthenticated
  );
  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  });

  return (
    <Layout title='registration page' pageClass={styles.registration}>
      <Carousel names={['background-room-1.webp', 'background-room-4.webp']} />
      <RegistrationCard />
    </Layout>
  );
};

export default Registration;
