import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const FeedbackIcon = ({color}) => {
    const {linkColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || linkColorDefault} fillRule="evenodd" d="M6.50332,10.0005 C6.51833,10.0002 6.53333,10 6.54834,10 L14,10 L14,2 L2,2 L2,10.8294 C2.2141,10.7464 2.4242,10.6736 2.62706,10.6096 C4.1752,10.1365 5.78667,10.0171 6.50332,10.0005 Z M2,13.0202 C1.15578,13.4629 0.418037,14.0957 0,15 L0,2 C0,0.895432 0.895508,0 2,0 L14,0 C15.1045,0 16,0.895432 16,2 L16,10 C16,11.1046 15.1045,12 14,12 L6.54834,12 C5.66027,12.02 3.63133,12.1649 2,13.0202 Z" />
        </svg>
    );
};

FeedbackIcon.displayName = `FeedbackIcon`;

FeedbackIcon.propTypes = {
    color: PropTypes.string,
};
