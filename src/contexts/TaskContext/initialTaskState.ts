import type { TaskStateModel } from "../../Models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,    // 25 minutos em segundos
        shortBreakTime: 5,  // 5 minutos
        longBreakTime: 15,  // 15 minutos
    },
};