import { TestBed, inject } from '@angular/core/testing';
import { OptionsService } from './options.service';
import { StoreHolderMock } from '../store.holder.mock';
import { StoreHolder } from '../store.holder';
import { OPTION_CHANGE } from './actions';
import { Options } from './options';
import Spy = jasmine.Spy;

describe('OptionsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: StoreHolder, useClass: StoreHolderMock },
                OptionsService
            ]
        });
    });

    it('should be created', inject([OptionsService], (service: OptionsService) => {
        expect(service).toBeTruthy();
    }));

    it('should trigger a change', inject([OptionsService, StoreHolder], (service: OptionsService, store: StoreHolder) => {
        const spy: Spy = spyOn(store, 'dispatch');
        const options: Options = { width: 150, height: 110, tick: 250, random: 0 };

        service.notify(options);

        expect(spy).toHaveBeenCalledWith({
            type: OPTION_CHANGE,
            options: options
        });
    }));
});
