import { Injectable } from '@angular/core';
import { combineReducers, createStore, Store, Unsubscribe } from 'redux';
import { FieldReducers } from './field/field.reducers';

@Injectable()
export class StoreHolder {

    private store: Store;

    constructor(private fieldReducers: FieldReducers) {
        this.store = createStore(combineReducers(fieldReducers.getReducers()));
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
