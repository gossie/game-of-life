import { Options } from './options';
import { Observable } from '../../../node_modules/rxjs';

export interface OptionsServiceInterface {

    observeGameState(): Observable<boolean>;

    notify(options: Options): void;
}
