import { AppPage } from './app.po';
import { FieldComponent } from './field.co';

describe('game-of-life Field', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should have 17 rows and each row should have 25 columns', async () => {
        const field: FieldComponent = page.getField();
        expect(await field.getNumberOfRows()).toBe(17);

        for (let i = 0; i < 17; i++) {
            expect(await field.getRow(i).getNumberOfCells()).toBe(25);
        }
    });
});
