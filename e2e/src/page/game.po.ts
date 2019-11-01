import { browser, by, element, promise } from 'protractor';
import { FieldComponent } from './field.co';
import { OptionsComponent } from './options.co';
import { Buttons } from './buttons.co';

export class GamePage {
    public navigateTo(): promise.Promise<void> {
        return browser.get('/');
    }

    public getButtons(): Buttons {
        return new Buttons();
    }

    public getField(): FieldComponent {
        return new FieldComponent();
    }

    public getOptions(): OptionsComponent {
        return new OptionsComponent();
    }
}
