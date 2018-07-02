import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Options } from './options';
import {OptionsServiceInterface} from './options.service.interface';

@Injectable()
export class OptionsServiceMock implements OptionsServiceInterface {

    observeGameState(): Observable<boolean> {
        return new Observable(() => {});
    }

    observe(): Observable<Options> {
        return new Observable(() => {});
    }

    notify(options: Options): void {}

}
