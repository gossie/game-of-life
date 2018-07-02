import { Injectable } from '@angular/core';
import { combineReducers, createStore, Store, Unsubscribe } from 'redux';
import { FieldReducers } from './field/field.reducers';
import { OptionsReducers } from './options/options.reducers';
import { StoreHolderInterface } from './store.holder.interface';

@Injectable()
export class StoreHolder implements StoreHolderInterface {

    private store: Store;

    constructor(private fieldReducers: FieldReducers,
                private optionsReducers: OptionsReducers) {
        const field = fieldReducers.getReducers();
        const options = optionsReducers.getReducers();
        this.store = createStore(combineReducers({...field, ...options}));
    }

    public dispatch(action): void {
        this.store.dispatch(action);
    }

    public getState(): any {
        return this.store.getState();
    }

    public subscribe(listener: () => void): Unsubscribe {
        return this.store.subscribe(listener);
    }
}
