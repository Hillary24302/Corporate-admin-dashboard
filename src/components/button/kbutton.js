import { Button } from "antd";
import * as React from "react";

const KButton = ({ background, border, startIcon, title, color }) => {
  return (
    <Button
      component="label"
      variant="contained"
      icon={startIcon}
      style={{
        background: background,
        border: border,
        textTransform: "none",
        padding: "6px 26px",
        color: color,
        borderRadius: "6px",
        justifyContent: "center",
        textAlign: "center",
        display: "flex", 
        alignItems: "center",
      }}
    >
      {title}
    </Button>
  );
};
export default KButton;
