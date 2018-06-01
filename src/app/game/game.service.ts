import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { interval } from 'rxjs/observable/interval';

@Injectable()
export class GameService {

    private timer: Subject<number> = new Subject();
    private subscription: Subscription;

    constructor() { }

    public observe(): Observable<number> {
        return this.timer.asObservable();
    }

    public startGame(timeout: number): void {
        this.subscription = interval(timeout).subscribe(value => this.timer.next(value));
    }

    public stopGame(): void {
        this.subscription.unsubscribe();
    }
}
