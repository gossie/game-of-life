import {Unsubscribe} from 'redux';

export interface StoreHolderInterface {

    dispatch(action): void;

    getState(): any;

    subscribe(listener: () => void): Unsubscribe;
}
