import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const AnnotationsIcon = ({color}) => {
    const stylesVariables = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || stylesVariables.iconColorDefault} fillRule="evenodd" d="M3 2C2.44775 2 2 2.44775 2 3V14C2 14.5522 2.44775 15 3 15C3.55225 15 4 14.5522 4 14V9H12.6694C13.1309 9 13.3462 8.42773 12.9985 8.12378L10.4302 5.87622C10.2021 5.677 10.2021 5.323 10.4302 5.12378L12.9985 2.87622C13.3462 2.57227 13.1309 2 12.6694 2H3Z" />
        </svg>
    );
};

AnnotationsIcon.displayName = `AnnotationsIcon`;

AnnotationsIcon.propTypes = {
    color: PropTypes.string,
};
