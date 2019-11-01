import { browser, by, element, ElementFinder, promise } from 'protractor';

export class CellComponent {

    private el: ElementFinder;

    constructor(elementFinder: ElementFinder) {
        this.el = elementFinder;
    }

    public select(): promise.Promise<void> {
        return this.el.click();
    }

    public isAlive(): promise.Promise<boolean> {
        return this.el.getAttribute('class')
                .then(classes => classes.indexOf('alive') != -1);
    }

    public isDead(): promise.Promise<boolean> {
        return this.el.getAttribute('class')
                .then(classes => classes.indexOf('dead') != -1);
    }
}
