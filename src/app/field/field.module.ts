import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';

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
    ]
})
export class FieldModule { }
