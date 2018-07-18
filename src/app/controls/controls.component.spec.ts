import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { ControlsComponent } from './controls.component';
import { ControlsService } from './controls.service';
import { ControlsServiceMock } from './controls.service.mock';
import {Options} from '../options/options';
import {GameStartedEvent} from './game-started.event';

describe('ControlsComponent', () => {
    let component: ControlsComponent;
    let fixture: ComponentFixture<ControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ControlsComponent ],
            providers: [
                { provide: ControlsService, useClass: ControlsServiceMock }
            ]
        }).compileComponents();
    }));

    it('should check if game is running', inject([ControlsService], (service: ControlsService) => {
        const options: Options = {
            width: 15,
            height: 10,
            tick: 500,
            random: 0
        };

        spyOn(service, 'observeOptions').and.returnValue(Observable.of([options]));
        spyOn(service, 'observeGameState').and.returnValue(Observable.of([new GameStartedEvent()]));

        fixture = TestBed.createComponent(ControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.startGame();
        expect(component.isRunning).toBe(true);

        component.pauseGame();
        expect(component.isRunning).toBe(false);
    }));
});
