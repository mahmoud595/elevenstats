import { Grid } from "@mui/material";

import { CircularStatic } from "./CircularProgressWithLabel/CircularProgressWithLabel";

export const OverAll = () => {
  return (
    <Grid
      sx={{
        position: "sticky",
        right: 0,
        background: "#FFF",
        padding: "0px 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: 94,
          alignSelf: "stretch",
          textAlign: "center",
          background: "rgba(54, 62, 220, 0.02)",
          borderRight: "1px solid #EAEDF2",
          borderLeft: "1px solid #EAEDF2",
        }}
      >
        <CircularStatic />
      </Grid>

      {/* <RemainingPlayerData text="0.09" /> */}
    </Grid>
  );
};
