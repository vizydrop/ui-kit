import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const CopyIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M3,1 L9,1 C10.1046,1 11,1.89543 11,3 L11,3.6 C11,4.15228 10.5523,4.6 10,4.6 C9.44772,4.6 9,4.15228 9,3.6 L9,3 L3,3 L3,9 L3.6,9 C4.15228,9 4.6,9.44772 4.6,10 C4.6,10.5523 4.15228,11 3.6,11 L3,11 C1.89543,11 1,10.1046 1,9 L1,3 C1,1.89543 1.89543,1 3,1 Z M6,5 L14,5 C14.5523,5 15,5.44772 15,6 L15,14 C15,14.5523 14.5523,15 14,15 L6,15 C5.44772,15 5,14.5523 5,14 L5,6 C5,5.44772 5.44772,5 6,5 Z M7,13 L13,13 L13,7 L7,7 L7,13 Z" />
        </svg>
    );
};

CopyIcon.displayName = `CopyIcon`;

CopyIcon.propTypes = {
    color: PropTypes.string,
};
