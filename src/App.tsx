import './styles/global.css';
import './styles/theme.css';
import { TimerIcon } from 'lucide-react';

import { Heading } from './components/Heading';


export function App() {
    return (
        <>
            <Heading>
                <button>
                    <TimerIcon /> 
                </button>
                Hello World
            </Heading>

            <p>This is a paragraph</p>
        </>
    )
}
