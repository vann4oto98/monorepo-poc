import MuiLink from "@mui/material/Link";
import React from "react";
import PropTypes from "prop-types";

const Link = (props) => <MuiLink {...props} />;

Link.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.shape({}),
  color: PropTypes.string,
  component: PropTypes.string,
  sx: PropTypes.shape({}),
  TypographyClasses: PropTypes.shape({}),
  underline: PropTypes.oneOf(["always", "hover", "none"]),
  variant: PropTypes.oneOf([
    "basic",
    "body1",
    "body2",
    "button",
    "caption",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "inherit",
    "overline",
    "subtitle1",
    "subtitle2"
  ])
};

Link.defaultProps = {
  children: null,
  classes: {},
  color: "primary",
  component: "a",
  sx: {},
  TypographyClasses: {},
  underline: "always",
  variant: "inherit"
};

export default Link;
