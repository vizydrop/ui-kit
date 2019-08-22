import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const DataSourceIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <g fill={color || iconColorDefault}>
                <path d="M3 3C2.44772 3 2 3.44772 2 4C2 4.55228 2.44772 5 3 5H4C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3H3Z" />
                <path d="M8 3C7.44772 3 7 3.44772 7 4C7 4.55228 7.44772 5 8 5H13C13.5523 5 14 4.55228 14 4C14 3.44772 13.5523 3 13 3H8Z" />
                <path d="M8 7C7.44772 7 7 7.44772 7 8C7 8.55229 7.44772 9 8 9H13C13.5523 9 14 8.55229 14 8C14 7.44772 13.5523 7 13 7H8Z" />
                <path d="M7 12C7 11.4477 7.44772 11 8 11H13C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13H8C7.44772 13 7 12.5523 7 12Z" />
                <path d="M2 8C2 7.44772 2.44772 7 3 7H4C4.55228 7 5 7.44772 5 8C5 8.55229 4.55228 9 4 9H3C2.44772 9 2 8.55229 2 8Z" />
                <path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11H3Z" />
            </g>
        </svg>
    );
};

DataSourceIcon.displayName = `DataSourceIcon`;

DataSourceIcon.propTypes = {
    color: PropTypes.string,
};
