import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    padding: "2em 2.5em 3.1em 2.5em",
    minWidth: 500,
    "& > div:not(:first-child)": {
      marginTop: "12px",
    },
  },
  columnContainer: {
    textAlign: "start",

    textTransform: "capitalize",
  },
  title: {
    whiteSpace: "normal",
    textAlign: "center",
    lineHeight: "11px",
    fontSize: 10,
    textTransform: "capitalize",

    color: "#120C32",

    "@media (max-width: 1280px)": {
      fontSize: "11px",
    },
    "@media (max-width: 1149px)": {
      fontSize: "6px",
    },
    "@media (max-width: 640px)": {
      fontWeight: "700 !important",
    },

    // "@media (max-width: 960px)": {
    //   fontSize: "5px",
    //   lineHeight: "8px",
    // },
    // "@media (max-width: 872px)": {
    //   fontSize: "4px",
    // },
    // "@media (max-width: 780px)": {
    //   fontSize: "3px",
    // },
  },
  teamTitle: {
    fontSize: "1.4rem",
    fontWeight: 600,
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    "@media (max-width: 1800px)": {
      fontSize: "1.2rem",
    },
    "@media (max-width: 1600px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 1300px)": {
      fontSize: "0.8rem",
    },
    // '@media (max-width: 1100px)': {
    //   fontSize: '0.6rem',
    // },
    // "@media (max-width: 801px)": {
    //   fontSize: "0.4rem",
    // },
  },
  values: {
    fontSize: 12,
    lineHeight: "11px",
    color: "#333641 !important",
    "@media (max-width: 910px)": {
      fontSize: 10,
    },
  },
  img: {
    objectFit: "scale-down",
  },
  imgContainer: {
    width: 27,
    height: 35,
    position: "relative",
    marginRight: "8px",
    "@media (max-width: 1366px)": {
      width: 17,
      height: 17,
    },
    "@media (max-width: 960px)": {
      width: 16,
      height: 24,
    },
    "@media (max-width: 1000px)": {
      marginRight: 4,
    },
    "@media (max-width: 801px)": {
      // marginRight: 1,
      width: 9,
      height: 9,
    },
  },
  rowContainer: {
    "& > div:nth-child(1)": {
      "@media (max-width: 640px)": {
        position: "sticky",
        left: 0,
        background: "#FFF",
        paddingLeft: 3,
      },
    },
  },
}));

// const header = [
//   "team",
//   "Shots off target",
//   "Substitution",
//   "Corners",
//   "Shots on target",
//   "Possession",
//   "Penalties",
//   "Shots total",
//   "Offside",
//   "Attacks",
// ];
const headerObj = {
  Goals: [" ", "Goals", "Goals Attempts", "Attacks", "Dangerous Attacks"],
  Shots: [
    " ",
    "Shots Total",
    "Shots on target",
    "Shots inside the box",
    "Shots outside the box",
    "Shots Blocked",
  ],
  Passes: [" ", "Passes Total", "Passes Accurate", "Pass %"],
  "Cards&Corners": [" ", "Yellow Card", "Red Card", "Corners", "Fouls"],
  Misc: [
    " ",
    "Possession",
    "Saves",
    "Goal Kicks",

    "Free-Kicks",
    "Offsides",
    "Throw-Ins",
  ],
};
export const ResultsComp = ({ selectedTab }) => {
  const classes = useStyles();
  const [header, setHeader] = useState([]);
  //   const renderCells = useCallback((team, i) =>
  //      columns.map((name, index) => (), []);
  const {
    localTeamName,
    localTeamLogoPath,
    localTeamShotsOffGoal,
    localTeamShotsOnGoal,
    localTeamShotsTotal,
    localTeamSubstitutions,
    localTeamCorners,
    localTeamPossessionTime,
    localTeamPenalties,
    localTeamOffside,
    localTeamAttacks,
    visitorTeamName,
    visitorTeamLogoPath,
    visitorTeamShotsOffGoal,
    visitorTeamShotsOnGoal,
    visitorTeamShotsTotal,
    visitorTeamSubstitutions,
    visitorTeamCorners,
    visitorTeamPossessionTime,
    visitorTeamPenalties,
    visitorTeamOffside,
    visitorTeamAttacks,
    localTeamDangerousAttacks,
    visitorTeamDangerousAttacks,
    localTeamGoals,
    visitorTeamGoals,
    localTeamGoalAttempts,
    visitorTeamGoalAttempts,
    localTeamShotsBlocked,
    visitorTeamShotsBlocked,
    localTeamShotsInsideBox,
    visitorTeamShotsInsideBox,
    localTeamShotsOutsideBox,
    visitorTeamShotsOutsideBox,
    localTeamPassesTotal,
    localTeamPassesAccurate,
    localTeamPassesPercentage,
    visitorTeamPassesTotal,
    visitorTeamPassesAccurate,
    visitorTeamPassesPercentage,
    localTeamYellowCards,
    visitorTeamYellowCards,
    localTeamRedCards,
    visitorTeamRedCards,
    localTeamSaves,
    visitorTeamSaves,
    localTeamGoalKick,
    visitorTeamGoalKick,
    localTeamFreeKick,
    visitorTeamFreeKick,
    localTeamThrowIn,
    visitorTeamThrowIn,
    localTeamFouls,
    visitorTeamFouls,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: { name: localTeamName, logoPath: localTeamLogoPath },
        stats: {
          shots: {
            offGoal: localTeamShotsOffGoal,
            onGoal: localTeamShotsOnGoal,
            total: localTeamShotsTotal,

            blocked: localTeamShotsBlocked,
            insideBox: localTeamShotsInsideBox,
            outsideBox: localTeamShotsOutsideBox,
          },
          substitutions: localTeamSubstitutions,
          corners: localTeamCorners,
          possessionTime: localTeamPossessionTime,
          penalties: localTeamPenalties,
          offside: localTeamOffside,
          attacks: {
            attacks: localTeamAttacks,
            dangerousAttacks: localTeamDangerousAttacks,
          },

          goals: localTeamGoals,
          goalAttempts: localTeamGoalAttempts,
          passes: {
            total: localTeamPassesTotal,
            accurate: localTeamPassesAccurate,
            percentage: localTeamPassesPercentage,
          },
          yellowCards: localTeamYellowCards,
          redCards: localTeamRedCards,
          saves: localTeamSaves,
          goalKick: localTeamGoalKick,
          freeKick: localTeamFreeKick,
          throwIn: localTeamThrowIn,
          fouls: localTeamFouls,
        },
      },
      visitorTeamStats: {
        team: { name: visitorTeamName, logoPath: visitorTeamLogoPath },
        stats: {
          shots: {
            offGoal: visitorTeamShotsOffGoal,
            onGoal: visitorTeamShotsOnGoal,
            total: visitorTeamShotsTotal,

            blocked: visitorTeamShotsBlocked,
            insideBox: visitorTeamShotsInsideBox,
            outsideBox: visitorTeamShotsOutsideBox,
          },
          substitutions: visitorTeamSubstitutions,
          corners: visitorTeamCorners,
          possessionTime: visitorTeamPossessionTime,
          penalties: visitorTeamPenalties,
          offside: visitorTeamOffside,
          attacks: {
            attacks: visitorTeamAttacks,
            dangerousAttacks: visitorTeamDangerousAttacks,
          },
          goals: visitorTeamGoals,
          goalAttempts: visitorTeamGoalAttempts,
          passes: {
            total: visitorTeamPassesTotal,
            accurate: visitorTeamPassesAccurate,
            percentage: visitorTeamPassesPercentage,
          },
          yellowCards: visitorTeamYellowCards,
          redCards: visitorTeamRedCards,
          saves: visitorTeamSaves,
          goalKick: visitorTeamGoalKick,
          freeKick: visitorTeamFreeKick,
          throwIn: visitorTeamThrowIn,
          fouls: visitorTeamFouls,
        },
      },
      fixture: {
        scores: { localTeamScore, visitorTeamScore },
      },
    } = h2h;
    return {
      localTeamName,
      localTeamLogoPath,
      localTeamShotsOffGoal,
      localTeamShotsOnGoal,
      localTeamShotsTotal,
      localTeamSubstitutions,
      localTeamCorners,
      localTeamPossessionTime,
      localTeamPenalties,
      localTeamOffside,
      localTeamAttacks,
      visitorTeamName,
      visitorTeamLogoPath,
      visitorTeamShotsOffGoal,
      visitorTeamShotsOnGoal,
      visitorTeamShotsTotal,
      visitorTeamSubstitutions,
      visitorTeamCorners,
      visitorTeamPossessionTime,
      visitorTeamPenalties,
      visitorTeamOffside,
      visitorTeamAttacks,
      localTeamScore,
      visitorTeamScore,
      localTeamDangerousAttacks,
      visitorTeamDangerousAttacks,

      localTeamGoals,
      visitorTeamGoals,
      localTeamGoalAttempts,
      visitorTeamGoalAttempts,
      localTeamShotsBlocked,
      visitorTeamShotsBlocked,
      localTeamShotsInsideBox,
      visitorTeamShotsInsideBox,
      localTeamShotsOutsideBox,
      visitorTeamShotsOutsideBox,
      localTeamPassesTotal,
      localTeamPassesAccurate,
      localTeamPassesPercentage,
      visitorTeamPassesTotal,
      visitorTeamPassesAccurate,
      visitorTeamPassesPercentage,
      localTeamYellowCards,
      visitorTeamYellowCards,
      localTeamRedCards,
      visitorTeamRedCards,
      localTeamSaves,
      visitorTeamSaves,
      localTeamGoalKick,
      visitorTeamGoalKick,
      localTeamFreeKick,
      visitorTeamFreeKick,
      localTeamThrowIn,
      visitorTeamThrowIn,
      localTeamFouls,
      visitorTeamFouls,
    };
  }, shallowEqual);
  useEffect(() => {
    setHeader(headerObj[selectedTab]);
  }, [selectedTab]);
  const teams = [
    {
      team: localTeamName,
      "Shots off target": localTeamShotsOffGoal,
      Substitution: localTeamSubstitutions,
      Corners: localTeamCorners,
      "Shots on target": localTeamShotsOnGoal,
      Possession: localTeamPossessionTime,
      Penalties: localTeamPenalties,
      "Shots total": localTeamShotsTotal,
      Offside: localTeamOffside,
      Attacks: localTeamAttacks,
      "Dangerous Attacks": localTeamDangerousAttacks,

      Saves: localTeamSaves,
      "Goal Kicks": localTeamGoalKick,
      "Free-Kicks": localTeamFreeKick,
      Offsides: localTeamOffside,
      "Throw-Ins": localTeamThrowIn,
      "Yellow Card": localTeamYellowCards,
      "Red Card": localTeamRedCards,
      Fouls: localTeamFouls,
      "Passes Total": localTeamPassesTotal,
      "Passes Accurate": localTeamPassesAccurate,
      "Pass %": `${localTeamPassesPercentage} %`,
      "Shots Total": localTeamShotsTotal,
      "Shots inside the box": localTeamShotsInsideBox,
      "Shots outside the box": localTeamShotsOutsideBox,
      "Shots Blocked": localTeamShotsBlocked,
      Goals: localTeamGoals,
      "Goals Attempts": localTeamGoalAttempts,
    },
    {
      team: visitorTeamName,
      "Shots off target": visitorTeamShotsOffGoal,
      Substitution: visitorTeamSubstitutions,
      Corners: visitorTeamCorners,
      "Shots on target": visitorTeamShotsOnGoal,
      Possession: visitorTeamPossessionTime,
      Penalties: visitorTeamPenalties,
      "Shots total": visitorTeamShotsTotal,
      Offside: visitorTeamOffside,
      Attacks: visitorTeamAttacks,
      "Dangerous Attacks": visitorTeamDangerousAttacks,
      Saves: visitorTeamSaves,
      "Goal Kicks": visitorTeamGoalKick,
      "Free-Kicks": visitorTeamFreeKick,
      Offsides: visitorTeamOffside,
      "Throw-Ins": visitorTeamThrowIn,
      "Yellow Card": visitorTeamYellowCards,
      "Red Card": visitorTeamRedCards,
      Fouls: visitorTeamFouls,
      "Passes Total": visitorTeamPassesTotal,
      "Passes Accurate": visitorTeamPassesAccurate,
      "Pass %": `${visitorTeamPassesPercentage} %`,
      "Shots Total": visitorTeamShotsTotal,
      "Shots inside the box": visitorTeamShotsInsideBox,
      "Shots outside the box": visitorTeamShotsOutsideBox,
      "Shots Blocked": visitorTeamShotsBlocked,
      Goals: visitorTeamGoals,
      "Goals Attempts": visitorTeamGoalAttempts,
    },
  ];
  // console.log(
  //   visitorTeamYellowCards,
  //   localTeamYellowCards,
  //   localTeamRedCards,
  //   localTeamShotsBlocked,
  //   localTeamShotsInsideBox,
  //   localTeamShotsOutsideBox
  // );
  const renderCells = useCallback(
    (key, team, i) => {
      return header.map((name, index) => (
        <React.Fragment key={key + index}>
          {team && index === 0 ? (
            <Grid
              key={key + index}
              item
              container
              xs={2}
              className={classes.columnContainer}
              alignItems="center"
              wrap="nowrap"
            >
              <Grid
                item
                xs={3}
                container
                justifyContent="center"
                alignItems="center"
                className={classes.imgContainer}
              >
                <Image
                  src={team.logoPath}
                  // width={27}
                  // height={35}
                  layout="fill"
                  className={classes.img}
                  alt={team.name}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography
                  // variant={team ? 'overline' : 'body1'}
                  color="primary"
                  className={classes.teamTitle}
                >
                  {team && team?.name}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              xs={2}
              // key={key + index}
              // xs={index === 0 ? 2 : 1}
              className={classes.columnContainer}
              container
              justifyContent="center"
              alignItems={team ? "center" : "flex-start"}
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                wrap="nowrap"
                sx={{}}
              >
                <Typography
                  // variant={team ? "overline" : "body1"}
                  // color="primary"
                  style={{
                    color: "#022A54",
                    whiteSpace: "nowrap",
                    backgroundColor:
                      i === 0 && teams[0][name] > teams[1][name]
                        ? "#E8F5FC"
                        : i === 1 && teams[1][name] > teams[0][name]
                        ? "#F9E6FD "
                        : "#fff",
                    padding: "7px 17px",
                    borderRadius: "16px",
                  }}
                  className={team ? classes.values : classes.title}
                >
                  {team ? teams[i][name] : name}
                </Typography>
              </Grid>
            </Grid>
          )}
        </React.Fragment>
      ));
    },
    [
      localTeamName,
      localTeamLogoPath,
      visitorTeamName,
      visitorTeamLogoPath,
      header,
    ]
  );

  const headerMemo = useMemo(() => renderCells(10), [header]);
  const row1Memo = useMemo(
    () =>
      renderCells(200, { name: localTeamName, logoPath: localTeamLogoPath }, 0),
    [localTeamName, localTeamLogoPath, header]
  );
  const row2Memo = useMemo(
    () =>
      renderCells(
        300,
        { name: visitorTeamName, logoPath: visitorTeamLogoPath },
        1
      ),
    [visitorTeamName, visitorTeamLogoPath, header]
  );

  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="space-between"
      className={classes.root}
      wrap="nowrap"
    >
      <Grid
        item
        container
        justifyContent="space-between"
        className={classes.rowContainer}
        wrap="nowrap"
      >
        {headerMemo}
      </Grid>
      <Grid
        item
        container
        justifyContent="space-between"
        className={classes.rowContainer}
        wrap="nowrap"
      >
        {row1Memo}
      </Grid>
      <Grid
        item
        container
        justifyContent="space-between"
        className={classes.rowContainer}
        wrap="nowrap"
      >
        {row2Memo}
      </Grid>
    </Grid>
  );
};
