import { Component, OnInit } from '@angular/core';
import { OptionsService } from './options.service';
import { Options } from './options';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    options: Options = {
        width: 25,
        height: 17,
        tick: 500
    };

    constructor(private optionsService: OptionsService) { }

    public ngOnInit(): void {
        this.optionsService.notify(this.options);
    }

    public onOptionsChange(): void {
        this.optionsService.notify(this.options);
    }

}
