import { useState, useCallback, useMemo, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Dialog } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { shallowEqual, useSelector } from "react-redux";

import { LeagueTable } from "components/Layout/LeagueTable/LeagueTable";
import { DropDownArrow } from "public/";
import Btn from "components/Layout/Btn/Btn";

const useStyles = makeStyles(({ palette }) => ({
  titleContainer: {
    backgroundColor: "#F6F7FA",
    borderRadius: "12px",
    height: "35px",
    paddingRight: "3px",
    textTransform: "uppercase",
    margin: "-45px 0 1.5em 4px",
    position: "relative",
    overflowY: "hidden",
  },

  titleText: {
    // lineHeight: "11px",
    fontSize: "1.8em",
    lineHeight: "19px",
    fontWeight: 700,
    color: "#022A54",
    marginLeft: "13px",

    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
  },
  arrow: {
    "& svg": {
      // width: "100%",
      // height: "100%",
      width: 12,
      height: 6,
      stroke: "rgba(2, 42, 84, 1)",
    },
    fontSize: "1.5rem",

    // "@media (max-width: 1440px)": {
    // },
    "@media (max-width: 960px)": {
      fontSize: "1rem",
    },
    color: "#022A54",
  },
  arrowX: {
    // fontSize: "2.8rem",
    "& svg": {
      // width: "100%",
      // height: "100%",
      width: 12,
      height: 6,
      stroke: "rgba(2, 42, 84, 1)",
    },
    "@media (max-width: 1440px)": {
      fontSize: "1.5rem",
    },
    "@media (max-width: 960px)": {
      fontSize: "1rem",
    },
    color: "#022A54",
  },
  paperWidthSm: {
    width: 700,
    borderRadius: 20,
    "@media (max-width: 640px)": {
      // maxWidth: '80vw !important',
      maxHeight: "80vh !important",
    },
  },
  dialogContainer: {},
}));
const header = [
  { item: "", size: 1 },
  { item: "team", size: 3 },
  { item: "mp", size: 1 },
  { item: "w%", size: 1 },
  { item: "gf", size: 1 },
  { item: "ga", size: 1 },
  { item: "gd", size: 1 },
  { item: "Pts", size: 1 },
  { item: "avg", size: 1 },
];

export const LeagueTableWrapper = ({ live }) => {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState({});
  const classes = useStyles();
  const theme = useTheme();
  const { leagueStandings, localTeamID, visitorTeamID } = useSelector(
    ({ h2h }) => {
      const {
        localTeamStats: {
          team: { _id: localTeamID },
        },
        visitorTeamStats: {
          team: { _id: visitorTeamID },
        },
        leagueStandings,
      } = h2h;
      return {
        localTeamID,
        visitorTeamID,
        leagueStandings,
      };
    },
    shallowEqual
  );
  // useeffect to loop on league standing to put colors for teams at their positions based on their results
  useEffect(() => {
    const resultsObj = {};
    for (let i = 0; i < leagueStandings?.length; i++) {
      let position = leagueStandings[i]?.overall?.position;
      let currentResult = leagueStandings[i]?.result;
      let prevResult = leagueStandings[i - 1]?.result;
      if (currentResult) {
        if (position === 1) {
          resultsObj[currentResult] = 0;
        } else if (position === leagueStandings?.length) {
          resultsObj[currentResult] = 8;
        } else if (
          prevResult &&
          (resultsObj[prevResult] || resultsObj[prevResult] === 0) &&
          !resultsObj[currentResult]
        ) {
          resultsObj[currentResult] = resultsObj[prevResult] + 1;
        }
      }
    }
    for (let i = leagueStandings?.length - 1; i >= 0; i--) {
      let currentResult = leagueStandings[i]?.result;
      let nextResult = leagueStandings[i + 1]?.result;
      if (currentResult) {
        if (
          nextResult &&
          resultsObj[nextResult] &&
          !resultsObj[currentResult]
        ) {
          if (resultsObj[nextResult] === 8) {
            resultsObj[currentResult] = 7;
            7;
          } else {
            resultsObj[currentResult] = resultsObj[nextResult] - 1;
          }
        }
      }
    }

    setResults(resultsObj);
  }, [leagueStandings]);

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //memoized function to get the data in the overview league table with the two teams and teams before them and two teams after them

  const select2Teams = useCallback(() => {
    const teams = [];
    const teamsIds = {};

    leagueStandings.forEach((team, i) => {
      if (team.team === localTeamID || team.team === visitorTeamID) {
        if (!live) {
          if (leagueStandings[i - 2] && !teamsIds[leagueStandings[i - 2]._id]) {
            teams.push(leagueStandings[i - 2]);
            teamsIds[leagueStandings[i - 2]._id] = true;
          }

          if (leagueStandings[i - 1] && !teamsIds[leagueStandings[i - 1]._id]) {
            teams.push(leagueStandings[i - 1]);
            teamsIds[leagueStandings[i - 1]._id] = true;
          }

          if (!teamsIds[leagueStandings[i]._id]) {
            teams.push(leagueStandings[i]);
            teamsIds[leagueStandings[i]._id] = true;
          }
          if (leagueStandings[i + 1] && !teamsIds[leagueStandings[i + 1]._id]) {
            teams.push(leagueStandings[i + 1]);
            teamsIds[leagueStandings[i + 1]._id] = true;
          }

          if (leagueStandings[i + 2] && !teamsIds[leagueStandings[i + 2]._id]) {
            teams.push(leagueStandings[i + 2]);
            teamsIds[leagueStandings[i + 2]._id] = true;
          }
        } else {
          teams.push(leagueStandings[i]);
        }
      }
    });

    if (teams.length > 9) {
      teams.splice(4, 1);
      teams.splice(8, 1);
    }
    return teams;
    // leagueStandings.filter((team) => {
    //   if (team.team === localTeamID || team.team === visitorTeamID) {
    //     return team;
    //   }
    // });
  }, [leagueStandings, live]);

  const doubleTeams = useMemo(() => select2Teams(), [leagueStandings, live]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const head = (
    <>
      <Grid
        container
        justifyContent="space-between"
        className={classes.titleContainer}
        alignItems="center"
      >
        <Grid
          item
          sx={{
            position: "absolute",
            width: "3px",
            height: "100%",
            background: "linear-gradient(0deg, #1BD47B, #1BD47B)",
            left: "1px",
            top: "0",
            borderRadius: "12px",
          }}
        ></Grid>
        {/* <Grid container alignItems="center" style={{ height: '100%' }}> */}

        <Typography className={classes.titleText}>League Table</Typography>

        {/* </Grid> */}

        <Btn
          padding="0 12px"
          backgroundColor="#EFF1F5"
          borderRadius="10px"
          onClick={handleClickOpen}
          // hidpiPadding="0 20px 10px 20px"
          lowSizePadding="0 10px"
        >
          <Grid item className={classes.arrow}>
            <DropDownArrow />
          </Grid>
        </Btn>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        // PaperComponent="div"
        open={open}
        scroll="body"
        onClose={handleClose}
        classes={{
          container: classes.dialogContainer,
          paperWidthSm: classes.paperWidthSm,
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <LeagueTable
          data={leagueStandings}
          header={header}
          h2h
          results={results}
          head={
            <Grid container justifyContent="space-between">
              <Grid
                item
                style={{ borderRadius: "0px 0px 20px 0px" }}
                className={classes.title}
              >
                <Grid container alignItems="center">
                  <Typography variant="subtitle2" className={classes.titleText}>
                    League Table
                  </Typography>
                </Grid>
              </Grid>
              <Btn
                padding="0 12px"
                backgroundColor="#EFF1F5"
                borderRadius="0px 20px"
                onClick={handleClose}
                // hidpiPadding="0 20px"
                // lowSizePadding="0 10px"
                fontSize="2.3rem"
              >
                <Grid item className={classes.arrowX}>
                  <Typography style={{ fontSize: "2rem" }}> &#215;</Typography>
                </Grid>
              </Btn>
            </Grid>
          }
        />
      </Dialog>
    </>
  );
  return (
    <Grid item container style={{ marginTop: "4em" }}>
      <LeagueTable
        // data={data.slice(0, 3)}
        data={doubleTeams}
        header={header}
        h2h
        head={head}
        flex={1}
        height="auto"
        results={results}
      />
    </Grid>
  );
};
