/* Componentes */
import { MainTemplate } from "../../Templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";

/* App */
export function Home() {
    return (
        <MainTemplate>

            <Container>
                <CountDown />
            </Container>  

            <Container> 
                <MainForm />
            </Container>

        </MainTemplate>
    );
}