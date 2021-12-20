import React from "react";
import { Tooltip, Fade } from "@mui/material";
import withStyles from '@mui/styles/withStyles';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    color: "#fff",
    fontSize: 12,
  },
}))(Tooltip);
export const ToolTipWrapper = ({ title, children }) => {
  return (
    <CustomTooltip
      title={title}
      placement="top"
      arrow
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      {children}
    </CustomTooltip>
  );
};
