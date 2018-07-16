import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ControlsService } from './controls.service';
import { ControlsComponent } from './controls.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        ControlsComponent
    ],
    exports: [
        ControlsComponent
    ],
    providers: [
        ControlsService
    ]
})
export class ControlsModule { }
