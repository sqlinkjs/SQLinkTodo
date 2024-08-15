import { Text } from '@chakra-ui/react'
import logo from './../../assets/todologo.png';

function AppHeader() {
    return (
        <center>
            <img src={logo} alt="img" height={70} width={70}/>
            <Text style={{fontWeight:'bold',fontSize:'20px'}}>SQLink Todo App</Text>
        </center>
    )
}

export default AppHeader