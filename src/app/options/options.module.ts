import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { OptionsComponent } from './options.component';
import { OptionsService } from './options.service';

@NgModule({
    declarations: [
        OptionsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        OptionsComponent
    ],
    providers: [
        OptionsService
    ]
})
export class OptionsModule { }
