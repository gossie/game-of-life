import { Injectable } from '@angular/core';
import { StoreHolder } from '../store.holder';
import { Observable ,  Subject } from 'rxjs';
import { Field } from './field';

@Injectable()
export class FieldService {

    private fields: Subject<Field> = new Subject();

    constructor(store: StoreHolder) {
        store.subscribe(() => this.fields.next(store.getState().tick.currentField));
    }

    public observe(): Observable<Field> {
        return this.fields.asObservable();
    }
}
