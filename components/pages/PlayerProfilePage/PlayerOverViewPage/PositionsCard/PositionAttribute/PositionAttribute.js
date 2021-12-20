import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Btn } from "components";

const Attribute = styled(Grid)(() => ({
  marginTop: "24px",
  "& .colorBall": {
    width: "18px",
    height: "18px",

    borderRadius: "50%",
  },
  "& .positionAttribute": {
    marginLeft: "10px",
    flex: 1,
  },
  "& .positionPercentage": {
    width: 34,
    height: 25,
    borderRadius: "6px",
    backgroundColor: "#F6F7FA",
  },
  "& .positionAttributeText": {
    fontSize: 10,
    // lineHeight: "30px",
    fontWeight: 600,
    color: "#022A54",
    textTransform: "capitalize",
  },
}));

export const PositionAttribute = memo(({ color, position, percentage }) => {
  return (
    <Attribute item container alignItems="center">
      <Grid
        item
        className="colorBall"
        sx={{
          backgroundColor: color,
        }}
      ></Grid>
      <Grid item className="positionAttribute">
        <Typography className="positionAttributeText">{position}</Typography>
      </Grid>
      <Grid
        item
        className="positionPercentage"
        container
        justifyContent="center"
        alignItems="center"
      >
        <Typography className="positionAttributeText">{percentage}%</Typography>
      </Grid>
    </Attribute>
  );
});
