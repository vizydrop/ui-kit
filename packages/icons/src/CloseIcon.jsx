import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const CloseIcon = ({color, className}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg className={className} width="16px" height="16px" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M11.4976827,3.08773864 C11.9088827,2.67672864 12.5582827,2.66012864 12.9488827,3.05062864 C13.3394827,3.44118864 13.3228827,4.09090864 12.9117827,4.50191864 L9.41323265,8.00039864 L12.9117827,11.4988986 C13.3228827,11.9097986 13.3394827,12.5595986 12.9488827,12.9501986 C12.5582827,13.3406986 11.9083827,13.3240986 11.4976827,12.9130986 L7.99916265,9.41451864 L4.50063265,12.9130986 C4.08998265,13.3240986 3.44008265,13.3406986 3.04946265,12.9501986 C2.65883265,12.5595986 2.67543265,11.9097986 3.08657265,11.4988986 L6.58510265,8.00039864 L3.08657265,4.50191864 C2.67543265,4.09090864 2.65883265,3.44118864 3.04946265,3.05062864 C3.44008265,2.66012864 4.08949265,2.67672864 4.50063265,3.08773864 L7.99916265,6.58626864 L11.4976827,3.08773864 Z" />
        </svg>
    );
};

CloseIcon.displayName = `CloseIcon`;

CloseIcon.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
};
