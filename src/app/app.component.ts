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
}
