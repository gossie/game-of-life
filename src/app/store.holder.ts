import { Injectable } from '@angular/core';
import { combineReducers, createStore } from 'redux';
import { FieldReducers } from './field/field.reducers';

@Injectable()
export class StoreHolder {

    private store;

    constructor(private fieldReducers: FieldReducers) {
        this.store = createStore(combineReducers(fieldReducers.getReducers()));
    }

    public dispatch(action): void {
        this.store.dispatch(action);
    }

    public getState() {
        return this.store.getState();
    }
}
