import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ChartFallbackIcon = ({color}) => {
    const {iconColorTertiary} = useStylesVariables();

    return (
        <svg
            width="144"
            height="128"
            viewBox="0 0 144 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.84778 49.3672C10.9133 74.8777 14.3186 100.277 19.0637 125.454C54.4007 109.225 93.1989 100.555 132.109 100.222"
                stroke={color || iconColorTertiary}
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M133.622 50.5972C132.661 37.8463 130.587 17.4105 128.796 6.84769C86.4566 11.704 36.7553 24.1512 21.0218 28.8235"
                stroke={color || iconColorTertiary}
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2 101.946C5.24757 106.621 9.49895 111.816 15.2855 111.758C22.6073 111.7 26.6816 103.678 29.2796 97.0402C31.9367 90.3451 36.8967 82.5534 44.1594 83.65C48.4698 84.2849 52.8393 88.4405 56.6773 86.3627C65.7706 81.4568 63.2316 71.4718 63.5858 61.256C63.8811 52.0213 66.5382 36.207 75.6904 38.1116C84.7836 40.0163 89.094 79.6676 97.1244 78.2824C105.155 76.8972 102.801 62.7566 107.761 61.256C115.555 58.8319 114.661 82.2183 124.817 80.6023C129.659 79.8519 137.276 70.7904 142 72.1179"
                stroke={color || iconColorTertiary}
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle
                cx="106.62"
                cy="34.5303"
                r="8.75"
                stroke={color || iconColorTertiary}
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

ChartFallbackIcon.displayName = `ChartFallbackIcon`;

ChartFallbackIcon.propTypes = {
    color: PropTypes.string,
};
