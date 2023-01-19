import {ValueDiv} from './styles';
import { useContext } from 'react';
import { CalculateContext } from '../../context/calculateContext';


const DivValue = () => {
    
    const {values} = useContext(CalculateContext)
    let newValue = Object.values(values)
         
    return(
        <ValueDiv>
            <>
            {newValue.length > 0 ? (
                <>
                <u>
                <h2>VOCÊ RECEBERÁ:</h2>
                </u>
    
                <li>Amanhã: R$ {`${newValue[0]}`},00</li>
                <li>Em 15 dias: R$ {`${newValue[1]}`},00</li>
                <li>Em 30 dias: R$ {`${newValue[2]}`},00</li>
                <li>Em 90 dias: R$ {`${newValue[3]}`},00</li>   
            </>
            ) : (
            <>
                <u>
                <h2>VOCÊ RECEBERÁ:</h2>
                </u>
    
                <li>Amanhã: R$ 0,00</li>
                <li>Em 15 dias: R$ 0,00</li>
                <li>Em 30 dias: R$ 0,00</li>
                <li>Em 90 dias: R$ 0,00</li>   
            </>
            )
            }
            </>
        </ValueDiv>
    )
};

export default DivValue