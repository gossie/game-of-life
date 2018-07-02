import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsService } from './options.service';
import { OptionsComponent } from './options.component';
import { GameService } from '../game/game.service';
import {OptionsServiceMock} from './options.service.mock';

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
});
