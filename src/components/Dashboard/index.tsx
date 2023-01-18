import Container from './styles'
import FormCalculator from '../Form';
import { Button } from '../Button/styles';
import DivValue from "../ValueInfos";


const Main = () => {

    return(
        
        <Container>
            
            <div className='divCalculator'>

                <div className='divForm'>
                <FormCalculator/>
                </div>

            <DivValue/>
            </div>

        </Container>
        
    ) 
}

export default Main