import { useEffect, useState, memo } from "react";
import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { Player } from "./Player/Player";
import { PlayerListHeader } from "./PlayersListHeader/PlayersListHeader";
import { StatsGroups } from "./StatsGroups/StatsGroups";

const PREFIX = "playerList";

const classes = {
  row: `${PREFIX}-row`,
  rowsContainer: `${PREFIX}-rowsContainer`,
  // container: `${PREFIX}-container`,
  // rightSidecontainer: `${PREFIX}-rightSidecontainer`,
  // rightSide: `${PREFIX}-rightSide`,
  // header: `${PREFIX}-header`,
  // overAllHeader: `${PREFIX}-overAllHeader`,
  // headerText: `${PREFIX}-headerText`,
};

const Container = styled("div")(({}) => ({
  backgroundColor: "white",
  display: "flex",
  position: "relative",
  overflowX: "auto",
  width: "100%",
  color: "rgba(2, 42, 84, 0.6)",
  paddingLeft: 8,
  paddingBottom: "56px",
  borderBottomLeftRadius: "18px",
  borderBottomRightRadius: "18px",
  marginBottom: 41,
  [`& .${classes.rowsContainer}`]: {
    flex: 1,
    width: "fit-content",
    "& > div:nth-of-type(even)": {
      background:
        "linear-gradient(270deg, rgba(54, 84, 220, 0.02) 0%, rgba(54, 84, 220, 0.06) 100%)",
    },

    "& > div:nth-of-type(2)": {
      "& > div:last-child > div": {
        borderTop: "1px solid #EAEDF2",
        borderRadius: "12px 12px 0px 0px",
      },
    },

    "& > div:last-child": {
      "& > div:last-child > div": {
        borderBottom: "1px solid #EAEDF2",
        borderRadius: "0px 0px 12px 12px",
      },
    },
  },
  // [`& .${classes.headerText}`]: {
  //   fontSize: 14,
  //   fontWeight: 600,
  //   textAlign: "center",
  // },
  // [`& .${classes.overAllHeader}`]: {
  //   textAlign: "center",
  //   height: 52,
  // },
  // [`& .${classes.header}`]: {
  //   height: 52,
  //   display: "flex",
  //   paddingLeft: 5,

  //   "& > div": {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  // },
  // [`& .${classes.rightSidecontainer}`]: {
  //   background: "white",
  //   position: "sticky",
  //   color: "#022A54",
  //   right: 0,
  //   padding: "0px 10px",
  //   display: "flex",
  //   flexDirection: "column",
  // },
  // [`& .${classes.rightSide}`]: {
  //   background:
  //     "linear-gradient(360deg, rgba(54, 62, 220, 0.02) 0%, rgba(54, 84, 220, 0.04) 100%)",
  //   border: "1px solid #A1B5C9",
  //   borderRadius: "12px",
  //   zIndex: 1,
  //   "& > div": {
  //     height: 72,
  //     width: 94,
  //   },
  // },
}));

const header = [
  // { name: "INF", width: 67 },
  { name: "name", width: 200 },
  { name: "position", width: 150 },
  { name: "age", width: 90 },
  // { name: "nation" },
  // { name: "contract" },
  { name: "G", data: "dribbling" },
  { name: "xG", data: "finishing" },
  { name: "pen", data: "offTheBallMovement" },
  { name: "sh", data: "finalThirdPassing" },
  { name: "h.sh", data: "crossing" },
  { name: "G", data: "buildUpPassing" },
  { name: "pen", data: "foulWinning" },
  { name: "xG", data: "passingEfficiency" },
  { name: "h.sh", data: "defensiveIntensity" },
  { name: "sh", data: "recovery" },
  { name: "pen", data: "aerialAbility" },
  { name: "G", data: "boxDefending" },
  {
    name: "xG",
    data: "pen",
  },
  // { name: "GKShotStoppingAbility"},
  // { name: "GKActivenessOffTheLine" },
  // { name: "GKDistribution" },
  { name: "h.sh", data: "penalties" },
  { name: "h.sh", data: "setPieces" },
  { name: "G", data: "defensiveDuels" },
  { name: "xG", data: "offensiveDuels" },
];

export const PlayersList = memo(() => {
  const players = useSelector(({ playerSearch }) => playerSearch.players);
  // console.log(players.length);
  const [allPlayers, setAllPlayers] = useState(players);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function handleScroll() {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //     document.documentElement.offsetHeight
  //   )
  //     return;

  //   console.log("Fetch more list items!");
  // }

  return (
    <>
      <StatsGroups />
      <Container>
        <Grid
          item
          container
          direction="column"
          className={classes.rowsContainer}
        >
          <PlayerListHeader header={header} />

          {allPlayers?.map((player, i) => (
            <Player key={i} player={player} tableHeader={header} />
          ))}
        </Grid>

        {/* <Grid item className={classes.rightSidecontainer}>
        <Grid item className={classes.overAllHeader}>
          <p className={classes.headerText}> overall</p>
        </Grid>
        <Grid item container direction="column" className={classes.rightSide}>
          {new Array(40).fill(null).map((val, i) => (
            <Grid
              item
              container
              justifyContent="center"
              alignItems="center"
              key={i}
            >
              <Typography className={classes.headerText}>222</Typography>
            
            </Grid>
          ))}
        </Grid>
      </Grid> */}
      </Container>
    </>
  );
});
