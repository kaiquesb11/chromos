import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"
import type { HomeProps } from "../../pages/Home"

export function MainForm({state, setState}: HomeProps) {
    function handleClic(){
        setState(prevState =>{
            return {
                ...prevState,
                config: {
                    ...prevState.config,
                    workTime: 34,
                },
                formattedSecondsRemaining: "23:34",
            };
        });
    }

    return (
        <form className='form' action="">
            <div>
                <button type="button" onClick={handleClic}>Clicar</button>
            </div>
                    <div className='formRow'>
                        <DefaultInput 
                        id="meuInput" 
                        type="text" 
                        labelText="Task"
                        placeholder='Digite Aqui' //Texto dentro do formulário
                        />
                    </div>

                    <div className='formRow'>
                        <p>Próximo intervalo é daqui {state.config.workTime}min</p>
                    </div>

                    <div className='formRow'>
                        <Cycles />
                    </div>

                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>
                </form>
    )
}