import {ValueDiv} from './styles';
import api from '../../services';


const DivValue = () => {

    return(
        <ValueDiv>
            <h2>VOCÊ RECEBERÁ:</h2>
            <p>Amanhã: {`R$ ${api}`}</p>
            <p>Em 15 dias: {`R$ ${api}`}</p>
            <p>Em 30 dias: {`R$ ${api}`}</p>
            <p>Em 90 dias: {`R$ ${api}`}</p>
        </ValueDiv>
    )
};

export default DivValue