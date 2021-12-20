import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  teamNameGrid: {
    marginTop: 10,
  },
  teamName: {
    fontSize: "1.6em",
    lineHeight: "11px",
    fontWeight: 600,
    color: "#022A54",
    "@media (max-width:1074px)": {
      fontSize: "1.2em",
      whiteSpace: "nowrap",
    },
    "@media(max-width:730px)": {
      fontSize: "1em",
    },
  },
}));
export const Team = () => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:900px)");
  return (
    <Grid item>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Image
            src="/teamCard.png"
            width={sm ? 25 : 42}
            height={sm ? 25 : 42}
            alt="team"
          />
        </Grid>
        <Grid item className={classes.teamNameGrid}>
          <Typography className={classes.teamName}>Man United</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
