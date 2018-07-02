import { Injectable } from '@angular/core';
import { START_GAME, PAUSE_GAME } from '../game/actions';

interface State {
    gameRunning: boolean
}

@Injectable()
export class OptionsReducers {

    private static onGameEvent(state: State = { gameRunning: false }, action): State {
        switch(action.type) {
            case START_GAME: return { gameRunning: true };
            case PAUSE_GAME: return { gameRunning: false };
            default: return state;
        }
    }

    public getReducers() {
        return {
            game: OptionsReducers.onGameEvent
        };
    }
}
