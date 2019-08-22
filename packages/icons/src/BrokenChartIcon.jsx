import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const BrokenChartIcon = ({color}) => {
    const {iconColorTertiary} = useStylesVariables();
    const safeColor = color || iconColorTertiary;

    return (
        <svg width="109" height="81" viewBox="0 0 109 81" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.61987 18.7969C7.28654 30.1302 9.86987 58.0469 14.8699 79.0469C41.1199 68.5469 73.6199 59.0469 106.62 59.5469" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.38013 52.5C3.88013 55.5 8.98723 61.25 15.6301 58C22.273 54.75 22.4446 39.5 29.8801 37.25C37.3157 35 36.6193 44.4072 41.8801 40.8262M50.6946 1.53161C60.9724 0.468463 59.6301 26.5762 66.6301 27.0762C73.6301 27.5762 71.96 11.057 76.3801 10.0761C84.0657 8.37053 78.8801 22.3261 86.8801 21.8261C94.8801 21.3261 96.6946 13.0317 105.195 15.0317" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45.4439 55.9683C47.2929 56.3128 48.7917 55.7277 50.1284 54.3556C52.095 52.337 52.2191 49.8313 51.8891 47.2307" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M54.2285 34.5332C56.4895 39.1531 60.2401 40.6215 65.0468 41.1817" stroke={safeColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

BrokenChartIcon.displayName = `BrokenChartIcon`;

BrokenChartIcon.propTypes = {
    color: PropTypes.string,
};
