import { Component, OnInit } from '@angular/core';
import { StoreHolder } from '../store.holder';
import { Cell } from './cell';
import { Field } from './field';
import { Status } from './status';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

    constructor(private store: StoreHolder) {}

    ngOnInit() {
    }

    public getField(): Field {
        return this.store.getState().field
    }

    public onSelect(cell: Cell): void {
        if (cell.getStatus() === Status.ALIVE) {
            cell.setStatus(Status.DEAD);
        } else {
            cell.setStatus(Status.ALIVE);
        }
    }

}
