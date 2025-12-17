/* Componentes */
import { MainTemplate } from "../../Templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { Container } from "../../components/Container";
import type { TaskStateModel } from "../../Models/TaskStateModel";

export type HomeProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

/* App */
export function Home( props: HomeProps ) {
    return (
        <MainTemplate>
            <Container>
                <CountDown {...props}/>
            </Container>  

            <Container> 
                <MainForm {...props} />
            </Container>
        </MainTemplate>
    );
}