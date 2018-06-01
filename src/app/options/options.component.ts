import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Options } from './options';
import {GameService} from '../game/game.service';
import {GameEvent} from '../game/game-event';
import {GameStartedEvent} from '../game/game-started-event';
import {GamePausedEvent} from '../game/game-paused-event';
import {GameStoppedEvent} from '../game/game-stopped-event';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    public gameRunning: boolean = false;

    options: Options = {
        width: 25,
        height: 17,
        tick: 500,
        random: 0
    };

    constructor(private optionsService: OptionsService,
                private gameService: GameService) {
    }

    public ngOnInit(): void {
        this.optionsService.notify(this.options);
        this.gameService.observe().subscribe(event => this.onGameEvent(event));
    }

    public onOptionsChange(): void {
        this.optionsService.notify(this.options);
    }

    private onGameEvent(gameEvent: GameEvent): void {
        if (gameEvent instanceof GameStartedEvent) {
            this.gameRunning = true;
        } else if ((gameEvent instanceof GamePausedEvent) || (gameEvent instanceof GameStoppedEvent)) {
            this.gameRunning = false;
        }
    }

}
