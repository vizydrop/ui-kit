import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const FilterIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fillRule="evenodd" fill={color || iconColorDefault} d="M2.69515 3.70501C2.06806 3.07419 2.51487 2 3.40435 2H12.5961C13.4856 2 13.9324 3.07419 13.3053 3.70501L9.90641 7.12414C9.72016 7.3115 9.61561 7.56495 9.61561 7.82914V11.3376C9.61561 11.6018 9.51107 11.8552 9.32481 12.0426L8.09404 13.2807C7.46494 13.9135 6.38484 13.468 6.38484 12.5756V7.82914C6.38484 7.56495 6.2803 7.3115 6.09405 7.12414L2.69515 3.70501Z" />
        </svg>
    );
};

FilterIcon.displayName = `FilterIcon`;

FilterIcon.propTypes = {
    color: PropTypes.string,
};
