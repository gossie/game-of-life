import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { OptionsComponent } from './options/options.component';
import { OptionsService } from './options/options.service';
import { GameService } from './game/game.service';


@NgModule({
    declarations: [
        AppComponent,
        FieldComponent,
        OptionsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [OptionsService, GameService],
    bootstrap: [AppComponent]
})
export class AppModule { }
