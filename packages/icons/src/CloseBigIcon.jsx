import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const CloseBigIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <g fill={color || iconColorDefault} fillRule="evenodd">
                <path d="M0.292893219,14.2928932 C-0.0976310729,14.6834175 -0.0976310729,15.3165825 0.292893219,15.7071068 C0.683417511,16.0976311 1.31658249,16.0976311 1.70710678,15.7071068 L15.7071068,1.70710678 C16.0976311,1.31658249 16.0976311,0.683417511 15.7071068,0.292893219 C15.3165825,-0.0976310729 14.6834175,-0.0976310729 14.2928932,0.292893219 L0.292893219,14.2928932 L0.292893219,14.2928932 Z" />
                <path d="M14.2928932,15.7071068 C14.6834175,16.0976311 15.3165825,16.0976311 15.7071068,15.7071068 C16.0976311,15.3165825 16.0976311,14.6834175 15.7071068,14.2928932 L1.70710678,0.292893219 C1.31658249,-0.0976310729 0.683417511,-0.0976310729 0.292893219,0.292893219 C-0.0976310729,0.683417511 -0.0976310729,1.31658249 0.292893219,1.70710678 L14.2928932,15.7071068 L14.2928932,15.7071068 Z" />
            </g>
        </svg>
    );
};

CloseBigIcon.displayName = `CloseBigIcon`;

CloseBigIcon.propTypes = {
    color: PropTypes.string,
};
