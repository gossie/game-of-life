import { browser, by, element, promise } from 'protractor';
import { FieldComponent } from './field.co';
import { OptionsComponent } from './options.co';

export class AppPage {
    public navigateTo(): promise.Promise<void> {
        return browser.get('/');
    }

    public getField(): FieldComponent {
        return new FieldComponent();
    }

    public getOptions(): OptionsComponent {
        return new OptionsComponent();
    }

    public startGame(): promise.Promise<void> {
        return element(by.css('#startButton')).click();
    }

    public pauseGame(): promise.Promise<void> {
        return element(by.css('#pauseButton')).click();
    }
}
