import { Injectable } from '@angular/core';
import { PAUSE_GAME, START_GAME } from '../game/actions';
import { Reducers } from '../reducer.interface';

interface State {
    gameRunning: boolean;
}

@Injectable()
export class OptionsReducers implements Reducers {

    private static readonly STATES: Map<string, any> = new Map([
        [START_GAME, { gameRunning: true }],
        [PAUSE_GAME, { gameRunning: false }]
    ]);

    private static onGameEvent(state: State = { gameRunning: false }, action): State {
        const newState: any = OptionsReducers.STATES.get(action.type);
        if (newState === undefined) {
            return state;
        }
        return newState;
    }

    public getReducers() {
        return {
            game: OptionsReducers.onGameEvent
        };
    }
}
