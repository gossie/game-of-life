import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GameService } from './game/game.service';
import { OptionsService } from './options/options.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

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
}
