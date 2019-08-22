import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const BackIcon = ({color}) => {
    const stylesVariables = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path
                d="M5.12352 8.96932C5.64127 9.59415 6.1342 10.198 6.26646 10.3891C6.573 10.8321 6.81571 11.2842 6.42519 11.6747C6.03467 12.0652 5.51024 11.9264 5.11971 11.5359L2.29289 8.70902C1.90237 8.3185 1.90237 7.68533 2.29289 7.29481L2.30771 7.28029L5.12069 4.46729C5.51121 4.07677 6.03564 3.9379 6.42617 4.32843C6.81669 4.71895 6.57398 5.17107 6.26744 5.61404C6.13741 5.80194 5.6588 6.38871 5.15071 7.00219L12.9643 7.23902C13.5166 7.23902 14.0077 7.44939 14.0077 8.00167C14.0077 8.55396 13.5166 8.73995 12.9643 8.73995L5.12352 8.96932Z"
                fill={color || stylesVariables.iconColorDefault}
            />
        </svg>
    );
};

BackIcon.displayName = `BackIcon`;

BackIcon.propTypes = {
    color: PropTypes.string,
};
