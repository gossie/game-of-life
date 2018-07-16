import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsService } from './options.service';
import { OptionsComponent } from './options.component';
import { OptionsServiceMock } from './options.service.mock';
import { Options } from './options';
import Spy = jasmine.Spy;

describe('OptionsComponent', () => {
    let component: OptionsComponent;
    let fixture: ComponentFixture<OptionsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OptionsComponent ],
            imports: [ ReactiveFormsModule ],
            providers: [
                { provide: OptionsService, useClass: OptionsServiceMock }
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should validate width correctly', inject([OptionsService], (service: OptionsService) => {
        const notifySpy: Spy = spyOn(service, 'notify');

        component.optionsForm.get('width').setValue('0');
        component.optionsForm.get('width').setValue('1');
        component.optionsForm.get('width').setValue('40');
        component.optionsForm.get('width').setValue('41');

        const options1: Options = { width: 1, height: 15, tick: 500, random: 0 };
        const options2: Options = { width: 40, height: 15, tick: 500, random: 0 };
        expect(notifySpy).toHaveBeenCalledTimes(2);
        expect(notifySpy).toHaveBeenCalledWith(options1);
        expect(notifySpy).toHaveBeenCalledWith(options2);
    }));

    it('should validate height correctly', inject([OptionsService], (service: OptionsService) => {
        const notifySpy: Spy = spyOn(service, 'notify');

        component.optionsForm.get('height').setValue('0');
        component.optionsForm.get('height').setValue('1');
        component.optionsForm.get('height').setValue('30');
        component.optionsForm.get('height').setValue('31');

        const options1: Options = { width: 14, height: 1, tick: 500, random: 0 };
        const options2: Options = { width: 14, height: 30, tick: 500, random: 0 };
        expect(notifySpy).toHaveBeenCalledTimes(2);
        expect(notifySpy).toHaveBeenCalledWith(options1);
        expect(notifySpy).toHaveBeenCalledWith(options2);
    }));

    it('should validate tick correctly', inject([OptionsService], (service: OptionsService) => {
        const notifySpy: Spy = spyOn(service, 'notify');

        component.optionsForm.get('tick').setValue('49');
        component.optionsForm.get('tick').setValue('50');

        const options: Options = { width: 14, height: 15, tick: 50, random: 0 };
        expect(notifySpy).toHaveBeenCalledTimes(1);
        expect(notifySpy).toHaveBeenCalledWith(options);
    }));

    it('should validate random correctly', inject([OptionsService], (service: OptionsService) => {
        const notifySpy: Spy = spyOn(service, 'notify');

        component.optionsForm.get('random').setValue('-1');
        component.optionsForm.get('random').setValue('0');
        component.optionsForm.get('random').setValue('15');
        component.optionsForm.get('random').setValue('16');

        const options1: Options = { width: 14, height: 15, tick: 500, random: 0 };
        const options2: Options = { width: 14, height: 15, tick: 500, random: 15 };
        expect(notifySpy).toHaveBeenCalledTimes(2);
        expect(notifySpy).toHaveBeenCalledWith(options1);
        expect(notifySpy).toHaveBeenCalledWith(options2);
    }));
});
