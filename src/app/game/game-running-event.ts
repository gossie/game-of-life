import {GameEvent} from './game-event';

export class GameRunningEvent implements GameEvent {

    private tick: number;

    constructor(tick: number) {
        this.tick = tick;
    }

    public getTick(): number {
        return this.tick;
    }
}
