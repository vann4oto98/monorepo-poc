import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import PropTypes from "prop-types";
import React from "react";
import theme from "./theme";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
            html,
            body,
            #__next {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          `
      }}
    />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired
};

export default Theme;
