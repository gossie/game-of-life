import { FieldServiceInterface } from './field.service.interface';
import { Observable } from 'rxjs';
import { Field } from './field';

export class FieldServiceMock implements FieldServiceInterface {

    observe(): Observable<Field> {
        return new Observable<Field>(() => {});
    }

}
