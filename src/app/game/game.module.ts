import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './game.service';
import { GameComponent } from './game.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        GameComponent
    ],
    exports: [
        GameComponent
    ],
    providers: [
        GameService
    ]
})
export class GameModule { }
