import { DefaultInput } from "../DefaultInput";
import { DefaultButton } from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react"; // ← "lucide-react" minúsculo
import { Cycles } from "../Cycles";

export function MainForm() {
    return ( // ← Parênteses, não chaves
        <form className='form' action="">
            <div className='formRow'>
                <DefaultInput
                    id="meuInput"
                    type="text"
                    labelText="Task"
                    placeholder='Digite Aqui'
                />
            </div>

            <div className='formRow'>
                <p>Próximo intervalo é daqui 25min</p>
            </div>

            <div className='formRow'>
                <Cycles />
            </div>

            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>
        </form>
    );
}