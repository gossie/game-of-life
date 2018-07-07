import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GameService } from './game.service';
import { Options } from '../options/options';
import { GamePausedEvent } from './game-paused.event';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {

    isRunning: boolean;
    nextAvailable: boolean;
    prevAvailable: boolean;

    private timeout: number;

    constructor(private gameService: GameService) {
        gameService.observeOptions()
            .pipe(
                filter(options => options.tick > 0)
            )
            .subscribe(options => this.handleOptionChange(options));

        gameService.observeGameState()
            .pipe(
                filter(event => event instanceof GamePausedEvent)
            )
            .subscribe((event: GamePausedEvent) => this.handlePauseEvent(event));
    }

    private handleOptionChange(options: Options): void {
        if (this.timeout !== options.tick) {
            this.timeout = options.tick;
            if (this.isRunning) {
                this.pauseGame();
                this.startGame();
            }
        }
    }

    private handlePauseEvent(event: GamePausedEvent): void {
        this.prevAvailable = event.isPrevAvailable();
        this.nextAvailable = event.isNextAvailable();
    }

    public startGame(): void {
        this.gameService.startGame(this.timeout);
        this.isRunning = true;
    }

    public pauseGame(): void {
        this.gameService.pauseGame();
        this.isRunning = false;
    }

    public clear(): void {

    }

    public next(): void {
        this.gameService.next();
    }

    public prev(): void {
        this.gameService.prev();
    }
}
