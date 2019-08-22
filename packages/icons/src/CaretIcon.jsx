import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const Directions = {
    TOP: `top`,
    BOTTOM: `bottom`,
    LEFT: `left`,
    RIGHT: `right`,
};

export const Rotations = {
    [Directions.TOP]: 180,
    [Directions.BOTTOM]: 0,
    [Directions.LEFT]: 90,
    [Directions.RIGHT]: -90,
};

export const CaretIcon = ({direction, color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg
            width="12px"
            height="12px"
            viewBox="0 0 12 12"
            version="1.1"
            style={{transform: `rotateZ(${Rotations[direction]}deg)`, display: `block`}}
        >
            <g fill={color || iconColorDefault} fillRule="evenodd">
                <polygon points="2 4 6 8.196 10.026 4 2 4 2 4" />
            </g>
        </svg>
    );
};

CaretIcon.propTypes = {
    color: PropTypes.string,
    direction: PropTypes.oneOf(Object.values(Directions)).isRequired,
};

CaretIcon.displayName = `CaretIcon`;
CaretIcon.direction = Directions;
