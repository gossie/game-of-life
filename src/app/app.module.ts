import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { OptionsModule } from './options/options.module';
import { FieldModule } from './field/field.module';
import { StoreHolder } from './store.holder';
import { GameModule } from './game/game.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        GameModule,
        OptionsModule,
        FieldModule
    ],
    providers: [
        StoreHolder
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
