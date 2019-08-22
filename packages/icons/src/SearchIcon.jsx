import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const SearchIcon = ({color, ...props}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}} {...props}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M11.1745628,9.75988182 L13.71027,12.29559 C14.10092,12.68624 14.10092,13.31962 13.71027,13.71027 C13.31962,14.10092 12.68624,14.10092 12.29559,13.71027 L9.75988182,11.1745628 C8.96921708,11.6982335 8.02107234,12.0032 7.00171,12.0032 C4.23926,12.0032 2,9.76392 2,7.00171 C2,4.23926 4.23926,2 7.00171,2 C9.76392,2 12.0032,4.23926 12.0032,7.00171 C12.0032,8.02107234 11.6982335,8.96921708 11.1745628,9.75988182 L11.1745628,9.75988182 Z M7.00171,10.00269 C8.65918,10.00269 10.00269,8.65918 10.00269,7.00171 C10.00269,5.34424 8.65918,4.00073 7.00171,4.00073 C5.34424,4.00073 4.00073,5.34424 4.00073,7.00171 C4.00073,8.65918 5.34424,10.00269 7.00171,10.00269 Z" />
        </svg>
    );
};

SearchIcon.displayName = `SearchIcon`;

SearchIcon.propTypes = {
    color: PropTypes.string,
};
