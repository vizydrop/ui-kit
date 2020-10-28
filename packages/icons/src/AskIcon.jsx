import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const AskIcon = ({color, width = 86, height = 83} = {}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width={width} height={height} viewBox="0 0 86 83" fill="none">
            <path
                d="M41.913 50.9736C41.913 44.7393 46.8514 45.1299 47.8504 39.8018C48.8494 34.4736 45.8504 31.9736 41.913 31.9736C37.9756 31.9736 35.9756 34.9736 35.9756 38.8018"
                stroke={color || iconColorDefault} strokeWidth="3" strokeLinecap="round"/>
            <ellipse cx="42.3974" cy="57.5317" rx="1.48435" ry="1.44186" fill="#232428"/>
            <path d="M23.7089 54C19.4134 56.2874 19.5078 56.1828 15.5892 59" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4856 42.0333C16.8506 41.396 9.91065 40.0449 7.19324 39.772" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.1153 28.9265C17.8357 26.7116 17.2177 26.8013 14.5892 25" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M58.9085 51.9998C65.6963 55.857 63.7829 55.1919 70.5902 58.9998" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M64.0902 41.0293C69.2404 40.2361 74.7127 39.9107 79.7021 39.7333" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M60.0677 29.4819C63.0771 26.7769 68.2514 23.159 68.0902 22.9999" stroke="black" strokeWidth="3"
                  strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

AskIcon.displayName = `AskIcon`;

AskIcon.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
};
