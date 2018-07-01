import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GameService } from './game/game.service';
import { OptionsModule } from './options/options.module';
import { FieldModule } from './field/field.module';
import { StoreHolder } from './store.holder';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        OptionsModule,
        FieldModule
    ],
    providers: [
        GameService,
        StoreHolder
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
