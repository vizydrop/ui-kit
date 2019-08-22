import {calculateCustomCssProperties} from '../calculateVariables';

describe(`calculate variables`, () => {
    describe(`#calculateCustomCssProperties`, () => {
        it(`should calculate with default params`, () => {
            expect(calculateCustomCssProperties()[`--vzdrp-colorMain`]).toBe(`#007eff`);
        });
        it(`should calculate with custom params`, () => {
            expect(calculateCustomCssProperties({colorMain: `#1100aa`})[`--vzdrp-colorMain`]).toBe(`#1100aa`);
        });
    });
});
