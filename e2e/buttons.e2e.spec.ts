import { browser } from 'protractor';
import { AppPage } from './page/app.po';

fdescribe('game-of-life Buttons', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should check the buttons', async () => {
        browser.waitForAngularEnabled(false);

        page.getButtons().startGame();

        expect(await page.getButtons().isStartButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isPauseButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isPauseButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isPrevButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isNextButtonVisible()).toBeFalsy();

        browser.waitForAngularEnabled(true);
    });
});
