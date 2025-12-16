import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { PlayCircleIcon } from "lucide-react"
import { Cycles } from "../Cycles"

export function MainForm() {
    return (
        <form className='form' action="">
                    <div className='formRow'>
                        <DefaultInput 
                        id="meuInput" 
                        type="text" 
                        labelText="Task"
                        placeholder='Digite Aqui' //Texto dentro do formulário
                        />
                    </div>

                    <div className='formRow'>
                        <p>teste fomulário</p>
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