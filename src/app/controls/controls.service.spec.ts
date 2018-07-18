import { TestBed, inject } from '@angular/core/testing';
import { ControlsService } from './controls.service';
import { GameStartedEvent } from './game-started.event';
import { GameRunningEvent } from './game-running.event';
import { GamePausedEvent } from './game-paused.event';
import { StoreHolder } from '../store.holder';
import { StoreHolderMock } from '../store.holder.mock';
import {Store} from 'redux';
import Spy = jasmine.Spy;

describe('ControlsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: StoreHolder, useClass: StoreHolderMock },
                ControlsService
            ]
        });
    });

    it('should be created', inject([ControlsService], (service: ControlsService) => {
        expect(service).toBeTruthy();
    }));

    it('should listen to events', done => {
        inject([ControlsService, StoreHolder], (service: ControlsService, store: StoreHolder) => {
            spyOn(store, 'getState').and.returnValue({
                tick: {
                    pastFields: [],
                    futureFields: []
                }
            });

            let index = 0;
            service.observeGameState().subscribe(event => {
                if (index === 0) {
                    index++;
                    expect(event).toEqual(new GameStartedEvent());
                } else if (index === 1) {
                    index++;
                    expect(event).toEqual(new GameRunningEvent(0));
                    service.pauseGame();
                } else if (index === 2) {
                    index++;
                    expect(event).toEqual(new GamePausedEvent(false, false));
                    done();
                }
            });

            service.startGame(500);
        })();
    });

    it('call clear', done => {
        inject([ControlsService, StoreHolder], (service: ControlsService, store: StoreHolder) => {
            spyOn(store, 'getState').and.returnValue({
                tick: {
                    pastFields: [],
                    futureFields: []
                }
            });
            const dispatchSpy: Spy = spyOn(store, 'dispatch');

            service.observeGameState().subscribe(event => {
                expect(event).toEqual(new GamePausedEvent(false, false));
                done();
            });

            service.clear();

            expect(dispatchSpy).toHaveBeenCalledWith({type: 'clear'});
        })();
    });
});
