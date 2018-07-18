import { browser } from 'protractor';
import { GamePage } from './page/game.po';

describe('game-of-life Buttons', () => {
    let page: GamePage;

    beforeEach(() => {
        page = new GamePage();
        page.navigateTo();
    });

    it('should check the buttons', async () => {
        browser.waitForAngularEnabled(false);

        expect(await page.getButtons().isStartButtonVisible()).toBeTruthy();
        expect(await page.getButtons().isStartButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isPauseButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isPrevButtonVisible()).toBeTruthy();
        // expect(await page.getButtons().isPrevButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isNextButtonVisible()).toBeTruthy();
        // expect(await page.getButtons().isNextButtonEnabled()).toBeFalsy();
        expect(await page.getButtons().isClearButtonVisible()).toBeTruthy();

        page.getButtons().startGame();

        expect(await page.getButtons().isStartButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isPauseButtonVisible()).toBeTruthy();
        expect(await page.getButtons().isPauseButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isPrevButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isNextButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isClearButtonVisible()).toBeFalsy();

        page.getButtons().pauseGame();

        expect(await page.getButtons().isStartButtonVisible()).toBeTruthy();
        expect(await page.getButtons().isStartButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isPauseButtonVisible()).toBeFalsy();
        expect(await page.getButtons().isPrevButtonVisible()).toBeTruthy();
        // expect(await page.getButtons().isPrevButtonEnabled()).toBeTruthy();
        expect(await page.getButtons().isNextButtonVisible()).toBeTruthy();
        // expect(await page.getButtons().isNextButtonEnabled()).toBeFalsy();
        expect(await page.getButtons().isClearButtonVisible()).toBeTruthy();

        browser.waitForAngularEnabled(true);
    });
});
