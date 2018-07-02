import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GameService } from './game.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        GameService
    ]
})
export class GameModule { }
