import { Grid, Typography, Box } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  summary: {
    backgroundColor: "#6B2262",
    borderTopRightRadius: "1.5em",
    borderBottomRightRadius: "1.5em",
    padding: "4.3em 6.3em 2em 6.3em",

    "@media only screen and (max-width:1680px)": {
      fontSize: "0.8em",
      padding: "7em 4em 2em 4em",
    },

    "@media only screen and (max-width:1382px)": {
      fontSize: "0.6em",
      padding: "9em 3em 2em 3em",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "0.8em",
      padding: "7em 3em 2em 3em",
    },
    "@media only screen and (max-width:1055px)": {
      fontSize: "0.6em",
      padding: "10em 2em 2em 2em",
    },
    "@media only screen and (max-width:960px)": {
      fontSize: "1.3em",
      padding: "4em 3em 2em 3em",
    },
    "@media only screen and (max-width:777px)": {
      fontSize: "0.7em",
      padding: "6em 3em 2em 3em",
    },
  },
  text: {
    color: "#fff",

    "@media only screen and (max-width:960px)": {
      fontSize: "1em",
    },
  },
  elevenStats: {
    fontWeight: "600",
  },
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <Grid item xs={5} className={classes.summary}>
      <Typography variant="h4" className={classes.text}>
        <Box component="span" className={classes.elevenStats}>
          Eleven Stats{" "}
        </Box>
        provides comprehensive data for football match predictions. We display
        stats per team, per league, and even head-to-head comparisons. Explore
        and see how you can make your next predictions more accurate!
      </Typography>
    </Grid>
  );
};

export default Summary;
