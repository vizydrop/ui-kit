import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';


export const ChartBarIcon = ({color, size}) => {
    const {iconColorDefault} = useStylesVariables();

    if (size === `s`) {
        return (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{display: `block`}}>
                <path fill={color || iconColorDefault} fillRule="evenodd" clipRule="evenodd" d="M4 2C4.55228 2 5 2.44772 5 3L5 13C5 13.5523 4.55229 14 4 14C3.44772 14 3 13.5523 3 13L3 3C3 2.44772 3.44772 2 4 2Z" />
                <path fill={color || iconColorDefault} fillRule="evenodd" clipRule="evenodd" d="M8 7C8.55228 7 9 7.44772 9 8V13C9 13.5523 8.55229 14 8 14C7.44772 14 7 13.5523 7 13V8C7 7.44772 7.44772 7 8 7Z" />
                <path fill={color || iconColorDefault} fillRule="evenodd" clipRule="evenodd" d="M12 4C12.5523 4 13 4.44772 13 5V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V5C11 4.44772 11.4477 4 12 4Z" />
            </svg>
        );
    }

    return (
        <svg width="32" height="22" viewBox="0 0 32 22" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} d="M26,0.19714 C26.5522847,0.19714 27,0.64485525 27,1.19714 L27,16.99994 C27,17.5522247 26.5522847,17.99994 26,17.99994 C25.4477153,17.99994 25,17.5522247 25,16.99994 L25,1.19714 C25,0.64485525 25.4477153,0.19714 26,0.19714 Z M21,6 C21.5522847,6 22,6.44771525 22,7 L22,17 C22,17.5522847 21.5522847,18 21,18 C20.4477153,18 20,17.5522847 20,17 L20,7 C20,6.44771525 20.4477153,6 21,6 Z M16,2.0625 C16.5522847,2.0625 17,2.51021525 17,3.0625 L17,17 C17,17.5522847 16.5522847,18 16,18 C15.4477153,18 15,17.5522847 15,17 L15,3.0625 C15,2.51021525 15.4477153,2.0625 16,2.0625 Z M11,8 C11.5522847,8 12,8.44771525 12,9 L12,17 C12,17.5522847 11.5522847,18 11,18 C10.4477153,18 10,17.5522847 10,17 L10,9 C10,8.44771525 10.4477153,8 11,8 Z M6,12 C6.55228475,12 7,12.4477153 7,13 L7,17 C7,17.5522847 6.55228475,18 6,18 C5.44771525,18 5,17.5522847 5,17 L5,13 C5,12.4477153 5.44771525,12 6,12 Z M1,7.0625 C1.55228475,7.0625 2,7.51021525 2,8.0625 L2,17 C2,17.5522847 1.55228475,18 1,18 C0.44771525,18 0,17.5522847 0,17 L0,8.0625 C2.22044605e-16,7.51021525 0.44771525,7.0625 1,7.0625 Z" transform="translate(3 2)" />
        </svg>
    );
};

ChartBarIcon.displayName = `ChartBarIcon`;

ChartBarIcon.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOf([`s`, `m`]),
};

ChartBarIcon.defaultProps = {
    size: `m`,
};
