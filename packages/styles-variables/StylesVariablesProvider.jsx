import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {calculateVariables} from './calculateVariables';
import StylesVariablesContext from './StylesVariablesContext';

function runVariablesCalculation(theme) {
    return calculateVariables({
        ...theme && theme.colors,
        fontFamily: theme && theme.fontFamily,
    });
}

export default function StylesVariablesProvider({theme, children}) {
    const [stylesVariables, setStylesVariables] = useState(() => runVariablesCalculation(theme));

    useEffect(() => {
        const variables = runVariablesCalculation(theme);
        setStylesVariables(variables);

        const root = document.documentElement;
        Object.entries(variables).forEach(([key, value]) => {
            root.style.setProperty(`--vzdrp-${key}`, value);
        });
    }, [theme, setStylesVariables]);

    return (
        <StylesVariablesContext.Provider value={stylesVariables}>
            {children}
        </StylesVariablesContext.Provider>
    );
}

StylesVariablesProvider.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
};
