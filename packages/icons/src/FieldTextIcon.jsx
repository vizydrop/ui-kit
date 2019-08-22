import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const FieldTextIcon = ({color}) => {
    const {iconColorTertiary} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorTertiary} d="M11.6797,4.53064 L9.14844,4.53064 L9.14844,12.851 C9.14844,13.3301 9.04167,13.6869 8.82812,13.9213 C8.61458,14.1504 8.33854,14.265 8,14.265 C7.65625,14.265 7.375,14.1478 7.15625,13.9135 C6.94271,13.6791 6.83594,13.3249 6.83594,12.851 L6.83594,4.53064 L4.30469,4.53064 C3.90885,4.53064 3.61458,4.4447 3.42188,4.27283 C3.22917,4.09574 3.13281,3.86397 3.13281,3.57751 C3.13281,3.28064 3.23177,3.04626 3.42969,2.87439 C3.63281,2.70251 3.92448,2.61658 4.30469,2.61658 L11.6797,2.61658 C12.0807,2.61658 12.3776,2.70512 12.5703,2.8822 C12.7682,3.05929 12.8672,3.29106 12.8672,3.57751 C12.8672,3.86397 12.7682,4.09574 12.5703,4.27283 C12.3724,4.4447 12.0755,4.53064 11.6797,4.53064 Z" />
        </svg>
    );
};

FieldTextIcon.displayName = `FieldTextIcon`;

FieldTextIcon.propTypes = {
    color: PropTypes.string,
};
