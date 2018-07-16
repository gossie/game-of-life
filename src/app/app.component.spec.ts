import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { OptionsComponent } from './options/options.component';
import { OptionsService } from './options/options.service';
import { ControlsService } from './controls/controls.service';
import { OptionsServiceMock } from './options/options.service.mock';
import { ControlsServiceMock } from './controls/controls.service.mock';
import { FieldService } from './field/field.service';
import { FieldServiceMock } from './field/field.service.mock';
import { ControlsComponent } from './controls/controls.component';

xdescribe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
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
