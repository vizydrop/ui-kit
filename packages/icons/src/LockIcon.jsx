import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const LockIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg name="lock-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path fillRule="evenodd" fill={color || iconColorDefault} clipRule="evenodd" d="M2.91593 6.99994V4.70588C2.91593 2.10689 5.06036 0 7.70576 0C10.3512 0 12.4956 2.10689 12.4956 4.70588V6.99994C13.5537 6.99994 14.4115 7.8427 14.4115 8.88229V14.1176C14.4115 15.1572 13.5537 16 12.4956 16H2.91593C1.85787 16 1 15.1572 1 14.1176V8.88229C1 7.8427 1.85787 6.99994 2.91593 6.99994ZM4.83187 4.70588C4.83187 3.14648 6.11867 1.88235 7.70576 1.88235C9.29286 1.88235 10.5797 3.14648 10.5797 4.70588V6.99994H4.83187V4.70588Z" />
            <rect fill={color || iconColorDefault} x="1" y="7" width="13.4116" height="9" rx="1" />
        </svg>
    );
};

LockIcon.propTypes = {
    color: PropTypes.string,
};

LockIcon.displayName = `LockIcon`;
