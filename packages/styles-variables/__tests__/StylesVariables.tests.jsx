import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {render} from '@testing-library/react';
import StylesVariablesProvider from '../StylesVariablesProvider';
import useStylesVariables from '../useStylesVariables';


const Component = () => {
    const {colorMain} = useStylesVariables();
    return (<div>{colorMain}</div>);
};

describe(`styles variables`, () => {
    it(`should have default values applied if context is missing`, () => {
        const {queryByText} = render(<Component />);
        expect(queryByText(`#007eff`)).toBeInTheDocument();
    });

    it(`should apply values from context`, () => {
        const theme = {colors: {colorMain: `#001122`}};
        const {queryByText} = render(
            <StylesVariablesProvider theme={theme}>
                <Component />
            </StylesVariablesProvider>,
        );
        expect(queryByText(`#001122`)).toBeInTheDocument();
    });
});
