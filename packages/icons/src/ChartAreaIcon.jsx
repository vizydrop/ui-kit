import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ChartAreaIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="32" height="22" viewBox="0 0 32 22" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M28,1.50268 C28,0.2759 26.6075,-0.43212 25.6162,0.29067 L21.7719,3.09384 C21.6596,3.17573 21.5183,3.20718 21.3819,3.18065 L17.4746,2.42091 C17.015,2.33153 16.5399,2.46195 16.1903,2.7735 L11.2746,7.1545 C11.1233,7.2893 10.9056,7.3195 10.7233,7.2309 L7.93657,5.8762 C7.4966,5.6623 6.97996,5.6764 6.55232,5.914 L0.77154,9.1256 C0.29534,9.3901 0,9.8921 0,10.4368 L0,13.5359 C0,14.3643 0.67157,15.0359 1.5,15.0359 L26.5,15.0359 C27.3284,15.0359 28,14.3643 28,13.5359 L28,1.50268 Z" transform="translate(2 5)" />
        </svg>
    );
};

ChartAreaIcon.displayName = `ChartAreaIcon`;

ChartAreaIcon.propTypes = {
    color: PropTypes.string,
};
