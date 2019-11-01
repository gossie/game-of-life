import { ControlsServiceInterface } from './controls.service.interface';
import { Observable } from 'rxjs';
import { GameEvent } from './game.event';
import { Options } from '../options/options';

export class ControlsServiceMock implements ControlsServiceInterface {

    observeGameState(): Observable<GameEvent> {
        return new Observable<GameEvent>(() => {});
    }

    observeOptions(): Observable<Options> {
        return new Observable<Options>(() => {});
    }

    startGame(timeout: number): void { }

    pauseGame(): void { }

}
