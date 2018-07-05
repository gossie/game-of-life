import { Injectable } from '@angular/core';
import { START_GAME, GAME_RUNNING, NEXT, PREV } from '../game/actions';
import { OPTION_CHANGE } from '../options/actions';
import { Field } from './field';
import { Options } from '../options/options';
import { Reducers } from '../reducer.interface';

interface State {
    pastFields: Array<Field>;
    currentField?: Field;
    futureFields: Array<Field>;
    options?: Options;
}

@Injectable()
export class FieldReducers implements Reducers {

    private static readonly MAX_NUMBER_OF_FIELDS = 10;

    private static readonly REDUCERS: Map<string, any> = new Map([
        [OPTION_CHANGE, (state, options) => FieldReducers.onOptionsChange(state, options)],
        [START_GAME, (state, options) => FieldReducers.handleStart(state)],
        [GAME_RUNNING, (state, options) => FieldReducers.handleTick(state)],
        [NEXT, (state, options) => FieldReducers.handleNext(state)],
        [PREV, (state, options) => FieldReducers.handlePrev(state)]
    ]);

    private static onTick(state: State = {pastFields: [], futureFields: []}, action): State {
        const reducer: any = FieldReducers.REDUCERS.get(action.type);
        if (reducer === undefined) {
            return state;
        }
        return reducer(state, action.options);
    }

    private static handleStart(state: State): State {
        return {
            pastFields: state.pastFields,
            currentField: state.currentField,
            futureFields: [],
            options: state.options
        };
    }

    private static handleTick(state: State): State {
        state.pastFields.push(state.currentField);
        if (state.pastFields.length > FieldReducers.MAX_NUMBER_OF_FIELDS) {
            state.pastFields.splice(0, 1);
        }
        return {
            pastFields: state.pastFields,
            currentField: state.currentField.round(),
            futureFields: state.futureFields,
            options: state.options
        };
    }

    private static handleNext(state: State): State {
        if (state.futureFields.length === 0) {
            return state;
        }

        state.pastFields.push(state.currentField);
        const newCurrentField: Field = state.futureFields.shift();
        return {
            pastFields: state.pastFields,
            currentField: newCurrentField,
            futureFields: state.futureFields,
            options: state.options
        };
    }

    private static handlePrev(state: State): State {
        if (state.pastFields.length === 0) {
            return state;
        }

        state.futureFields.unshift(state.currentField);
        const newCurrentField: Field = state.pastFields.pop();
        return {
            pastFields: state.pastFields,
            currentField: newCurrentField,
            futureFields: state.futureFields,
            options: state.options
        };
    }

    private static onOptionsChange(state: State = {pastFields: [], futureFields: []}, options: Options): State {
        let field: Field = state.currentField;
        if (FieldReducers.checkOptions(options, field)) {
            field = new Field(options.random, options.width, options.height);
        }
        field = field.setMaxNumberOfNewSamples(options.random);

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
