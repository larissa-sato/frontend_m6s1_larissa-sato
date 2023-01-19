import {Container} from './styles'
import {FormCalculator} from '../Form';
import DivValue from "../ValueInfos";


const Dashboard = () => {

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

export default Dashboard