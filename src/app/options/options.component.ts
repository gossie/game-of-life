import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OptionsService } from './options.service';
import { Options } from './options';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

    public optionsForm: FormGroup;
    public gameRunning: boolean;

    constructor(private optionsService: OptionsService,
                private fb: FormBuilder) {
    }

    private createForm(): void {
        this.optionsForm = this.fb.group({
            width:  [12, Validators.required ],
            height: [15, Validators.required ],
            tick:   [500, Validators.required ],
            random: [0, Validators.required ]
        });
        this.optionsForm.valueChanges.subscribe((value: string) => this.notify());
    }

    public ngOnInit(): void {
        this.optionsService.observeGameState().subscribe(running => this.gameRunning = running);
        this.createForm();
        this.notify();
    }

    private notify(): void {
        const options: Options = {
            width:  parseInt(this.optionsForm.get('width').value),
            height: parseInt(this.optionsForm.get('height').value),
            tick:   parseInt(this.optionsForm.get('tick').value),
            random: parseInt(this.optionsForm.get('random').value)
        };
        this.optionsService.notify(options);
    }
}
