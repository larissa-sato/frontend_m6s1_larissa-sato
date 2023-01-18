import {ValueDiv} from './styles';
import api from '../../services';


const DivValue = () => {

    return(
        <ValueDiv>
            <h2>VOCÊ RECEBERÁ:</h2>
            <p>Amanhã: R$</p>
            <p>Em 15 dias: R$</p>
            <p>Em 30 dias: R$</p>
            <p>Em 90 dias: R$</p>
        </ValueDiv>
    )
};

export default DivValue