import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const UpgradeIcon = ({color}) => {
    const {linkColorDefault} = useStylesVariables();

    return (
        <svg width="16" height="16" viewBox="0 0 16 16" version="1.1" style={{display: `block`}}>
            <path fill={color || linkColorDefault} fillRule="evenodd" d="M12.0627,10.0049 L12.0627,15.0001 C12.0627,15.5523 11.615,16.0001 11.0627,16.0001 L5.06274,16.0001 C4.5105,16.0001 4.06274,15.5523 4.06274,15.0001 L4.06274,10.0049 L1.13135,10.0049 C0.506592,10.0049 0,9.45001 0,8.76544 C0,8.43658 0.119141,8.1214 0.331299,7.88898 L7.19995,0.363098 C7.64185,-0.121033 8.35815,-0.121033 8.80005,0.363098 L15.6685,7.88898 C16.1104,8.37311 16.1104,9.15778 15.6685,9.64191 C15.4563,9.87457 15.1687,10.0049 14.8687,10.0049 L12.0627,10.0049 Z M7.99999,2.45334 L2.9332,8.00494 L6.06274,8.00494 L6.06274,14.0001 L10.0627,14.0001 L10.0627,8.00494 L13.0666,8.00494 L7.99999,2.45334 Z" />
        </svg>
    );
};

UpgradeIcon.displayName = `UpgradeIcon`;

UpgradeIcon.propTypes = {
    color: PropTypes.string,
};
