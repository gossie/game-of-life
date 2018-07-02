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
            case OPTION_CHANGE:
                return FieldReducers.onOptionsChange(state, action.options);
            case GAME_RUNNING:
                state.field.round();
                return state;
            default:
                return state;
        }

    }

    private static onOptionsChange(state: State = {}, options: Options): State {
        let field: Field = state.field;
        if (FieldReducers.checkOptions(options, field)) {
            field = new Field(options.width, options.height);
        }
        field.setMaxNumberOfNewSamples(options.random);

        return {
            field: field,
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
            onTick: FieldReducers.onTick
        };
    }
}
