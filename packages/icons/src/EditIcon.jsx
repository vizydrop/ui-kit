import React from "react";
import PropTypes from "prop-types";
import useStylesVariables from "@vizydrop/styles-variables/useStylesVariables";

export const EditIcon = ({ color }) => {
  const { iconColorDefault } = useStylesVariables();

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      version="1.1"
      style={{ display: `block` }}
    >
      <path
        fill={color || iconColorDefault}
        fillRule="evenodd"
        d="M7.95489,4.69502 C8.34166,4.27555 8.98281,4.25027 9.3986,4.63366 L10.91199,6.02916 C11.33045,6.41499 11.35118,7.05719 10.96766,7.47313 L6.58634,12.092 C6.11612,12.6019 5.14814,13.2474 4.53666,13.4269 L2.656754,13.9787 C2.285668,14.0876 1.932529,13.7618 2.0110448,13.3831 L2.408739,11.46475 C2.53713,10.84554 3.10569,9.82097 3.57332,9.3138 L7.95489,4.69502 Z M11.61155,2.271341 L13.1252,3.66689 C13.5434,4.05261 13.5642,4.69497 13.1807,5.11071 L12.2917,6.06968 C12.3913,5.69472 12.2857,5.27998 11.97781,4.99607 L10.36889,3.51248 C10.06647,3.23357 9.65199,3.15802 9.28853,3.28084 L10.16798,2.332626 C10.5547,1.9131368 11.19582,1.887872 11.61155,2.271341 Z"
      />
    </svg>
  );
};

EditIcon.displayName = `EditIcon`;

EditIcon.propTypes = {
  color: PropTypes.string
};
