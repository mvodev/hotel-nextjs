import { useDispatch } from 'react-redux';
import setUserInHeader from 'src/redux/Header/HeaderActions';

const HeaderButton = (): React.ReactElement => {
  const dispatch = useDispatch();
  const handlerButtonReduxHeader=()=>{
    dispatch( setUserInHeader({isAuthorized:true,name:'Vadim',surname:'Manushin'}));
  };

  return (<button type='button' onClick={handlerButtonReduxHeader}>
    Нажми меня и узришь ты чудо стором Redux дарованное
    </button>)
};

export default HeaderButton;