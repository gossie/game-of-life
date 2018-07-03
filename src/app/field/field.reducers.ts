import { Injectable } from '@angular/core';
import { GAME_RUNNING } from '../game/actions';
import { OPTION_CHANGE } from '../options/actions';
import { Field } from './field';
import { Options } from '../options/options';

interface State {
    pastFields: Array<Field>;
    currentField?: Field;
    futureFields: Array<Field>;
    options?: Options;
}

@Injectable()
export class FieldReducers {

    private static readonly MAX_NUMBER_OF_FIELDS = 10;

    private static onTick(state: State = {pastFields: [], futureFields: []}, action): State {
        switch (action.type) {
            case OPTION_CHANGE:
                return FieldReducers.onOptionsChange(state, action.options);
            case GAME_RUNNING:
                return FieldReducers.bla(state);
            default:
                return state;
        }
    }

    private static bla(state: State): State {
        state.pastFields.push(state.currentField);
        if (state.pastFields.length > FieldReducers.MAX_NUMBER_OF_FIELDS) {
            state.pastFields.splice(1);
        }
        return {
            pastFields: state.pastFields,
            currentField: state.currentField.round(),
            futureFields: state.futureFields,
            options: state.options
        };
    }

    private static onOptionsChange(state: State = {pastFields: [], futureFields: []}, options: Options): State {
        let field: Field = state.currentField;
        if (FieldReducers.checkOptions(options, field)) {
            field = new Field(options.random, options.width, options.height);
        }

        return {
            pastFields: state.pastFields,
            currentField: field,
            futureFields: state.futureFields,
            options: options
        };
    }

    private static checkOptions(options: Options, field: Field): boolean {
        return field === undefined
            || (options.width > 0 && options.width !== field.getCells()[0].length)
            || (options.height > 0 && options.height !== field.getCells().length);
    }

    public getReducers() {
        return {
            tick: FieldReducers.onTick
        };
    }
}
