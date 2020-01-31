import React from "react";
import PropTypes from "prop-types";
import useStylesVariables from "@vizydrop/styles-variables/useStylesVariables";

export const PinnedIcon = ({ color, className }) => {
  const { iconColorDefault } = useStylesVariables();

  return (
    <svg
      className={className}
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      version="1.1"
      style={{ display: `block` }}
    >
      <path
        fill={color || iconColorDefault}
        fillRule="evenodd"
        d="m7.25675,10.155c0.39,-0.39 0.39,-1.02 0,-1.41c-0.391,-0.39 -1.024,-0.39 -1.415,0l-2.121,2.12c-0.391,0.39 -0.391,1.02 0,1.41c0.391,0.4 1.024,0.4 1.414,0l2.122,-2.12z"
      />
      <path
        fill={color || iconColorDefault}
        fillRule="evenodd"
        d="m11.88475,7.435c0.917,-0.92 0.917,-2.4 0,-3.32c-0.916,-0.92 -2.402,-0.92 -3.318,0c-0.26,0.26 -0.433,0.55 -0.57,0.78c-0.203,0.33 -0.326,0.54 -0.536,0.33l-0.553,-0.56c-0.306,-0.3 -0.801,-0.3 -1.106,0c-0.306,0.31 -0.306,0.8 0,1.11l4.424,4.42c0.306,0.31 0.801,0.31 1.106,0c0.306,-0.3 0.306,-0.8 0,-1.1l-0.553,-0.55c-0.21,-0.22 -0.005,-0.34 0.331,-0.54c0.227,-0.14 0.515,-0.31 0.775,-0.57z"
      />
    </svg>
  );
};

PinnedIcon.displayName = `PinnedIcon`;

PinnedIcon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string
};
