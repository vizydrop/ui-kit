import React from 'react';
import PropTypes from "prop-types";
import useStylesVariables from "@vizydrop/styles-variables/useStylesVariables";

export function MetricIcon({textColor, bgColor}) {
    const {iconColorDefault, iconColorLight} = useStylesVariables();

    return (
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" version="1.1" style={{display: `block`}}>
            <rect width="18" height="15" rx="3" fill={bgColor || iconColorLight} />
            <path
                d="M5.28906 7.43359C5.86458 7.43359 6.32031 7.58594 6.65625 7.89062C6.99219 8.19531 7.16016 8.61068 7.16016 9.13672C7.16016 9.74609 6.96875 10.2227 6.58594 10.5664C6.20573 10.9076 5.66406 11.0781 4.96094 11.0781C4.32292 11.0781 3.82161 10.9753 3.45703 10.7695V9.9375C3.66797 10.0573 3.91016 10.1497 4.18359 10.2148C4.45703 10.2799 4.71094 10.3125 4.94531 10.3125C5.35938 10.3125 5.67448 10.2201 5.89062 10.0352C6.10677 9.85026 6.21484 9.57943 6.21484 9.22266C6.21484 8.54036 5.77995 8.19922 4.91016 8.19922C4.78776 8.19922 4.63672 8.21224 4.45703 8.23828C4.27734 8.26172 4.11979 8.28906 3.98438 8.32031L3.57422 8.07812L3.79297 5.28906H6.76172V6.10547H4.60156L4.47266 7.51953C4.5638 7.50391 4.67448 7.48568 4.80469 7.46484C4.9375 7.44401 5.09896 7.43359 5.28906 7.43359ZM8.66016 7C8.66016 7.38802 8.69792 7.67708 8.77344 7.86719C8.84896 8.05729 8.97266 8.15234 9.14453 8.15234C9.48828 8.15234 9.66016 7.76823 9.66016 7C9.66016 6.23177 9.48828 5.84766 9.14453 5.84766C8.97266 5.84766 8.84896 5.94271 8.77344 6.13281C8.69792 6.32292 8.66016 6.61198 8.66016 7ZM10.418 6.99219C10.418 7.59115 10.3099 8.04167 10.0938 8.34375C9.88021 8.64323 9.5638 8.79297 9.14453 8.79297C8.7487 8.79297 8.44141 8.63802 8.22266 8.32812C8.00651 8.01562 7.89844 7.57031 7.89844 6.99219C7.89844 5.80208 8.3138 5.20703 9.14453 5.20703C9.55339 5.20703 9.86719 5.36198 10.0859 5.67188C10.3073 5.97917 10.418 6.41927 10.418 6.99219ZM12.3789 9.28125C12.3789 9.66927 12.4167 9.95964 12.4922 10.1523C12.5703 10.3451 12.6953 10.4414 12.8672 10.4414C13.2083 10.4414 13.3789 10.0547 13.3789 9.28125C13.3789 8.51823 13.2083 8.13672 12.8672 8.13672C12.6953 8.13672 12.5703 8.23047 12.4922 8.41797C12.4167 8.60547 12.3789 8.89323 12.3789 9.28125ZM14.1367 9.28125C14.1367 9.88021 14.0286 10.3294 13.8125 10.6289C13.5964 10.9284 13.2812 11.0781 12.8672 11.0781C12.4714 11.0781 12.1641 10.9245 11.9453 10.6172C11.7266 10.3073 11.6172 9.86198 11.6172 9.28125C11.6172 8.09115 12.0339 7.49609 12.8672 7.49609C13.2682 7.49609 13.5794 7.64974 13.8008 7.95703C14.0247 8.26432 14.1367 8.70573 14.1367 9.28125ZM12.9766 5.28906L9.80859 11H9.05078L12.2188 5.28906H12.9766Z"
                fill={textColor || iconColorDefault}
            />
        </svg>
    );
}

MetricIcon.propTypes = {
    textColor: PropTypes.string,
    bgColor: PropTypes.string,
};
