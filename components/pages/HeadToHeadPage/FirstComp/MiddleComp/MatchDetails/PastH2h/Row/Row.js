import { Grid, Typography, useMediaQuery } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { toggleDialog } from "store/actions/h2hActions";

import { Btn } from "components/";
const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    marginBottom: "4.3em",
  },
  img: {
    objectFit: "scale-down",
  },
  imgContainer: {
    marginBottom: "8px",
  },
  team: {
    fontSize: 9,
    fontWeight: 700,
    lineHeight: "9.2px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    textAlign: "center",
  },
  date: {
    fontSize: 10,
    lineHeight: "9px",
    "@media (max-width: 640px)": {
      fontSize: 6,
      lineHeight: "5px",
    },
  },
  time: {
    color: "#FC7D58",
    fontSize: 10,
    lineHeight: "9px",
  },
  score: {
    fontSize: "2.5em",
    lineHeight: "9px",
    color: "#022A54",
    fontWeight: 600,
    textAlign: "center",
    "@media (max-width: 640px)": {
      fontSize: 13,
    },
  },
  scoreContainer: {
    // background: "#F6F7FA",
    // borderRadius: 14.67,
    // padding: ".5em 0",
    // margin: ".7em 0",
    // width: 96,
    // textAlign: "center",
  },
  showMoreText: {
    color: "#246BFD",
    fontSize: 11,
    cursor: "pointer",
    "@media (max-width: 640px)": {
      fontSize: 6,
      lineHeight: "5px",
    },
  },
  timeGrid: {
    marginTop: 5,
  },
  showGrid: {
    marginTop: 9,
    backgroundColor: "#D7E4FF",
    borderRadius: "11px",
    padding: "3px 1.3em",
    "@media (max-width: 640px)": {
      padding: "3px 10px",
    },
  },
  content: {
    paddingBottom: 20,
    borderBottom: "1px solid #EFF1F5",
    "@media (max-width: 640px)": {
      paddingBottom: 15,
    },
  },
}));

export const Row = ({ k, fixture }) => {
  const classes = useStyles();
  const xs = useMediaQuery("(max-width:600px)");
  const router = useRouter();
  const dispatch = useDispatch();

  const showMoreHandler = () => {
    dispatch(toggleDialog());
    router.push(`/h2h/${encodeURI(fixture.slug)}`);
  };
  return (
    <Grid
      item
      container
      justifyContent="center"
      key={k}
      className={classes.root}
    >
      <Grid
        item
        container
        alignItems="center"
        wrap="nowrap"
        className={classes.content}
      >
        <Grid item xs={3}>
          <Grid container direction="column" alignItems="center">
            <Grid item className={classes.imgContainer}>
              <Image
                src={
                  fixture?.localTeam?.logoPath ??
                  "https://cdn.sportmonks.com/images//soccer/teams/8/8.png"
                }
                height={xs ? 30 : 64}
                width={xs ? 30 : 49}
                className={classes.img}
                alt={fixture?.localTeam?.name}
              />
            </Grid>
            <Grid item>
              <Typography color="primary" className={classes.team}>
                {fixture?.localTeam?.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid item className={classes.scoreContainer}>
            <Typography color="primary" className={classes.score}>
              {fixture?.scores?.localTeamScore ?? "-"}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} sm={4}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            style={{
              height: "100%",
            }}
          >
            <Grid item>
              <Typography color="primary" className={classes.date}>
                {new Date(fixture?.time?.startingAt?.date)?.toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                ) ?? "-"}
              </Typography>
            </Grid>
            <Grid item className={classes.timeGrid}>
              <Typography color="primary" className={classes.time}>
                {new Date(fixture?.time?.startingAt?.date)?.toLocaleTimeString(
                  "en-US",
                  {
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}{" "}
              </Typography>
            </Grid>

            {fixture.slug && (
              <Btn padding="0" onClick={showMoreHandler}>
                <Grid item className={classes.showGrid}>
                  <Typography className={classes.showMoreText}>
                    show more
                  </Typography>
                </Grid>
              </Btn>
            )}
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid item className={classes.scoreContainer}>
            <Typography color="primary" className={classes.score}>
              {fixture?.scores?.visitorTeamScore ?? "-"}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction="column" alignItems="center">
            <Grid item className={classes.imgContainer}>
              <Image
                src={
                  fixture?.visitorTeam?.logoPath ??
                  "https://cdn.sportmonks.com/images//soccer/teams/8/8.png"
                }
                height={xs ? 30 : 64}
                width={xs ? 30 : 49}
                className={classes.img}
                alt={fixture?.visitorTeam?.name}
              />
            </Grid>
            <Grid item>
              <Typography color="primary" className={classes.team}>
                {fixture?.visitorTeam?.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
