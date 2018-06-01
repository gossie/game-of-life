import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Options } from './options';
import {GameService} from '../game/game.service';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

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
        // TODO: subscribe to GameService
    }

    public onOptionsChange(): void {
        this.optionsService.notify(this.options);
    }

}
