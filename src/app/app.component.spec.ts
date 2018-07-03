import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { OptionsComponent } from './options/options.component';
import { OptionsService } from './options/options.service';
import { GameService } from './game/game.service';
import { OptionsServiceMock } from './options/options.service.mock';
import { GameServiceMock } from './game/game.service.mock';
import { FieldService } from './field/field.service';
import { FieldServiceMock } from './field/field.service.mock';
import { GameComponent } from './game/game.component';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                GameComponent,
                FieldComponent,
                OptionsComponent
            ],
            imports: [ ReactiveFormsModule ],
            providers: [
                { provide: GameService, useClass: GameServiceMock },
                { provide: OptionsService, useClass: OptionsServiceMock },
                { provide: FieldService, useClass: FieldServiceMock }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
    }));
});
