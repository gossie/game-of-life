import { browser, by, element, promise } from 'protractor';
import { FieldComponent } from './field.co';

export class AppPage {
    public navigateTo(): promise.Promise<void> {
        return browser.get('/');
    }

    public getField(): FieldComponent {
        return new FieldComponent();
    }

    public startGame(): promise.Promise<void> {
        return element(by.css('#startButton')).click();
    }
}
