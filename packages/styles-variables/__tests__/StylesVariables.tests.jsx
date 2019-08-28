import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render} from '@testing-library/react';
import StylesVariablesProvider from '../StylesVariablesProvider';
import useStylesVariables from '../useStylesVariables';

const Component = () => {
    const {colorMain, fontFamily} = useStylesVariables();
    return (
        <div>
            <div>{colorMain}</div>
            <div>{fontFamily}</div>
        </div>
    );
};

describe(`styles variables`, () => {
    describe(`with css variables support`, () => {
        if (!window.CSS.supports) {
            beforeEach(() => {
                window.CSS.supports = jest.fn(() => true);
            });

            afterEach(() => {
                window.CSS.supports = undefined;
            });
        }

        it(`should have default values applied if context is missing`, () => {
            const {queryByText} = render(<Component />);
            expect(queryByText(`#007eff`)).toBeInTheDocument();
            expect(queryByText(`"Open Sans",OpenSans,sans-serif`)).toBeInTheDocument();
        });

        it(`should apply values from context`, () => {
            const theme = {
                colors: {colorMain: `#001122`},
                fontFamily: `customfont`,
            };
            const {queryByText} = render(
                <StylesVariablesProvider theme={theme}>
                    <Component />
                </StylesVariablesProvider>,
            );
            expect(queryByText(`#001122`)).toBeInTheDocument();
            expect(queryByText(`customfont`)).toBeInTheDocument();
        });
    });

    describe(`without css variables support`, () => {
        it(`should have default values applied if context is missing`, () => {
            const {queryByText} = render(<Component />);
            expect(queryByText(`#007eff`)).toBeInTheDocument();
            expect(queryByText(`"Open Sans",OpenSans,sans-serif`)).toBeInTheDocument();
        });

        it(`should NOT apply values from context because CSS variables are not supported`, () => {
            const theme = {
                colors: {colorMain: `#001122`},
                fontFamily: `customfont`,
            };
            const {queryByText} = render(
                <StylesVariablesProvider theme={theme}>
                    <Component />
                </StylesVariablesProvider>,
            );
            expect(queryByText(`#007eff`)).toBeInTheDocument();
            expect(queryByText(`"Open Sans",OpenSans,sans-serif`)).toBeInTheDocument();
        });
    });
});
