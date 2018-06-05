import { browser, by, element, ElementFinder, promise } from 'protractor';

export class OptionsComponent {

    private el: ElementFinder;

    constructor() {
        this.el = element(by.css('#options'));
    }

    public isWidthEnabled(): promise.Promise<boolean> {
        return this.el.element(by.css('#width')).isEnabled();
    }

    public isHeightEnabled(): promise.Promise<boolean> {
        return this.el.element(by.css('#height')).isEnabled();
    }
}
