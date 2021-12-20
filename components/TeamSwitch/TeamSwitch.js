import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "0.6em",
    boxShadow: "0 0.1em 1em   rgba(0,0,0,0.19)",
    padding: "0.8em 0.5em",
  },
  unfoldIcon: {
    fontSize: "3em",
  },
  teamName: {
    minWidth: "150%",
  },
}));

const TeamSwitch = ({ src, teamName }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      className={classes.root}
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid
        item
        container
        xs={10}
        alignItems="center"
        justifyContent="space-around"
        // spacing={1}
      >
        <Grid item xs={2}>
          <Image src={src} alt="Liverpool" width={34} height={"50vh"} />
        </Grid>
        <Grid item xs={9}>
          <Typography variant="h4" className={classes.teamName}>
            {teamName}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={1} justifyContent="flex-end">
        <Grid item xs={12}>
          <Image src="/Unfold.svg" alt="Liverpool" width={11} height={24} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamSwitch;
