import ButtonBase from "@mui/material/Button";
import React from "react";
import PropTypes from "prop-types";
import styled from "@poc-components/theme";

const StyledButton = styled(ButtonBase)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  }
}));

const Button = (props) => <StyledButton {...props} />;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  classes: PropTypes.shape({}),
  color: PropTypes.string,
  component: PropTypes.string,
  disabled: PropTypes.bool,
  disableElevation: PropTypes.bool,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.string,
  startIcon: PropTypes.node,
  sx: PropTypes.shape({}),
  variant: PropTypes.oneOf(["contained", "outlined", "text"])
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  classes: {},
  color: "primary",
  component: "button",
  disabled: false,
  disableElevation: false,
  endIcon: null,
  fullWidth: false,
  href: "",
  size: "medium",
  startIcon: null,
  sx: {},
  variant: "contained"
};

export default Button;
