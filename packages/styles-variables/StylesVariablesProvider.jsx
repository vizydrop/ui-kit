import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {
    calculateVariablesFromTheme,
    calculateCustomCssPropertiesFromTheme,
} from './calculateVariables';
import StylesVariablesContext from './StylesVariablesContext';

export default function StylesVariablesProvider({theme, children}) {
    const [stylesVariables, setStylesVariables] = useState(() => calculateVariablesFromTheme(theme));

    useEffect(() => {
        const variables = calculateVariablesFromTheme(theme);
        setStylesVariables(variables);

        const cssVariables = calculateCustomCssPropertiesFromTheme(theme);

        const root = document.documentElement;
        Object.entries(cssVariables).forEach(([key, value]) => {
            root.style.setProperty(key, value);
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
