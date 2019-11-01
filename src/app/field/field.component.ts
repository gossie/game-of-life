import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cell } from './cell';
import { Field } from './field';
import { Status } from './status';
import { FieldService } from './field.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit, OnDestroy {

    public field: Field;

    private subscriptions: Array<Subscription> = [];

    constructor(private fieldService: FieldService) {}

    public ngOnInit(): void {
        this.subscriptions.push(this.fieldService.observe().subscribe(field => this.field = field));
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    public onSelect(cell: Cell): void {
        if (cell.getStatus() === Status.ALIVE) {
            cell.setStatus(Status.DEAD);
        } else {
            cell.setStatus(Status.ALIVE);
        }
    }

}
