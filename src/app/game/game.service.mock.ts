import {GameServiceInterface} from './game.service.interface';
import {Observable} from 'rxjs/Observable';
import {GameEvent} from './game.event';

export class GameServiceMock implements GameServiceInterface {

    observe(): Observable<GameEvent> {
        return new Observable<GameEvent>(() => {});
    }

    startGame(timeout: number): void { }

    pauseGame(): void { }

}
