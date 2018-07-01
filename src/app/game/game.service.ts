import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { interval } from 'rxjs/observable/interval';
import { StoreHolder } from '../store.holder';
import { startGame, gameRunning, pauseGame } from './actions'

@Injectable()
export class GameService {
    
    private subscription: Subscription;

    constructor(private store: StoreHolder) { }

    public startGame(timeout: number): void {
        this.store.dispatch(startGame());
        this.subscription = interval(timeout).subscribe(value => this.store.dispatch(gameRunning(value)));
    }

    public pauseGame(): void {
        this.store.dispatch(pauseGame());
        this.subscription.unsubscribe();
    }
}
