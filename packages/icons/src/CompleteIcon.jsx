import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const CompleteIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();
    const safeColor = color || iconColorDefault;

    return (
        <svg width="33" height="33" viewBox="0 0 33 33" version="1.1" style={{display: `block`}}>
            <g fill="none" fillRule="evenodd">
                <circle cx="16" cy="16" r="14.5" transform="translate(0.546875 0.0186768)" stroke={safeColor} strokeWidth="3" />
                <line x1="1.5" y1="-1.5" x2="6.37562" y2="-1.5" transform="translate(8.83594 16.8223) rotate(45)" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="1.5" y1="-1.5" x2="13.2518" y2="-1.5" transform="translate(24.8359 11.9601) scale(-1 1) rotate(45)" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    );
};

CompleteIcon.displayName = `CompleteIcon`;

CompleteIcon.propTypes = {
    color: PropTypes.string,
};
