import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const AddIcon = ({className, color}) => {
    const stylesVariables = useStylesVariables();

    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || stylesVariables.iconColorDefault} fillRule="evenodd" d="M7,12.5 C7,13.0522 7.44775,13.5 8,13.5 C8.55225,13.5 9,13.0522 9,12.5 L9,9 L12.5,9 C13.0522,9 13.5,8.55225 13.5,8 C13.5,7.44775 13.0522,7 12.5,7 L9,7 L9,3.5 C9,2.947754 8.55225,2.5 8,2.5 C7.44775,2.5 7,2.947754 7,3.5 L7,7 L3.5,7 C2.947754,7 2.5,7.44775 2.5,8 C2.5,8.55225 2.947754,9 3.5,9 L7,9 L7,12.5 Z" />
        </svg>
    );
};

AddIcon.displayName = `AddIcon`;

AddIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
};
