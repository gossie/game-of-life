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

interface NextAction {
    type: string;
}

interface PrevAction {
    type: string;
}

interface ClearAction {
    type: string;
}

export const START_GAME = 'startGame';
export const GAME_RUNNING = 'gameRunning';
export const PAUSE_GAME = 'pauseGame';
export const NEXT = 'next';
export const PREV = 'prev';
export const CLEAR_FIELD = 'clear';

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

export function next(): PauseAction {
    return {
        type: NEXT
    };
}

export function prev(): PauseAction {
    return {
        type: PREV
    };
}

export function clear(): PauseAction {
    return {
        type: CLEAR_FIELD
    };
}
