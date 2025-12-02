import './styles/global.css';
import './styles/theme.css';
import { Heading } from './components/Heading';

export function App() {
    console.log("Oi, Aloka!");

    return (
        <>
            <Heading attr={123} attr2="string">
            Oi, Aloka!
            </Heading>
            <p>This is a paragraph</p>
        </>
    )
}
