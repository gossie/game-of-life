import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { from } from 'rxjs';
import { FieldComponent } from './field.component';
import { Cell } from './cell';
import { Status } from './status';
import { FieldService } from './field.service';
import { FieldServiceMock } from './field.service.mock';
import { Field } from './field';

describe('FieldComponent', () => {
    let component: FieldComponent;
    let fixture: ComponentFixture<FieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FieldComponent ],
            providers: [
                { provide: FieldService, useClass: FieldServiceMock }
            ]
        })
        .compileComponents();
    }));

    it('should initialize cells', inject([FieldService], (service: FieldService) => {
        const field: Field = new Field(0, 100, 75);
        spyOn(service, 'observe').and.returnValue(from([field]));

        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        expect(component.field.getCells().length).toBe(75);
        component.field.getCells().forEach(row => expect(row.length).toBe(100));

        for (let i = 0; i < 75; i++) {
            for (let j = 0; j < 100; j++) {
                const cell: Cell = component.field.getCells()[i][j];

                expect(cell.getX()).toBe(j);
                expect(cell.getY()).toBe(i);
                expect(cell.getStatus()).toBe(Status.DEAD);
            }
        }
    }));

    it('should change cells status', inject([FieldService], (service: FieldService) => {
        const field: Field = new Field(0, 100, 75);
        spyOn(service, 'observe').and.returnValue(from([field]));

        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.onSelect(component.field.getCells()[4][5]);
        expect(component.field.getCells()[4][5].getStatus()).toBe(Status.ALIVE);

        component.onSelect(component.field.getCells()[4][5]);
        expect(component.field.getCells()[4][5].getStatus()).toBe(Status.DEAD);
    }));
});
