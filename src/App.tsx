/* Components */
import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

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
                <Heading> Menu </Heading>
            </Container>           
        </>
    );
    
}
