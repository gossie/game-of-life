import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ControlsService } from './controls.service';
import { Options } from '../options/options';
import { GamePausedEvent } from './game-paused.event';

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

    isRunning: boolean;
    nextAvailable: boolean;
    prevAvailable: boolean;

    private timeout: number;

    constructor(private gameService: ControlsService) {
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
        this.gameService.clear();
    }

    public next(): void {
        this.gameService.next();
    }

    public prev(): void {
        this.gameService.prev();
    }
}
