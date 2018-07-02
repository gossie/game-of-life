import { TestBed, inject } from '@angular/core/testing';
import { GameService } from './game.service';
import { GameStartedEvent } from './game-started.event';
import { GameRunningEvent } from './game-running.event';
import { GamePausedEvent } from './game-paused.event';
import {StoreHolder} from '../store.holder';
import {StoreHolderMock} from '../store.holder.mock';

describe('GameService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: StoreHolder, useClass: StoreHolderMock },
                GameService
            ]
        });
    });

    it('should be created', inject([GameService], (service: GameService) => {
        expect(service).toBeTruthy();
    }));

    it('should listen to events', done => {
        inject([GameService], (service: GameService) => {
            let index = 0;
            service.observe().subscribe(event => {
                if (index === 0) {
                    index++;
                    expect(event).toEqual(new GameStartedEvent());
                } else if (index === 1) {
                    index++;
                    expect(event).toEqual(new GameRunningEvent(0));
                    service.pauseGame();
                } else if (index === 2) {
                    index++;
                    expect(event).toEqual(new GamePausedEvent());
                    done();
                }
            });

            service.startGame(500);
        })();
    });
});
