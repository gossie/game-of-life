import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GameService } from './game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {

    isRunning = false;

    private timeout: number;

    constructor(private gameService: GameService) {
        gameService.observeOptions()
            .pipe(
                filter(options => options.tick > 0)
            )
            .subscribe(options => {
                if (this.timeout !== options.tick) {
                    this.timeout = options.tick;
                    if (this.isRunning) {
                        this.pauseGame();
                        this.startGame();
                    }
                }
            });
    }

    public startGame(): void {
        this.gameService.startGame(this.timeout);
        this.isRunning = true;
    }

    public pauseGame(): void {
        this.gameService.pauseGame();
        this.isRunning = false;
    }

    public next(): void {
        this.gameService.next();
    }

    public prev(): void {
        this.gameService.prev();
    }
}
