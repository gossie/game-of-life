import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreHolder } from './store.holder';
import { GameModule } from './game/game.module';
import { RulesModule } from './rules/rules.module';
import { GameComponent } from './game/game.component';
import { RulesComponent } from './rules/rules.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/game', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
    { path: 'rules', component: RulesComponent }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        GameModule,
        RulesModule
    ],
    providers: [
        StoreHolder
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
