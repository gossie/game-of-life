import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';
import { FieldReducers } from './field.reducers';

@NgModule({
    declarations: [
        FieldComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [
        FieldComponent
    ],
    providers: [
        FieldReducers
    ]
})
export class FieldModule { }
