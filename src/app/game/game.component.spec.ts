import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { GameComponent } from './game.component';
import { ControlsComponent } from '../controls/controls.component';
import { FieldComponent } from '../field/field.component';
import { OptionsComponent } from '../options/options.component';
import { ControlsService } from '../controls/controls.service';
import { OptionsService } from '../options/options.service';
import { FieldService } from '../field/field.service';
import { ControlsServiceMock } from '../controls/controls.service.mock';
import { OptionsServiceMock } from '../options/options.service.mock';
import { FieldServiceMock } from '../field/field.service.mock';

describe('GameComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GameComponent,
                ControlsComponent,
                FieldComponent,
                OptionsComponent
            ],
            imports: [ ReactiveFormsModule ],
            providers: [
                { provide: ControlsService, useClass: ControlsServiceMock },
                { provide: OptionsService, useClass: OptionsServiceMock },
                { provide: FieldService, useClass: FieldServiceMock }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(GameComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(GameComponent);
        const app = fixture.debugElement.componentInstance;
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(GameComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
    }));
});
