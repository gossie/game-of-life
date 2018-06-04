import { AppPage } from './app.po';
import { FieldComponent } from './field.co';

describe('game-of-life Field', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
        page.navigateTo();
    });

    it('should have 17 rows', async () => {
        const field: FieldComponent = page.getField();
        expect(await field.getNumberOfRows()).toBe(17);
    });
});
