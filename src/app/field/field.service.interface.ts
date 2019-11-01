import { Observable } from 'rxjs';
import { Field } from './field';

export interface FieldServiceInterface {

    observe(): Observable<Field>;
}
