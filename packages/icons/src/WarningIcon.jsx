import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const WarningIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fillRule="evenodd" clipRule="evenodd" d="M13 7.99988C13 10.7613 10.7614 12.9999 8 12.9999C6.97887 12.9999 6.02924 12.6938 5.23786 12.1683L12.1685 5.23773C12.6939 6.02912 13 6.97875 13 7.99988ZM3.82525 10.7525L10.7526 3.82513C9.96315 3.30353 9.01704 2.99988 8 2.99988C5.23858 2.99988 3 5.23845 3 7.99988C3 9.01692 3.30365 9.96303 3.82525 10.7525ZM15 7.99988C15 11.8659 11.866 14.9999 8 14.9999C4.13401 14.9999 1 11.8659 1 7.99988C1 4.13388 4.13401 0.999878 8 0.999878C11.866 0.999878 15 4.13388 15 7.99988Z" fill={color || iconColorDefault} />
        </svg>
    );
};

WarningIcon.displayName = `WarningIcon`;

WarningIcon.propTypes = {
    color: PropTypes.string,
};
