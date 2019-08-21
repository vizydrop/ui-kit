import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {calculateVariables} from './calculateVariables';
import StylesVariablesContext from './StylesVariablesContext';

const DEFAULT_STYLES_VARIABLES = calculateVariables({});

export default function StylesVariablesProvider(props) {
    const [stylesVariables, setStylesVariables] = useState(DEFAULT_STYLES_VARIABLES);
    useEffect(() => {
        const colors = props.theme && props.theme.colors;
        const variables = calculateVariables(colors || {});
        setStylesVariables(variables);

        const root = document.documentElement;
        Object.entries(variables).forEach(([key, value]) => {
            root.style.setProperty(`--vzdrp-${key}`, value);
        });
    }, [props.theme, setStylesVariables]);

    return (
        <StylesVariablesContext.Provider value={stylesVariables}>
            {props.children}
        </StylesVariablesContext.Provider>
    );
}

StylesVariablesProvider.propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
};
