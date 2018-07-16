import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OptionsModule } from './options/options.module';
import { FieldModule } from './field/field.module';
import { StoreHolder } from './store.holder';
import { ControlsModule } from './controls/controls.module';
import { GameModule } from './game/game.module';
import { RulesModule } from './rules/rules.module';


// const appRoutes: Routes = [
//     { path: 'game', component: CrisisListComponent },
//     { path: 'hero/:id',      component: HeroDetailComponent },
//     {
//         path: 'heroes',
//         component: HeroListComponent,
//         data: { title: 'Heroes List' }
//     },
//     { path: '',
//         redirectTo: '/heroes',
//         pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
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
