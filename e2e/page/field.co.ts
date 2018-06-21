import { browser, by, element, ElementFinder, promise } from 'protractor';
import { RowComponent } from './row.co';

export class FieldComponent {

    private el: ElementFinder;

    constructor() {
        this.el = element(by.css('#field'));
    }

    public getNumberOfRows(): promise.Promise<number> {
        return this.el.all(by.css('.row')).count();
    }

    public getRow(index: number): RowComponent {
        return new RowComponent(this.el.all(by.css('.row')).get(index));
    }
}
