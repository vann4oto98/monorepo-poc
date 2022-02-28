import MuiTypography from "@mui/material/Typography";
import React from "react";
import PropTypes from "prop-types";

const Typography = (props) => <MuiTypography {...props} />;

Typography.propTypes = {
  align: PropTypes.oneOf(["center", "inherit", "justify", "left", "right"]),
  children: PropTypes.node,
  classes: PropTypes.shape({}),
  component: PropTypes.string,
  gutterBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  sx: PropTypes.shape({}),
  paragraph: PropTypes.bool,
  variant: PropTypes.oneOf([
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

Typography.defaultProps = {
  align: "inherit",
  children: null,
  classes: {},
  component: "p",
  gutterBottom: false,
  noWrap: false,
  sx: {},
  paragraph: false,
  variant: "body1"
};

export default Typography;
