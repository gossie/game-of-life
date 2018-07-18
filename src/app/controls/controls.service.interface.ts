import { Observable } from '../../../node_modules/rxjs';
import { GameEvent } from './game.event';
import { Options } from '../options/options';

export interface ControlsServiceInterface {

    observeGameState(): Observable<GameEvent>;

    observeOptions(): Observable<Options>;

    startGame(timeout: number): void;

    pauseGame(): void;
}
