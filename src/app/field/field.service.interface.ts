import { Observable } from 'rxjs/Observable';
import { Field } from './field';

export interface FieldServiceInterface {

    observe(): Observable<Field>;
}
