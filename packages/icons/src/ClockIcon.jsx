import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ClockIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="14" height="14" viewBox="0 0 14 14">
            <g fill={color || iconColorDefault}>
                <path d="M8,15 C4.13401,15 1,11.866 1,8 C1,4.13401 4.13401,1 8,1 C11.866,1 15,4.13401 15,8 C15,11.866 11.866,15 8,15 Z M8,13 C10.7614,13 13,10.7614 13,8 C13,5.23858 10.7614,3 8,3 C5.23858,3 3,5.23858 3,8 C3,10.7614 5.23858,13 8,13 Z M9,5 L9,7 L11,7 C11.5523,7 12,7.44772 12,8 C12,8.55228 11.5523,9 11,9 L8,9 C7.44772,9 7,8.55228 7,8 L7,5 C7,4.44772 7.44772,4 8,4 C8.55228,4 9,4.44772 9,5 Z" transform="translate(-1 -1)" />
            </g>
        </svg>
    );
};

ClockIcon.displayName = `ClockIcon`;

ClockIcon.propTypes = {
    color: PropTypes.string,
};
