import {Observable} from '../../../node_modules/rxjs';
import {GameEvent} from './game.event';

export interface GameServiceInterface {

    observe(): Observable<GameEvent>;

    startGame(timeout: number): void;

    pauseGame(): void;
}
