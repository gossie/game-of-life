import { Injectable } from '@angular/core';
import { GAME_RUNNING } from '../game/actions';
import { OPTION_CHANGE } from '../options/actions';
import { Field } from './field';
import { Options } from '../options/options';

interface State {
    field?: Field;
    options?: Options;
}

@Injectable()
export class FieldReducers {

    private static onTick(state: State = {}, action): State {
        switch (action.type) {
            case GAME_RUNNING:
                if (state.field) {
                    state.field.round();
                }
                return state;
            default:
                return state;
        }

    }

    private static onOptionsChange(state: State = {}, action): State {
        if (action.type === OPTION_CHANGE) {
            let field: Field = state.field;
            if (FieldReducers.checkOptions(action.options, field)) {
                field = new Field(action.options.width, action.options.height);
            }
            field.setMaxNumberOfNewSamples(action.options.random);

            return {
                field: field,
                options: action.options
            };
        } else {
            return state;
        }
    }

    private static checkOptions(options: Options, field: Field): boolean {
        return field === undefined
            || (options.width > 0 && options.width !== field.getCells()[0].length)
            || (options.height > 0 && options.height !== field.getCells().length);
    }

    public getReducers() {
        return {
            onTick: FieldReducers.onTick,
            onOptionsChange: FieldReducers.onOptionsChange
        };
    }
}
