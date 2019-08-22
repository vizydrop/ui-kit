import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export function CalculationIcon({color}) {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" style={{display: `block`}}>
            <path
                fill={color || iconColorDefault}
                fillRule="evenodd"
                d="M3,0 C3.55228,0 4,0.44772 4,1 L4,2 L5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,5 C4,5.55228 3.55228,6 3,6 C2.44772,6 2,5.55228 2,5 L2,4 L1,4 C0.447715,4 0,3.55228 0,3 C0,2.44772 0.447715,2 1,2 L2,2 L2,1 C2,0.44772 2.44772,0 3,0 Z M10,8 C9.44772,8 9,8.44772 9,9 C9,9.5523 9.44772,10 10,10 L14,10 C14.5523,10 15,9.5523 15,9 C15,8.44772 14.5523,8 14,8 L10,8 Z M9,12 C9,11.4477 9.44772,11 10,11 L14,11 C14.5523,11 15,11.4477 15,12 C15,12.5523 14.5523,13 14,13 L10,13 C9.44772,13 9,12.5523 9,12 Z M1.79304,10.8787 C1.40252,11.2692 1.40252,11.9024 1.79304,12.2929 C2.18357,12.6834 2.81673,12.6834 3.20726,12.2929 L12.793,2.70714 C13.1836,2.31661 13.1836,1.68345 12.793,1.29292 C12.4025,0.9024 11.7694,0.9024 11.3788,1.29292 L1.79304,10.8787 Z"
                transform="translate(0 1)"
            />
        </svg>
    );
}

CalculationIcon.displayName = `CalculationIcon`;

CalculationIcon.propTypes = {
    color: PropTypes.string,
};
