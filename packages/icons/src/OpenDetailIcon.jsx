import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const OpenDetailIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path d="M2 7C1.44771 7 1 7.44771 1 8V14C1 14.5523 1.44771 15 2 15H8C8.55228 15 9 14.5523 9 14V13H3V7H2Z" fill={color || iconColorDefault} />
            <path fillRule="evenodd" d="M6.25 1C5.55964 1 5 1.55964 5 2.25V9.75C5 10.4404 5.55964 11 6.25 11H13.75C14.4404 11 15 10.4404 15 9.75V2.25C15 1.55964 14.4404 1 13.75 1H6.25ZM13 5H7V9H13V5Z" fill={color || iconColorDefault} />
        </svg>
    );
};

OpenDetailIcon.displayName = `OpenDetailIcon`;

OpenDetailIcon.propTypes = {
    color: PropTypes.string,
};
