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
        </>
    );
    
}
