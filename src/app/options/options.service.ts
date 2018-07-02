import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Options } from './options';
import { optionChange } from './actions';
import { StoreHolder } from '../store.holder';
import { OptionsServiceInterface } from './options.service.interface';

@Injectable()
export class OptionsService implements OptionsServiceInterface {

    private gameState: Subject<boolean> = new Subject();

    constructor(private store: StoreHolder) {
        store.subscribe(() => this.gameState.next(store.getState().game.gameRunning));
    }

    public observeGameState(): Observable<boolean> {
        return this.gameState.asObservable();
    }

    public notify(options: Options): void {
        this.store.dispatch(optionChange(options));
    }

}
