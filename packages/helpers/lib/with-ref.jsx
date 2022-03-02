import React from "react";

export const withRef = (Component) => {
  const Wrapped = (props) => {
    const { forwardedRef, ...rest } = props;

    return <Component ref={forwardedRef} {...rest} />;
  };

  return React.forwardRef((props, ref) => {
    return <Wrapped {...props} forwardedRef={ref} />;
  });
};

export default withRef;
