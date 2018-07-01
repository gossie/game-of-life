import { Options } from './options';

interface OptionChane {
    type: string;
    options: Options;
}

export const OPTION_CHANGE = 'optionChange';

export function optionChange(options: Options): OptionChane {
    return {
        type: OPTION_CHANGE,
        options: options
    };
}
