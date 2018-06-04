import { browser, by, element } from 'protractor';
import { FieldComponent } from './field.co';

export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getField(): FieldComponent {
        return new FieldComponent();
    }
}
