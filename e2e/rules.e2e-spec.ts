import { browser } from 'protractor';
import { RulesPage } from './page/rules.po';

describe('game-of-life Rules', () => {
    let page: RulesPage;

    beforeEach(() => {
        page = new RulesPage();
        page.navigateTo();
    });

    it('should check the number of rules', async () => {
        expect(await page.getNumberOfRules()).toBe(5);
    });
});
