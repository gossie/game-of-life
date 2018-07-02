import {Options} from './options';
import {Observable} from '../../../node_modules/rxjs';

export interface OptionsServiceInterface {

    observe(): Observable<Options>;

    observeGameState(): Observable<boolean>;

    notify(options: Options): void;
}
