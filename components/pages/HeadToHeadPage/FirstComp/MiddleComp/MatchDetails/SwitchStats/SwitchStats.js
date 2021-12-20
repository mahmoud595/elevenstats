import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { SwitchComp } from "components";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  switchContainer: {
    padding: 7,
    margin: "4px 0px 17px 0px",
    background: "rgba(255, 255, 255, 0.14)",
    borderRadius: 20,
  },
  switch: {
    margin: "0 5px",
    "&>span": {
      "&>span": {
        "&.Mui-checked": {
          transform: "translate(16px, -50%) !important",
          color: "#246BFD",
        },
      },
    },
  },
  text: {
    fontSize: 7,
    "@media (min-width:1600px)": {
      fontSize: 9,
    },
  },
  backdrop: {
    zIndex: 5,
  },
}));

export const SwitchStats = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { isSeasonStats, slug } = useSelector(({ h2h }) => {
    const {
      isSeasonStats,
      fixture: { slug },
    } = h2h;

    return { isSeasonStats, slug };
  }, shallowEqual);
  const router = useRouter();
  const url = router.asPath.split("/");

  const isSeasonUrl = url[url.length - 1] === "season";

  const switchHandler = () => {
    setOpen(true);
    if (isSeasonStats) {
      router.push(`/h2h/${encodeURIComponent(slug)}`);
    } else {
      router.push(`/h2h/${encodeURIComponent(slug)}/season`);
    }
  };

  useEffect(() => {
    setOpen(false);
  }, [isSeasonStats]);

  if (isSeasonStats && !isSeasonUrl) return null;
  return (
    <Grid
      container
      className={classes.switchContainer}
      alignItems="center"
      wrap="nowrap"
    >
      <Grid item>
        <Typography className={classes.text}>show last 10 Stats</Typography>
      </Grid>
      <Grid item className={classes.switch}>
        <SwitchComp
          rootHeight={"11px !important"}
          width="28px !important"
          thumbHeight="6px !important"
          thumbWidth="6px !important"
          translate={16}
          checked={isSeasonStats}
          checkHandler={switchHandler}
        />
      </Grid>
      <Backdrop
        className={classes.backdrop}
        open={open}
        onClick={() => {
          setOpen(false);
        }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item>
        <Typography className={classes.text}>Season Stats</Typography>
      </Grid>
    </Grid>
  );
};
