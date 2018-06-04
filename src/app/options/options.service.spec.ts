import { TestBed, inject } from '@angular/core/testing';

import { OptionsService } from './options.service';

describe('OptionsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OptionsService]
        });
    });

    it('should be created', inject([OptionsService], (service: OptionsService) => {
        expect(service).toBeTruthy();
    }));

    it('should trigger a change', done => {
        inject([OptionsService], (service: OptionsService) => {
            service.observe().subscribe(options => {
                expect(options.width).toEqual(150);
                expect(options.height).toEqual(110);
                expect(options.tick).toEqual(250);
                expect(options.random).toEqual(0);
                done();
            });
            service.notify({width: 150, height: 110, tick: 250, random: 0});
        })();
    });
});
