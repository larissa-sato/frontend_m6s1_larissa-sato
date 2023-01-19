import {ValueDiv} from './styles';
import { useContext } from 'react';
import { CalculateContext } from '../../context/calculateContext';


const DivValue = () => {
    
    const {values} = useContext(CalculateContext)

    let newValue = Object.values(values)

      
    return(
        <ValueDiv>
            <u>
            <h2>VOCÊ RECEBERÁ:</h2>
            </u>

            <li>Amanhã: R$ {`${newValue[0]}`}</li>
            <li>Em 15 dias: R$ {`${newValue[1]}`}</li>
            <li>Em 30 dias: R$ {`${newValue[2]}`}</li>
            <li>Em 90 dias: R$ {`${newValue[3]}`}</li>   
        </ValueDiv>
    )
};

export default DivValue