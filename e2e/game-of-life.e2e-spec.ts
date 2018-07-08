import { browser } from 'protractor';
import { AppPage } from './page/app.po';
import { FieldComponent } from './page/field.co';

const expectThatAllCellsAreDead = async (field: FieldComponent, width: number, height: number) => {
    expect(await field.getNumberOfRows()).toBe(height);
    for (let i = 0; i < height; i++) {
        expect(await field.getRow(i).getNumberOfCells()).toBe(width);
        for (let j = 0; j < width; j++) {
            expect(await field.getRow(i).getCell(j).isDead()).toBeTruthy();
        }
    }
};

describe('game-of-life Field', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should have 17 rows and each row should have 25 columns', async () => {
        const field: FieldComponent = page.getField();

        expectThatAllCellsAreDead(field, 12, 15);
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

        expect(await page.getOptions().isWidthEnabled()).toBeTruthy();
        expect(await page.getOptions().isHeightEnabled()).toBeTruthy();

        browser.waitForAngularEnabled(false);

        await page.getButtons().startGame();

        expect(await page.getOptions().isWidthEnabled()).toBeFalsy();
        expect(await page.getOptions().isHeightEnabled()).toBeFalsy();

        browser.waitForAngularEnabled(true);
    });

    it('should reset the field when width is set', async () => {
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

        await page.getOptions().clearWidth();
        await page.getOptions().setWidth(20);

        expectThatAllCellsAreDead(field, 20, 15);
    });

    it('should reset the field when height is set', async () => {
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

        await page.getOptions().clearHeight();
        await page.getOptions().setHeight(10);

        expectThatAllCellsAreDead(field, 12, 10);
    });

    it('should clear the field', async () => {
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

        await page.getButtons().clearField();

        expectThatAllCellsAreDead(field, 12, 15);
    });
});
