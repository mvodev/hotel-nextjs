import { useRouter } from 'next/router';
import { RootState } from 'src/redux/reduces';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel/Carousel';
import SignInCard from '../components/SignInCard/SignInCard';
import styles from '../styles/pages/signIn.module.sass';

const SignIn = (): React.ReactElement => {

  const router = useRouter();

  const { isAuthenticated } = {
    ...useSelector((state: RootState) => state.Authentication),
  };

    useEffect(()=>{
    if(isAuthenticated){
      router.push('/');
    }
  });

  return (<Layout title='Sign In' pageClass={styles.signIn}>
    <Carousel names={['background-room-1.webp', 'background-room-4.webp']} />
    <SignInCard />
  </Layout>)
};

export default SignIn;
