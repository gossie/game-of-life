import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { GameService } from '../game.service';
import { OptionsService } from '../options.service';
import { Options } from '../options';
import { Cell } from './cell';
import { Field } from './field';
import { Status } from './status';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    field: Field;

    constructor(private gameService: GameService,
                private optionsService: OptionsService) {
    }

    ngOnInit() {
        this.gameService.observe()
            .subscribe(tick => this.onTick());

        this.optionsService.observe()
            .pipe(
                filter(options => this.checkOptions(options))
            )
            .subscribe(options => this.onOptionsChange(options));
    }

    private onTick(): void {
        this.field.round();
    }

    private checkOptions(options: Options): boolean {
        return this.field === undefined
            || (options.width > 0
                && options.width !== this.field.getCells()[0].length
                && options.height > 0
                && options.height !== this.field.getCells().length);
    }

    private onOptionsChange(options: Options): void {
        this.field = new Field(options.width, options.height);
    }

    public onSelect(cell: Cell): void {
        if(cell.getStatus() === Status.ALIVE) {
            cell.setStatus(Status.DEAD);
        } else {
            cell.setStatus(Status.ALIVE);
        }
    }

}
