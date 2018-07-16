import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ControlsService } from './controls/controls.service';
import { OptionsService } from './options/options.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
}
