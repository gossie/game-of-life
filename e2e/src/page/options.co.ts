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

    public clearWidth(): promise.Promise<void> {
        return this.el.element(by.css('#width')).clear();
    }

    public setWidth(width: number): promise.Promise<void> {
        return this.el.element(by.css('#width')).sendKeys(width);
    }

    public clearHeight(): promise.Promise<void> {
        return this.el.element(by.css('#height')).clear();
    }

    public setHeight(height: number): promise.Promise<void> {
        return this.el.element(by.css('#height')).sendKeys(height);
    }

    public setTick(tick: number): void {
        this.el.element(by.css('#tick')).sendKeys(tick);
    }

    public setRandom(random: number): void {
        this.el.element(by.css('#random')).sendKeys(random);
    }
}
