import { useDispatch } from 'react-redux';
import { setAuthenticated, setUser } from 'src/redux/Slices/Authentication/AuthenticationActions';


const HeaderButton = (): React.ReactElement => {
  const dispatch = useDispatch();
  const handlerButtonReduxHeader=()=>{
    dispatch(setAuthenticated(true));
    dispatch(setUser({name:'Vadim',surname:'Manushin',uid:null}))
  };

  return (<button type='button' onClick={handlerButtonReduxHeader}>
    Нажми меня и узришь ты чудо стором Redux дарованное
    </button>)
};

export default HeaderButton;