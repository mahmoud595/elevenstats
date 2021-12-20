import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";

import { TermsPrivacyHeader } from "components/Layout/TermsPrivacyWrapper/TermsPrivacyHeader/TermsPrivacyHeader";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    paddingBottom: "72px",
  },
  headerText: {
    fontSize: "2em",
    lineHeight: "22px",
    color: "#B2BFCC",
    whiteSpace: "break-spaces",
  },
  headerAddTextGrid: {
    marginTop: 16,
  },
  headerAddText: {
    fontSize: "2em",
    lineHeight: "22px",
    color: "#fff",
    whiteSpace: "break-spaces",
  },
  headerGrid: {
    marginTop: 16,
  },
}));

export const TermsOfUse = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" className={classes.container}>
      <TermsPrivacyHeader headerTitle="Terms Of Use">
        <Grid item container direction="column" className={classes.headerGrid}>
          <Grid item>
            <Typography className={classes.headerText}>
              These Terms of Use (hereafter referred to as the ‘ToU’) constitute
              and govern the relationship between ‘Provider’ (defined below) and
              all parties who access the Website and/or App (defined hereunder)
              and make use of its features and contents in any manner (hereafter
              referred to as ‘Visitors’).
            </Typography>
          </Grid>
          <Grid item className={classes.headerAddTextGrid}>
            <Typography className={classes.headerAddText}>
              Collectively the Provider and the Visitors shall be referred to as
              the ‘Parties’.
            </Typography>
          </Grid>
        </Grid>
      </TermsPrivacyHeader>
    </Grid>
  );
};
