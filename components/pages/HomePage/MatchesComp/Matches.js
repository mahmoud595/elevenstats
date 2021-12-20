import { useCallback, useMemo, useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { Wrapper } from "../../../Layout/Wrapper/Wrapper";
import { MatchDetails } from "./MatchDetails/MatchDetails";
import { HomeTeam } from "./HomeTeam/HomeTeam";
import { Time } from "./Time/Time";
import { AwayTeam } from "./AwayTeam/AwayTeam";
import { CompareBtn } from "./CompareBtn/CompareBtn";

import { PinnedPlayer } from "public/";
import apiAxios from "utils/apiAxios";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 10,
    boxShadow: "2px 2px 10px -1px rgba(0,0,0,0.1)",
    //  minHeight: '30vh',
    textTransform: "uppercase",
    "& > div": {
      marginBottom: 10,
    },
  },
  header: {
    textAlign: "center",
    letterSpacing: 1.4,
    backgroundColor: "#E5E7EB",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: "10px 0",
  },
  rowsContainer: {
    padding: "0 2em",
    color: "#6B7281",
    "& > div": {
      marginBottom: 10,
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  values: {
    color: "white",
    padding: 2,
    borderRadius: 3,
  },
  valuesContainer: {
    margin: "auto 0",
    minWidth: 45,
    textAlign: "center",
    "@media (max-width: 960px)": {
      minWidth: 30,
    },
  },

  typography: {
    "@media (max-width: 1420px)": {
      fontSize: "0.5rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.2rem",
    },
  },
}));

const titles = [
  { title: "Match details", size: 2 },
  { title: "Home", size: 2 },
  { title: "time", size: 1 },
  { title: "away", size: 2 },
  { title: "goals", size: 0 },
  { title: "over", size: 0 },
  { title: "under", size: 0 },
  { title: "odds", size: 2 },
];

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    let flag = false;
    if (!flag) {
      const fetchLiveMatches = async () => {
        try {
          const res = await apiAxios("/fixtures?includes=teams,league");
          const fixtures = await res?.data?.data;

          setMatches(fixtures);
        } catch (e) {
          console.log(e);
        }
      };
      fetchLiveMatches();
    }
    return () => {
      flag = true;
    };
  }, []);
  // console.log(matches);
  const renderColmnHeader = useCallback(() => {
    return titles.map(({ title, size }, index) => (
      <Grid
        item
        key={index}
        xs={size}
        //   style={{ textAlign: 'center', minWidth: 50 }}
        className={classes.valuesContainer}
      >
        <Typography variant="h5" color="primary">
          {title}
        </Typography>
      </Grid>
    ));
  }, []);
  const rowsHeader = useMemo(() => renderColmnHeader(), []);

  const renderRowsFunc = useCallback(() => {
    return matches?.map(
      ({ _id, league, time, localTeam, slug, visitorTeam }) => (
        <Grid
          container
          key={_id}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={2}>
            <MatchDetails league={league} time={time} />
          </Grid>

          <Grid item xs={2}>
            <HomeTeam localTeam={localTeam} />
          </Grid>

          <Grid item xs={1}>
            {time.status === "NS" ? (
              <Typography
                variant="h5"
                // className={classes.values}
                color="secondary"
              >
                {time?.startingAt?.date || "-"}
              </Typography>
            ) : (
              <Time time={time} />
            )}
          </Grid>

          <Grid item xs={2}>
            <AwayTeam visitorTeam={visitorTeam} />
          </Grid>

          <Grid item className={classes.valuesContainer}>
            <Typography
              variant="h5"
              style={{
                backgroundColor: "#D3697B",
              }}
              className={classes.values}
            >
              1.5
            </Typography>
          </Grid>

          <Grid item className={classes.valuesContainer}>
            <Typography
              variant="h5"
              style={{
                backgroundColor: "#E88D33",
              }}
              className={classes.values}
            >
              1.5
            </Typography>
          </Grid>

          <Grid item className={classes.valuesContainer}>
            <Typography
              variant="h5"
              style={{
                backgroundColor: "#93CC88",
              }}
              className={classes.values}
            >
              1.5
            </Typography>
          </Grid>

          <Grid
            item
            xs={2}
            className={classes.btnContainer}
            container
            justifyContent="center"
          >
            <CompareBtn title="Compare Odds" slug={slug} />
          </Grid>
        </Grid>
      )
    );
  }, [matches]);
  const rows = useMemo(() => renderRowsFunc(), [matches]);

  return (
    <Wrapper
      title=" MATCHES"
      minHeight="0vh"
      headerColor="#E5E7EB"
      marginBottom="10px"
      id="matches"
    >
      <Grid
        container
        justifyContent="space-between"
        className={classes.rowsContainer}
      >
        {rowsHeader}
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        className={classes.rowsContainer}
        alignItems="center"
        direction="column"
      >
        {rows}
      </Grid>
      {/* <a style={{ position: "fixed", top: "30%", right: "0" }} href="#matches">
        <PinnedPlayer />
      </a> */}
    </Wrapper>
  );
};

export default Matches;
