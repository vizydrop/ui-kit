import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const SmallScreenIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();
    const fillColor = color || iconColorDefault;

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" style={{display: `block`}}>
            <path fill={fillColor} d="M9.85746 1.00006C9.30694 0.993862 9.03189 1.4547 9.02802 2.00096L9 5.95505C8.99613 6.50131 9.43927 6.94916 9.98979 6.95536C9.99899 6.95546 10.0082 6.95544 10.0173 6.9553L13.9761 6.99989C14.5267 7.00609 14.9961 6.7417 15 6.19544C15 5.71429 13.2677 5.25921 12 4C10.7148 2.72344 10.2857 1.00006 9.85746 1.00006Z" />
            <path fill={fillColor} d="M6.1425 14.9999C6.69301 15.0061 6.96806 14.5453 6.97194 13.999L6.99995 10.0449C7.00382 9.49869 6.56068 9.05084 6.01017 9.04464C6.00096 9.04453 5.99178 9.04456 5.98263 9.0447L2.02382 9.00011C1.4733 8.99391 1.00387 9.2583 1 9.80456C1 10.2857 2.73225 10.7408 3.99998 12C5.28517 13.2766 5.71426 14.9999 6.1425 14.9999Z" />
        </svg>
    );
};

SmallScreenIcon.displayName = `SmallScreenIcon`;

SmallScreenIcon.propTypes = {
    color: PropTypes.string,
};
