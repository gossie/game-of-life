interface StartAction {
    type: string;
}

interface RunningAction {
    type: string;
    tick: number;
}

interface PauseAction {
    type: string;
}

export const START_GAME = 'startGame';
export const GAME_RUNNING = 'gameRunning';
export const PAUSE_GAME = 'pauseGame';

export function startGame(): StartAction {
    return {
        type: START_GAME
    };
}

export function gameRunning(tick: number): RunningAction {
    return {
        type: GAME_RUNNING,
        tick: tick
    };
}

export function pauseGame(): PauseAction {
    return {
        type: PAUSE_GAME
    };
}
