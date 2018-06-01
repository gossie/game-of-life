import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import {GameRunningEvent} from './game-running-event';
import {GameEvent} from './game-event';
import {GameStartedEvent} from './game-started-event';
import {GamePausedEvent} from './game-paused-event';

@Injectable()
export class GameService {

    private timer: Subject<GameEvent> = new Subject();
    private subscription: Subscription;

    constructor() { }

    public observe(): Observable<GameEvent> {
        return this.timer.asObservable();
    }

    public startGame(timeout: number): void {
        this.timer.next(new GameStartedEvent());
        this.subscription = interval(timeout).subscribe(value => this.timer.next(new GameRunningEvent(value)));
    }

    public pauseGame(): void {
        this.timer.next(new GamePausedEvent());
        this.subscription.unsubscribe();
    }
}
