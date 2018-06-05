import { browser } from 'protractor';
import { AppPage } from './page/app.po';
import { FieldComponent } from './page/field.co';
import { OptionsComponent } from './page/options.co';

describe('game-of-life Field', () => {
    let page: AppPage;

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
        page = new AppPage();
        page.navigateTo();
    });

    it('should have 17 rows and each row should have 25 columns', async () => {
        const field: FieldComponent = page.getField();
        expect(await field.getNumberOfRows()).toBe(17);

        for (let i = 0; i < 17; i++) {
            expect(await field.getRow(i).getNumberOfCells()).toBe(25);
            for (let j = 0; j < 25; j++) {
                expect(await field.getRow(i).getCell(j).isDead()).toBeTruthy();
            }
        }
    });

    it('should select a start configuration', async () => {
        const field: FieldComponent = page.getField();

        await field.getRow(4).getCell(4).select();
        await field.getRow(5).getCell(5).select();
        await field.getRow(6).getCell(5).select();
        await field.getRow(6).getCell(4).select();
        await field.getRow(6).getCell(3).select();

        expect(await field.getRow(4).getCell(4).isAlive()).toBeTruthy();
        expect(await field.getRow(5).getCell(5).isAlive()).toBeTruthy();
        expect(await field.getRow(6).getCell(5).isAlive()).toBeTruthy();
        expect(await field.getRow(6).getCell(4).isAlive()).toBeTruthy();
        expect(await field.getRow(6).getCell(3).isAlive()).toBeTruthy();

        const options: OptionsComponent = page.getOptions();
        expect(await options.isWidthEnabled()).toBeTruthy();
        expect(await options.isHeightEnabled()).toBeTruthy();

        await page.startGame();

        expect(await options.isWidthEnabled()).toBeFalsy();
        expect(await options.isHeightEnabled()).toBeFalsy();
    });
});
