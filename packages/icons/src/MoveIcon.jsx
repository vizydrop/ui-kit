import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const MoveIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M5.18202937,7.00051248 C5.69009386,6.38706709 6.16866879,5.80033288 6.29869,5.61245 C6.60523,5.16947 6.84794,4.71736 6.45742,4.32683 C6.06689,3.93631 5.54246,4.07517 5.15194,4.4657 L2.33685172,7.28079824 C2.33258571,7.28491781 2.32834826,7.28908174 2.32414,7.29329 C1.93362,7.68381 1.93362,8.31697 2.32414,8.7075 L5.15096,11.5343 C5.54149,11.9249 6.06592,12.0637 6.45644,11.6732 C6.84696,11.2827 6.60425,10.8306 6.29771,10.3876 C6.16544271,10.1964566 5.67244813,9.59253966 5.15464817,8.96764684 L12.9957,8.73828 C13.5479,8.73828 14.0391,8.55228 14.0391,8 C14.0391,7.44772 13.5479,7.23735 12.9957,7.23735 L5.18202937,7.00051248 Z" transform="matrix(-1 0 0 1 16.07 0)" />
        </svg>
    );
};

MoveIcon.displayName = `MoveIcon`;

MoveIcon.propTypes = {
    color: PropTypes.string,
};
