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

    private static readonly ERROR_MESSAGES = {
        width: 'Width has to be between 1 and 40',
        height: 'Height has to be between 1 and 30',
        tick: 'Tick has to be bigger than 50',
        random: 'Random has to be between 0 and 15'
    };

    public optionsForm: FormGroup;
    public gameRunning: boolean;

    constructor(private optionsService: OptionsService,
                private fb: FormBuilder) {
    }

    private createForm(): void {
        this.optionsForm = this.fb.group({
            width:  [14, [Validators.required, Validators.min(1), Validators.max(40) ]],
            height: [15, [Validators.required, Validators.min(1), Validators.max(30) ]],
            tick:   [500, [Validators.required, Validators.min(50) ]],
            random: [0, [Validators.required, Validators.min(0), Validators.max(15) ]]
        });
        this.optionsForm.valueChanges.subscribe((value: string) => this.notify());
    }

    public ngOnInit(): void {
        this.optionsService.observeGameState().subscribe(running => this.gameRunning = running);
        this.createForm();
        this.notify();
    }

    private notify(): void {
        if (this.optionsForm.valid) {
            const options: Options = {
                width:  parseInt(this.optionsForm.get('width').value),
                height: parseInt(this.optionsForm.get('height').value),
                tick:   parseInt(this.optionsForm.get('tick').value),
                random: parseInt(this.optionsForm.get('random').value)
            };
            this.optionsService.notify(options);
        }
    }

    public hasErrorMessage(field: string): boolean {
        return this.optionsForm.get(field).invalid;
    }

    public getErrorMessage(field: string): string {
        let result = '';
        if (this.optionsForm.get(field).invalid) {
            result = OptionsComponent.ERROR_MESSAGES[field];
        }
        return result;
    }
}
