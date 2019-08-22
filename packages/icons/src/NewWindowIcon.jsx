import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const NewWindowIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M9.81259 4.82268C9.00465 4.74697 8.22913 4.66854 8.00046 4.62692C7.47047 4.53045 6.97916 4.38238 6.97916 3.83009C6.97916 3.27781 7.44818 3.00517 8.00046 3.00517L11.9982 3.00519C12.5505 3.00519 12.9982 3.4529 12.9982 4.00519L12.998 4.02593L12.998 8.00409C12.998 8.55638 12.7254 9.0254 12.1731 9.0254C11.6208 9.0254 11.4727 8.53408 11.3763 8.00409C11.3353 7.77929 11.2588 7.02595 11.1843 6.23288L5.49182 11.5905C5.1013 11.981 4.60527 12.1795 4.21474 11.789C3.82422 11.3985 4.03998 10.9197 4.4305 10.5291L9.81259 4.82268Z" />
        </svg>
    );
};

NewWindowIcon.displayName = `NewWindowIcon`;

NewWindowIcon.propTypes = {
    color: PropTypes.string,
};
