import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game.component';
import {ControlsModule} from '../controls/controls.module';
import {FieldModule} from '../field/field.module';
import {OptionsModule} from '../options/options.module';

@NgModule({
    declarations: [
        GameComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ControlsModule,
        OptionsModule,
        FieldModule,
    ],
    exports: [
        GameComponent
    ]
})
export class GameModule { }
