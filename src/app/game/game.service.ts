import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { StoreHolder } from '../store.holder';
import { startGame, gameRunning, pauseGame } from './actions'
import { GameEvent } from './game.event';
import { GameStartedEvent } from './game-started.event';
import { GamePausedEvent } from './game-paused.event';
import {GameRunningEvent} from './game-running.event';
import {GameServiceInterface} from './game.service.interface';
import {Options} from '../options/options';

@Injectable()
export class GameService implements GameServiceInterface {

    private timer: Subject<GameEvent> = new Subject();
    private options: Subject<Options> = new Subject();
    private subscription: Subscription;

    constructor(private store: StoreHolder) { }

    public observeGameState(): Observable<GameEvent> {
        return this.timer.asObservable();
    }

    public observeOptions(): Observable<Options> {
        return this.options.asObservable();
    }

    public startGame(timeout: number): void {
        this.store.dispatch(startGame());
        this.timer.next(new GameStartedEvent());
        this.subscription = interval(timeout).subscribe(value => {
            this.store.dispatch(gameRunning(value));
            this.timer.next(new GameRunningEvent(value));
        });
    }

    public pauseGame(): void {
        this.store.dispatch(pauseGame());
        this.timer.next(new GamePausedEvent());
        this.subscription.unsubscribe();
    }
}
