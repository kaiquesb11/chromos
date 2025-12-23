import type { TaskStateModel } from "../../Models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 1,
    config: {
        workTime: 25 * 60,    // 25 minutos em segundos
        shortBreakTime: 5 * 60,  // 5 minutos
        longBreakTime: 15 * 60,  // 15 minutos
    },
};