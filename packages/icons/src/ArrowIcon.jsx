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
    [Directions.TOP]: -90,
    [Directions.BOTTOM]: 90,
    [Directions.LEFT]: -180,
    [Directions.RIGHT]: 0,
};

export const ArrowIcon = ({direction, color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{transform: `rotate(${Rotations[direction]}deg)`, display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M11.062798,8.07992692 C11.0690869,8.33374301 10.9792983,8.58949731 10.7934322,8.78796851 L10.791438,8.79009177 C10.7844973,8.79746076 10.7774235,8.80475015 10.7702167,8.81195692 C10.7630104,8.81916326 10.7557214,8.82623663 10.7483529,8.83317701 L6.71857673,12.8629601 L6.71732562,12.861709 C6.32635906,13.2465444 5.69745564,13.2446513 5.30883302,12.8560296 C4.91830902,12.4655046 4.91830902,11.8323406 5.30883302,11.4418126 L5.3100616,11.4430412 L8.67085054,8.08225805 L5.29429484,4.70570816 L5.292893,4.70711 C4.902369,4.316582 4.902369,3.683418 5.292893,3.292893 C5.68182592,2.90396108 6.3114235,2.90237549 6.70232165,3.28813624 L6.70373928,3.2867186 L10.7058835,7.28886972 C10.7279663,7.30743955 10.7494351,7.32711528 10.7702167,7.34789692 C10.9718162,7.54949641 11.0693433,7.81576141 11.062798,8.07992692 Z M10.0880367,8.07992692 L10.0742074,8.06609753 L10.0728843,8.06742061 L10.0867137,8.08125 L10.0880367,8.07992692 Z" />
        </svg>
    );
};

ArrowIcon.propTypes = {
    color: PropTypes.string,
    direction: PropTypes.oneOf(Object.values(Directions)).isRequired,
};

ArrowIcon.direction = Directions;
ArrowIcon.displayName = `ArrowIcon`;
