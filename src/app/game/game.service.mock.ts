import { GameServiceInterface } from './game.service.interface';
import { Observable } from 'rxjs/Observable';
import { GameEvent } from './game.event';
import { Options } from '../options/options';

export class GameServiceMock implements GameServiceInterface {

    observeGameState(): Observable<GameEvent> {
        return new Observable<GameEvent>(() => {});
    }

    observeOptions(): Observable<Options> {
        return new Observable<Options>(() => {});
    }

    startGame(timeout: number): void { }

    pauseGame(): void { }

}
