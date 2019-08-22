import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export function FormatIcon({color}) {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M1,4 C1,3.447715 1.447715,3 2,3 L13,3 C13.5523,3 14,3.447715 14,4 C14,4.55228 13.5523,5 13,5 L2,5 C1.447715,5 1,4.55228 1,4 Z M6,8 C6,7.44772 6.44772,7 7,7 L13,7 C13.5523,7 14,7.44772 14,8 C14,8.55228 13.5523,9 13,9 L7,9 C6.44772,9 6,8.55228 6,8 Z M7,11 C6.44772,11 6,11.44772 6,12 C6,12.55228 6.44772,13 7,13 L13,13 C13.5523,13 14,12.55228 14,12 C14,11.44771 13.5523,11 13,11 L7,11 Z" />
        </svg>
    );
}

FormatIcon.displayName = `FormatIcon`;

FormatIcon.propTypes = {
    color: PropTypes.string,
};
