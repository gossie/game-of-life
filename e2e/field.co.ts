import { browser, by, element, ElementFinder, promise } from 'protractor';
import { CellComponent } from './cell.co';

export class FieldComponent {

    private el: ElementFinder;

    constructor() {
        this.el = element(by.css('#field'));
    }

    public getNumberOfRows(): promise.Promise<number> {
        return element.all(by.css('.row')).count();
    }

    public getCell(x: number, y: number): CellComponent {
        return null;
    }
}
