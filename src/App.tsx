/* Components */
import { Container } from './components/Container';
import { Menu } from './components/Menu';
import { Logo } from './components/Logo';
import { CountDown } from './components/CountDown';

/* Styles */
import './styles/global.css';
import './styles/theme.css';


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
                        <label htmlFor="MeuInput">task</label>
                        <input id='meuImput' type='text' />
                    </div>

                    <div className='formRow'>
                        <p>teste fomulário</p>
                    </div>

                    <div className='formRow'>
                        <p>ciclos</p>
                        <p>0 0 0 0</p>
                    </div>

                    <div className='formRow'>
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>      
        </>
    );
    
}
