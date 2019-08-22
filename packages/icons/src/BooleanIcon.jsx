import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export function BooleanIcon({color}) {
    const stylesVariables = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || stylesVariables.iconColorTertiary} fillRule="evenodd" d="M6,9 C7.65685,9 9,7.65685 9,6 C9,4.34315 7.65685,3 6,3 C4.34315,3 3,4.34315 3,6 C3,7.65685 4.34315,9 6,9 Z M6,11 C3.23858,11 1,8.76142 1,6 C1,3.23858 3.23858,1 6,1 C8.76142,1 11,3.23858 11,6 C11,8.76142 8.76142,11 6,11 Z M6.54551,12.5 C9.85922,12.5 12.5455,9.81372 12.5455,6.50001 C12.5455,6.21549 12.5257,5.93559 12.4874,5.66162 C13.9888,6.52435 14.9999,8.14405 14.9999,9.99991 C14.9999,12.7613 12.7613,14.9999 9.99989,14.9999 C8.12068,14.9999 6.48361,13.9632 5.62939,12.4305 C5.92808,12.4763 6.23403,12.5 6.54551,12.5 Z" />
        </svg>
    );
}

BooleanIcon.displayName = `BooleanIcon`;

BooleanIcon.propTypes = {
    color: PropTypes.string,
};
