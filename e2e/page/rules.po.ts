import { browser, by, element, promise } from 'protractor';

export class RulesPage {
    public navigateTo(): promise.Promise<void> {
        return browser.get('/game-of-life/rules');
    }

    public getNumberOfRules(): promise.Promise<number> {
        return element.all(by.css('.box')).count();
    }
}
