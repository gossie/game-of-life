import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { GameService } from '../game/game.service';
import { OptionsService } from '../options/options.service';
import { OptionsServiceMock } from '../options/options.service.mock';
import { FieldComponent } from './field.component';
import { Cell } from './cell';
import { Status } from './status';

describe('FieldComponent', () => {
    let component: FieldComponent;
    let fixture: ComponentFixture<FieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FieldComponent ],
            providers: [
                GameService,
                { provide: OptionsService, useClass: OptionsServiceMock }
            ]
        })
        .compileComponents();
    }));

    it('should initialize cells', inject([OptionsService], (service: OptionsService) => {
        spyOn(service, 'observe').and.returnValue(Observable.from([{width: 100, height: 75}]));

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

    it('should change cells status', inject([OptionsService], (service: OptionsService) => {
        spyOn(service, 'observe').and.returnValue(Observable.from([{width: 10, height: 10}]));

        fixture = TestBed.createComponent(FieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.onSelect(component.field.getCells()[4][5]);
        expect(component.field.getCells()[4][5].getStatus()).toBe(Status.ALIVE);

        component.onSelect(component.field.getCells()[4][5]);
        expect(component.field.getCells()[4][5].getStatus()).toBe(Status.DEAD);
    }));
});
