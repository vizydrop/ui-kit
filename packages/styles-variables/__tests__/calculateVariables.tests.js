import {
    calculateCustomCssProperties,
    calculateVariablesFromTheme,
    calculateVariables,
    calculateCustomCssPropertiesFromTheme,
} from '../calculateVariables';

describe(`calculate variables`, () => {
    describe(`#calculateCustomCssProperties`, () => {
        it(`should calculate with default params`, () => {
            expect(calculateCustomCssProperties()[`--vzdrp-colorMain`]).toBe(`#007eff`);
        });
        it(`should calculate with custom params`, () => {
            expect(calculateCustomCssProperties({colorMain: `#1100aa`})[`--vzdrp-colorMain`]).toBe(`#1100aa`);
        });
    });
    describe(`#calculateVariablesFromTheme`, () => {
        it(`should use default values if theme is missing`, () => {
            const varsFromTheme = calculateVariablesFromTheme();
            const vars = calculateVariables();
            expect(varsFromTheme).toEqual(vars);
        });

        it(`should use applied values`, () => {
            const varsFromTheme = calculateVariablesFromTheme({
                colors: {
                    colorContent: `#00a`,
                    colorContentInvert: `#00b`,
                    colorBody: `#00c`,
                    colorHighlight: `#cc0`,
                    colorMain: `#112200`,
                    colorError: `#991`,
                },
                fontFamily: `somefonts`,
            });
            const vars = calculateVariables({
                colorContent: `#00a`,
                colorContentInvert: `#00b`,
                colorBody: `#00c`,
                colorHighlight: `#cc0`,
                colorMain: `#112200`,
                colorError: `#991`,
                fontFamily: `somefonts`,
            });
            expect(varsFromTheme).toEqual(vars);
        });
    });

    describe(`#calculateCustomCssPropertiesFromTheme`, () => {
        it(`should use default values if theme is missing`, () => {
            const fromTheme = calculateCustomCssPropertiesFromTheme();
            const vars = calculateCustomCssProperties();
            expect(fromTheme).toEqual(vars);
        });

        it(`should use applied values`, () => {
            const fromTheme = calculateCustomCssPropertiesFromTheme({
                colors: {
                    colorContent: `#00a`,
                    colorContentInvert: `#00b`,
                    colorBody: `#00c`,
                    colorHighlight: `#cc0`,
                    colorMain: `#112200`,
                    colorError: `#991`,
                },
                fontFamily: `somefonts`,
            });
            const vars = calculateCustomCssProperties({
                colorContent: `#00a`,
                colorContentInvert: `#00b`,
                colorBody: `#00c`,
                colorHighlight: `#cc0`,
                colorMain: `#112200`,
                colorError: `#991`,
                fontFamily: `somefonts`,
            });
            expect(fromTheme).toEqual(vars);
        });
    });
});
