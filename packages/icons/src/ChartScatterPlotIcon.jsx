import React from 'react';
import PropTypes from 'prop-types';
import useStylesVariables from '@vizydrop/styles-variables/useStylesVariables';

export const ChartScatterPlotIcon = ({color}) => {
    const {iconColorDefault} = useStylesVariables();

    return (
        <svg width="32" height="22" viewBox="0 0 32 22" version="1.1" style={{display: `block`}}>
            <path fill={color || iconColorDefault} d="M21.5,18 C19.5670034,18 18,16.4329966 18,14.5 C18,12.5670034 19.5670034,11 21.5,11 C23.4329966,11 25,12.5670034 25,14.5 C25,16.4329966 23.4329966,18 21.5,18 Z M18,7 C16.8954305,7 16,6.1045695 16,5 C16,3.8954305 16.8954305,3 18,3 C19.1045695,3 20,3.8954305 20,5 C20,6.1045695 19.1045695,7 18,7 Z M22.5,9 C21.6715729,9 21,8.32842712 21,7.5 C21,6.67157288 21.6715729,6 22.5,6 C23.3284271,6 24,6.67157288 24,7.5 C24,8.32842712 23.3284271,9 22.5,9 Z M27,2 C26.4477153,2 26,1.55228475 26,1 C26,0.44771525 26.4477153,0 27,0 C27.5522847,0 28,0.44771525 28,1 C28,1.55228475 27.5522847,2 27,2 Z M8,9 C5.790861,9 4,7.209139 4,5 C4,2.790861 5.790861,1 8,1 C10.209139,1 12,2.790861 12,5 C12,7.209139 10.209139,9 8,9 Z M9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 C9.55228475,11 10,11.4477153 10,12 C10,12.5522847 9.55228475,13 9,13 Z M2,16 C0.8954305,16 0,15.1045695 0,14 C0,12.8954305 0.8954305,12 2,12 C3.1045695,12 4,12.8954305 4,14 C4,15.1045695 3.1045695,16 2,16 Z" transform="translate(2 2)" />
        </svg>
    );
};

ChartScatterPlotIcon.displayName = `ChartScatterPlotIcon`;

ChartScatterPlotIcon.propTypes = {
    color: PropTypes.string,
};
