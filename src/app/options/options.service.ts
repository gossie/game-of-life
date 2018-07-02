import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Options } from './options';
import { optionChange } from './actions';
import { StoreHolder } from '../store.holder';

@Injectable()
export class OptionsService {

    private subject: Subject<Options> = new Subject();
    private gameState: Subject<boolean> = new Subject();

    constructor(private store: StoreHolder) {
        store.subscribe(() => this.gameState.next(store.getState().game.gameRunning));
    }

    // TODO: remove
    public observe(): Observable<Options> {
        return this.subject.asObservable();
    }

    public observeGameState(): Observable<boolean> {
        return this.gameState.asObservable();
    }

    public notify(options: Options): void {
        this.subject.next(options);
        this.store.dispatch(optionChange(options));
    }

}
