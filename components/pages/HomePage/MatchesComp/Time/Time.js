import { Grid, Typography } from "@mui/material";

import { LinearDeterminate } from "components/";
export const Time = ({ time }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Typography variant="h5" color="primary">
          {time?.minute}:{time?.second || "00"}
        </Typography>
      </Grid>
      <Grid item style={{ width: "100%" }}>
        <LinearDeterminate
          height={10}
          borderRadius={3}
          colorPrimary="#ADD666"
          colorSecondary="#E5E7EB"
        />
      </Grid>
    </Grid>
  );
};
