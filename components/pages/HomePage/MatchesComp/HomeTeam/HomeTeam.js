import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export const HomeTeam = ({ localTeam }) => {
  return (
    <Grid container alignItems="center" justifyContent="space-around">
      <Grid item xs={8}>
        <Typography variant="h5">{localTeam?.name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Image
          src={
            localTeam?.logoPath ||
            "https://cdn.sportmonks.com/images/soccer/team_placeholder.png"
          }
          width={32}
          height={42}
        />
      </Grid>
    </Grid>
  );
};
