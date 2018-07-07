import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { GameComponent } from './game.component';
import { GameService } from './game.service';
import { GameServiceMock } from './game.service.mock';
import {Options} from '../options/options';
import {GameStartedEvent} from './game-started.event';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ GameComponent ],
            providers: [
                { provide: GameService, useClass: GameServiceMock }
            ]
        }).compileComponents();
    }));

    it('should check if game is running', inject([GameService], (service: GameService) => {
        const options: Options = {
            width: 15,
            height: 10,
            tick: 500,
            random: 0
        };

        spyOn(service, 'observeOptions').and.returnValue(Observable.of([options]));
        spyOn(service, 'observeGameState').and.returnValue(Observable.of([new GameStartedEvent()]));

        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        component.startGame();
        expect(component.isRunning).toBe(true);

        component.pauseGame();
        expect(component.isRunning).toBe(false);
    }));
});
