import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const getMatchDate = (date) => {
  date = new Date(date);
  const options = { month: "short", day: "numeric" };
  date = date.toLocaleDateString(undefined, options);
  return date;
};
export const MatchDetails = ({ league, time }) => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item xs={4}>
        <Image
          src={
            league.logoPath ||
            "https://cdn.sportmonks.com/images/soccer/league_placeholder.png"
          }
          width={61}
          height={61}
        />
      </Grid>
      <Grid item direction="column" xs={8} container>
        <Grid item>
          <Typography variant="h5" style={{ fontWeight: 100 }}>
            {getMatchDate(time?.startingAt?.date)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="error">
            LIVE
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Match Day 30</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
