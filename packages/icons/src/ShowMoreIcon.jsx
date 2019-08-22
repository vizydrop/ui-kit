import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ShowMoreIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M13.3846 9.60938C14.2768 9.60938 15 8.88883 15 8C15 7.11117 14.2768 6.39062 13.3846 6.39062C12.4925 6.39062 11.7692 7.11117 11.7692 8C11.7692 8.88883 12.4925 9.60938 13.3846 9.60938ZM8 9.60938C8.89215 9.60938 9.61539 8.88883 9.61539 8C9.61539 7.11117 8.89215 6.39062 8 6.39062C7.10785 6.39062 6.38462 7.11117 6.38462 8C6.38462 8.88883 7.10785 9.60938 8 9.60938ZM2.61538 9.60938C3.50754 9.60938 4.23077 8.88883 4.23077 8C4.23077 7.11117 3.50754 6.39062 2.61538 6.39062C1.72323 6.39062 1 7.11117 1 8C1 8.88883 1.72323 9.60938 2.61538 9.60938Z" />
        </svg>
    );
};

ShowMoreIcon.displayName = `ShowMoreIcon`;

ShowMoreIcon.propTypes = {
    color: PropTypes.string,
};
