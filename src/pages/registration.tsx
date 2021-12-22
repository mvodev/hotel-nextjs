import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import Carousel from 'src/components/Carousel/Carousel';
import RegistrationCard from 'src/components/RegistrationCard/RegistrationCard';
import Spin from 'src/components/Spin/Spin';
import { AppState } from 'src/redux/Store';
import Layout from '../components/Layout';
import styles from '../styles/pages/registration.module.scss';

const Registration = (): React.ReactElement => {
  const router = useRouter();
  const userData = useSelector((state: AppState) => state.Authentication);

  let content = (
    <>
      <Carousel names={['background-room-1.webp', 'background-room-4.webp']} />
      <RegistrationCard />{' '}
    </>
  );

  if (userData.isAuthenticated) {
    router.push('/');
    content = (
      <div className={styles.spinContainer}>
        <Spin />
      </div>
    );
  }

  return (
    <Layout title="registration page" pageClass={styles.registration}>
      {content}
    </Layout>
  );
};

export default Registration;
