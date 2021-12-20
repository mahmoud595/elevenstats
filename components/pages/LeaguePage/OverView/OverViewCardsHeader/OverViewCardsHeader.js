import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Btn from "components/Layout/Btn/Btn";

import Link from "next/link";

import { SeeMore } from "public";
const useStyles = makeStyles(({ palette }) => ({
  seeGrid: {
    marginRight: "1.6em",
  },
  title: {
    fontSize: "2.3em",
    lineHeight: "29px",
    color: "#022A54",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },
  seeAllText: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "14px",
    color: "#246BFD",
  },
  link: {
    cursor: "pointer",
  },
}));

export const OverViewCardsHeader = ({
  title,
  linkText,
  linkUrl = "/league",
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end">
        <Grid item className={classes.link}>
          <Link href={linkUrl}>
            <Grid container>
              {/* <Btn> */}
              <Grid item className={classes.seeGrid}>
                <Typography className={classes.seeAllText}>
                  See all {linkText}
                </Typography>
              </Grid>
              <Grid item>
                <SeeMore />
              </Grid>
              {/* </Btn> */}
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};
