// @flow
import React from 'react';
import useStylesVariables from "@vizydrop/styles-variables/useStylesVariables";

export function PieChartIcon() {
    const {iconColorDefault, iconColorLight} = useStylesVariables();

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            version="1.1"
            style={{display: `block`}}
        >
            <circle cx="8" cy="8" r="8" fill={iconColorLight} />
            <path
                d="M15.3391 4.81593C16.0264 6.4001 16.1826 8.16413 15.7845 9.84445C15.3863 11.5248 14.4552 13.0312 13.1302 14.1385C11.8051 15.2459 10.1573 15.8948 8.43304 15.9883C6.70873 16.0817 5.00046 15.6148 3.56349 14.6571C2.12651 13.6995 1.03798 12.3026 0.460533 10.6752C-0.116912 9.04772 -0.152266 7.27713 0.359755 5.62794C0.871776 3.97876 1.90368 2.53952 3.30128 1.52527C4.69889 0.511033 6.38715 -0.0237582 8.11382 0.000809682L8 8L15.3391 4.81593Z"
                fill={iconColorDefault} />
        </svg>
);
}