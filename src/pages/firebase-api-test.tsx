/* eslint-disable no-console */
import type { ReactElement } from 'react';
import { RoomType } from 'src/firebaseAPI/Types';
import Layout from '../components/Layout';
import firebaseAPI from '../firebaseAPI/firebaseAPI';
import { useDispatch } from 'react-redux';

const Index = (): ReactElement => {
  const action = {
    type: 'ADD_BOOK',
    payload: {
      userID: '0n0juvZREvSNDNYJvS2rQjcf3Ei1',
      roomID: '0L36vxMETKuBYt3i8BqU',
      dates: [new Date(2022, 0, 5), new Date(2022, 0, 15)],
    },
  };
  const dispatch = useDispatch();

  dispatch(action);
  return <Layout title='landing page' pageClass='landing'></Layout>;
};

const Index = (): ReactElement => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <Layout title='landing page' pageClass='landing'>
    // eslint-disable-next-line no-console
    {console.log(
    //   firebaseAPI.addCommentAndUpdateImpressions({
    //     uid:'',
    //     roomID:'1GIK6z75Unitldt5NBiH',
    //     score: 'perfect',
    //     text:'addCommentAndUpdateInpressions test',
    //     userName: 'addCommentAndUpdateInpressions test',
    //   }
    // )
    //    firebaseAPI.getComments()
    // firebaseAPI.removeLikeFromComment('OIrngLITsgiMDXVT9pOc','0n0juvZREvSNDNYJvS2rQjcf3Ei1')
    firebaseAPI.addComment({
      uid:'test',
      roomID:'test',
      score: 'perfect',
      text:'test',
      userName:'test',
    }))  
  }
  </Layout>
);

export default Index;
