import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const CheckedIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} fillRule="evenodd" d="M2.66341216,8.7589708 C2.25272216,8.4711808 1.66280116,8.4136308 1.29781516,8.8028408 C0.932829164,9.1920508 0.952468164,9.8034508 1.34168016,10.1684408 L4.59242216,13.7401408 C4.95015216,14.0756408 5.49556216,14.0861408 5.86485216,13.7834408 C5.93143216,13.7422408 5.99404216,13.6921408 6.05097216,13.6333408 L14.2844222,4.9393408 C14.6554222,4.5558108 14.6452222,3.9441818 14.2617222,3.5732258 C13.8781222,3.2022702 13.2665222,3.2124606 12.8956222,3.5959868 L5.23694216,10.7342508 L2.66341216,8.7589708 Z" />
        </svg>
    );
};

CheckedIcon.displayName = `CheckedIcon`;

CheckedIcon.propTypes = {
    color: PropTypes.string,
};
