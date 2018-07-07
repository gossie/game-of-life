import {by, element, ElementFinder, promise} from 'protractor';

export class Buttons {
    private el: ElementFinder;

    constructor() {
        this.el = element(by.css('#controls'));
    }

    public startGame(): promise.Promise<void> {
        return element(by.css('#startButton')).click();
    }

    public isStartButtonVisible(): promise.Promise<boolean> {
        return element(by.css('#startButton')).isPresent();
    }

    public isStartButtonEnabled(): promise.Promise<boolean> {
        return element(by.css('#startButton')).isEnabled();
    }

    public pauseGame(): promise.Promise<void> {
        return element(by.css('#pauseButton')).click();
    }

    public isPauseButtonVisible(): promise.Promise<boolean> {
        return element(by.css('#pauseButton')).isPresent();
    }

    public isPauseButtonEnabled(): promise.Promise<boolean> {
        return element(by.css('#pauseButton')).isEnabled();
    }

    public isNextButtonVisible(): promise.Promise<boolean> {
        return element(by.css('#nextButton')).isPresent();
    }

    public isNextButtonEnabled(): promise.Promise<boolean> {
        return element(by.css('#nextButton')).isEnabled();
    }

    public isPrevButtonVisible(): promise.Promise<boolean> {
        return element(by.css('#prevButton')).isPresent();
    }

    public isPrevButtonEnabled(): promise.Promise<boolean> {
        return element(by.css('#prevButton')).isEnabled();
    }

    public clearField(): promise.Promise<void> {
        return element(by.css('#clearButton')).click();
    }

    public isClearButtonVisible(): promise.Promise<boolean> {
        return element(by.css('#clearButton')).isPresent();
    }

    public isClearButtonEnabled(): promise.Promise<boolean> {
        return element(by.css('#clearButton')).isEnabled();
    }
}
