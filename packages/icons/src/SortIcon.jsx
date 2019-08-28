import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const Directions = {
    ASCENDING: `ascending`,
    DESCENDING: `descending`,
};
export const Rotations = {
    [Directions.ASCENDING]: 0,
    [Directions.DESCENDING]: 180,
};

export const SortIcon = ({direction, color}) => {
    const {iconColorTertiary} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{transform: `rotateY(${Rotations[direction]}deg)`, display: `block`}}>
            <path d="M12.4 4.19998C13.0592 3.70556 14 4.17594 14 4.99998V11C14 11.5523 13.5523 12 13 12H4.99999C4.03897 12 3.63118 10.7766 4.39999 10.2L12.4 4.19998Z" fill={color || iconColorTertiary} />
        </svg>
    );
};

SortIcon.propTypes = {
    color: PropTypes.string,
    direction: PropTypes.oneOf(Object.values(Directions)).isRequired,
};

SortIcon.displayName = `SortIcon`;
SortIcon.direction = Directions;
