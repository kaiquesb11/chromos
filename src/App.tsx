/* Components */
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';

/* Styles */
import './styles/global.css';
import './styles/theme.css';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';


/* App */
export function App() {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>       

            <Container>
                <CountDown />
            </Container>  

            <Container>
                <form className='form' action="">
                    <div className='formRow'>
                        <DefaultInput 
                        id="meuInput" 
                        type="text" 
                        labelText='Task' 
                        placeholder='Digite Algo' //Texto dentro do formulário
                        />
                    </div>

                    <div className='formRow'>
                        <p>teste fomulário</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>

                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon />} color="green" />
                        <DefaultButton icon={<StopCircleIcon />} color="red" />
                    </div>
                </form>
            </Container>      
        </>
    );
    
}
