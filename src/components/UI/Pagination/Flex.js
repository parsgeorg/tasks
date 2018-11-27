import React from "react";

const Flex = ({ children, style }) => {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
};
export default Flex;
