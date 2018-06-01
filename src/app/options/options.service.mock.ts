import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Options } from './options';

@Injectable()
export class OptionsServiceMock {

    constructor() {}

    public observe(): Observable<Options> {
        return new Observable(() => {});
    }

    public notify(options: Options): void {}

}
