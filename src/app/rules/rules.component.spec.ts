import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RulesComponent } from './rules.component';
import Spy = jasmine.Spy;

describe('RulesComponent', () => {
    let component: RulesComponent;
    let fixture: ComponentFixture<RulesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RulesComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RulesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
