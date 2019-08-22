import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const GuideIcon = ({color}) => {
    const {linkColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || linkColorDefault} fillRule="evenodd" d="M1.44482,0.00920575 C4.28052,0.338443 6.46558,0.888487 8,1.65934 C9.53442,0.888487 11.7195,0.338443 14.5552,0.00920575 C14.6079,0.00307449 14.6611,0 14.7144,0 C15.4243,0 16,0.53561 16,1.19632 L16,13.1264 C16,13.7393 15.5022,14.2532 14.8469,14.3163 C12.4631,14.5462 10.5142,14.9574 9,15.5499 C8.5008,15.7452 8,16 8,16 C8,16 7.44532,15.7242 7,15.5499 C5.48584,14.9574 3.53687,14.5462 1.15308,14.3163 C0.497803,14.2532 0,13.7393 0,13.1264 L0,1.19632 C0,0.53561 0.575684,0 1.28564,0 C1.33887,0 1.39209,0.00307449 1.44482,0.00920575 Z M9,3.35694 L9,13.464 C10.418,12.9922 12.0837,12.6537 14,12.4365 L14,2.05331 C11.8123,2.35565 10.1404,2.8022 9,3.35694 Z M7,3.35694 C5.85962,2.8022 4.18774,2.35565 2,2.05331 L2,12.4365 C3.91626,12.6537 5.58203,12.9922 7,13.464 L7,3.35694 Z" />
        </svg>
    );
};

GuideIcon.displayName = `GuideIcon`;

GuideIcon.propTypes = {
    color: PropTypes.string,
};
