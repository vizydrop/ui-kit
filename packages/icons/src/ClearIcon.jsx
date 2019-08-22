import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ClearIcon = ({color, className}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg className={className} width="16" height="16" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="7" fill="#E6F2FF" />
            <path
                d="M10.1211 5.17159C10.3164 4.97633 10.6329 4.97633 10.8282 5.17159C11.0235 5.36686 11.0235 5.68344 10.8282 5.8787L8.70715 7.99976L10.8287 10.1213C11.024 10.3166 11.024 10.6332 10.8287 10.8284C10.6335 11.0237 10.3169 11.0237 10.1216 10.8284L8.00004 8.70686L5.87846 10.8284C5.68319 11.0237 5.36661 11.0237 5.17135 10.8284C4.97609 10.6332 4.97609 10.3166 5.17135 10.1213L7.29293 7.99976L5.17188 5.8787C4.97662 5.68344 4.97662 5.36686 5.17188 5.17159C5.36714 4.97633 5.68372 4.97633 5.87898 5.17159L8.00004 7.29265L10.1211 5.17159Z"
                fill={color || iconColorDefault}
            />
        </svg>
    );
};

ClearIcon.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
};
