import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const FullScreenIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();
    const fillColor = color || iconColorDefault;

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" style={{display: `block`}}>
            <path fill={fillColor} d="M11.9996 9.99993C12.6419 10.0072 12.9628 9.46951 12.9673 8.83222L13 4.21911C13.0045 3.58181 12.4875 3.05931 11.8452 3.05208C11.8345 3.05196 11.8238 3.05198 11.8131 3.05215L7.19448 3.00012C6.55221 2.99289 6.00454 3.30135 6.00003 3.93865C6.00003 4.5 8.02098 5.03092 9.5 6.5C10.9994 7.98932 11.5 9.99993 11.9996 9.99993Z" />
            <path fill={fillColor} d="M4.00039 6.00007C3.35813 5.99284 3.03723 6.53049 3.03271 7.16778L3.00003 11.7809C2.99551 12.4182 3.51251 12.9407 4.15478 12.9479C4.16552 12.948 4.17623 12.948 4.18691 12.9479L8.80552 12.9999C9.44779 13.0071 9.99546 12.6986 9.99997 12.0613C9.99997 11.5 7.97902 10.9691 6.5 9.5C5.00061 8.01069 4.5 6.00007 4.00039 6.00007Z" />
        </svg>
    );
};

FullScreenIcon.displayName = `FullScreenIcon`;

FullScreenIcon.propTypes = {
    color: PropTypes.string,
};
