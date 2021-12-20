import { memo } from "react";
import { Grid } from "@mui/material";

import { ToolTipWrapper } from "components";
import { I } from "public";

export const InfoIconWrapper = memo(({ backgroundColor, title }) => {
  return (
    <ToolTipWrapper title={title || "you hovered me"}>
      <Grid
        item
        sx={{
          width: "16px",
          height: "16px",
          backgroundColor: backgroundColor || "#EAEDF2",
          borderRadius: "50%",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& >svg": {
            width: 4,
            height: 10,
          },
        }}
      >
        <I />
      </Grid>
    </ToolTipWrapper>
  );
});
