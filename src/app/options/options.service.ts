import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Options } from './options';

@Injectable()
export class OptionsService {

    private subject: Subject<Options> = new Subject();

    constructor() { }

    public observe(): Observable<Options> {
        return this.subject.asObservable();
    }

    public notify(options: Options): void {
        this.subject.next(options);
    }

}
