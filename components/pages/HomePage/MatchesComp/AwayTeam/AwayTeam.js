import { Grid, Typography } from "@mui/material";
import Image from "next/image";
export const AwayTeam = ({ visitorTeam }) => {
  return (
    <Grid container alignItems="center" justifyContent="space-around">
      <Grid item xs={2}>
        <Image
          src={
            visitorTeam?.logoPath ||
            "https://cdn.sportmonks.com/images/soccer/team_placeholder.png"
          }
          width={32}
          height={42}
        />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h5">{visitorTeam?.name}</Typography>
      </Grid>
    </Grid>
  );
};
