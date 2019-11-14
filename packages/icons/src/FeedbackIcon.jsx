import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const FeedbackIcon = ({color}) => {
    const {linkColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || linkColorDefault} fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM4.53039 3.10433C5.50993 2.40886 6.70722 2 8 2C9.30283 2 10.5087 2.41524 11.4924 3.1206L10.0946 4.51841C9.48297 4.14964 8.76626 3.9375 8 3.9375C7.24392 3.9375 6.53609 4.14404 5.92984 4.50379L4.53039 3.10433ZM3.11418 4.51655C2.41272 5.49864 2 6.70112 2 8C2 9.30283 2.41524 10.5087 3.1206 11.4924L4.51841 10.0946C4.14964 9.48297 3.9375 8.76626 3.9375 8C3.9375 7.23775 4.14743 6.52453 4.51263 5.91501L3.11418 4.51655ZM4.53939 12.902C5.51726 13.5936 6.71117 14 8 14C9.29888 14 10.5014 13.5873 11.4834 12.8858L10.085 11.4874C9.47547 11.8526 8.76225 12.0625 8 12.0625C7.24794 12.0625 6.5436 11.8581 5.9395 11.5019L4.53939 12.902ZM12.8957 11.4696C13.5911 10.4901 14 9.29278 14 8C14 6.71117 13.5936 5.51726 12.902 4.53939L11.5019 5.9395C11.8581 6.54361 12.0625 7.24794 12.0625 8C12.0625 8.75608 11.856 9.46391 11.4962 10.0702L12.8957 11.4696ZM8 10.0625C9.13909 10.0625 10.0625 9.13909 10.0625 8C10.0625 6.86091 9.13909 5.9375 8 5.9375C6.86091 5.9375 5.9375 6.86091 5.9375 8C5.9375 9.13909 6.86091 10.0625 8 10.0625Z" />
        </svg>
    );
};

FeedbackIcon.displayName = `FeedbackIcon`;

FeedbackIcon.propTypes = {
    color: PropTypes.string,
};
