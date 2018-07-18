import { GameEvent } from './game.event';

export class GamePausedEvent implements GameEvent {

    private readonly prevAvailable: boolean;
    private readonly nextAvailable: boolean;

    constructor(prevAvailable: boolean, nextAvailable: boolean) {
        this.prevAvailable = prevAvailable;
        this.nextAvailable = nextAvailable;
    }

    public isPrevAvailable(): boolean {
        return this.prevAvailable;
    }

    public isNextAvailable(): boolean {
        return this.nextAvailable;
    }
}
