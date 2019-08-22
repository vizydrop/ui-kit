import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const DeleteIcon = ({color}) => {
    const {iconErrorColor} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconErrorColor} fillRule="evenodd" d="M6.00781,1 C5.45553,1 5.00781,1.44772 5.00781,2 L2.40625,2 C1.85397,2 1.40625,2.44772 1.40625,3 C1.40625,3.55228 1.85397,4 2.40625,4 L2.87857,4 L3.75439,12.8604 C3.75439,13.4647 4.24463,14 4.89307,14 L11.1562,14 C11.8042,14 12.2954,13.4642 12.2954,12.8604 L13.1269,4 L13.4844,4 C14.0367,4 14.4844,3.55228 14.4844,3 C14.4844,2.44772 14.0367,2 13.4844,2 L10.9922,2 C10.9922,1.44772 10.5445,1 9.99219,1 L6.00781,1 Z M5.10205,6.76251 C5.04736,6.20325 5.48682,5.71875 6.04883,5.71875 C6.57422,5.71875 7,6.14465 7,6.67004 L7,10.8951 C7,11.3068 6.66602,11.6406 6.25439,11.6406 C5.87061,11.6406 5.5498,11.3494 5.51221,10.9675 L5.10205,6.76251 Z M9.93555,5.71875 C10.4976,5.71875 10.937,6.20325 10.8823,6.76251 L10.4722,10.9675 C10.4346,11.3494 10.1138,11.6406 9.72998,11.6406 C9.31836,11.6406 8.98438,11.3068 8.98438,10.8951 L8.98438,6.67004 C8.98438,6.14465 9.41016,5.71875 9.93555,5.71875 Z" />
        </svg>
    );
};

DeleteIcon.displayName = `DeleteIcon`;

DeleteIcon.propTypes = {
    color: PropTypes.string,
};
