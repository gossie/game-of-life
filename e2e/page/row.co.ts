import { browser, by, element, ElementFinder, promise } from 'protractor';
import { CellComponent } from './cell.co';

export class RowComponent {

    private el: ElementFinder;

    constructor(elementFinder: ElementFinder) {
        this.el = elementFinder;
    }

    public getNumberOfCells(): promise.Promise<number> {
        return this.el.all(by.css('.cell')).count();
    }

    public getCell(index: number): CellComponent {
        return new CellComponent(this.el.all(by.css('.cell')).get(index));
    }
}
