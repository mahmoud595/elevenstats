import { memo } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, Box } from "@mui/material";
import { Position } from "./Position/Position";

const AllPositions = styled(Grid)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: 1,
  left: 0,
  top: 0,
  "& .playground": {
    height: "100%",
    display: "grid",
    "grid-template-rows": "15% 14.2% 16.1% 19.2% 18.3%",
    "grid-template-columns": "33% 33% 33%",
    "grid-template-areas": `". position0 ."
    "position1 position2 position3"
    "position4 position5 position6"
    "position7 position8 position9"
    "position10 position11 position12"
    ". position13 ."`,
    justifyItems: "center",
    alignItems: "center",

    // "& div": {
    //   flex: 1,
    //   maxWidth: "14.1%",
    //   flexBasis: "14.1%",
    // },
  },
}));

export const PositionPlayGround = memo(
  ({
    size,
    padding = "12px 14px",
    positions = new Array(14).fill(null),
    showOnly,
  }) => {
    return (
      <AllPositions>
        <Grid container direction="row" className="playground" sx={{ padding }}>
          {[
            positions.map((val, i) => (
              <Box
                sx={{
                  "grid-area": `position${i}`,
                  // justifySelf: "center",
                  // alignSelf: "center",
                }}
                key={i}
              >
                <Position
                  size={size || 13}
                  showOnly={showOnly}
                  color={val?.color}
                />
              </Box>
            )),
          ]}
        </Grid>
      </AllPositions>
    );
  }
);
