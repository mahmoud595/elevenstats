import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from "@mui/material";

import Image from "next/image";
const useStyles = makeStyles(({ palette }) => ({
  header: {
    padding: 40,
    background: "#022A54",
    borderRadius: "20px",
  },
  headerTitle: {
    fontSize: "4em",
    lineHeight: "16px",
    color: "#fff",
  },
}));

export const TermsPrivacyHeader = ({ headerTitle, children }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      container
      className={classes.header}
      justifyContent="space-between"
      alignItems="flex-end"
      wrap="nowrap"
    >
      <Grid item container direction="column">
        <Grid item>
          <Typography className={classes.headerTitle}>{headerTitle}</Typography>
        </Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
      <Grid item className={classes.imageContainer}>
        <Image src="/logoLeague.png" width={240} height={293} alt="logo" />
      </Grid>
    </Grid>
  );
};
