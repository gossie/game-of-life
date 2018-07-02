import {Unsubscribe} from 'redux';
import {StoreHolderInterface} from './store.holder.interface';

export class StoreHolderMock implements StoreHolderInterface {

    public dispatch(action): void { }

    public getState(): any {
        return {};
    }

    public subscribe(listener: () => void): Unsubscribe {
        return () => {};
    }
}
