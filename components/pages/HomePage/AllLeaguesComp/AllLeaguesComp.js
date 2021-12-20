import React from "react";
// import makeStyles from '@mui/styles/makeStyles';
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import dynamic from "next/dynamic";

import { LeagueContainer } from "./LeagueContainer/LeagueContainer";
const AllLeaguesHeader = dynamic(
  import("./AllLeaguesHeader/AllLeaguesHeader").then(
    (mod) => mod.AllLeaguesHeader
  )
);

const AllLeaguesContainer = styled(Grid)(() => ({
  backgroundColor: "#F6F7FA",
  borderRadius: "20px",
}));

// const useStyles = makeStyles((theme) => ({
//   allLeaguesContainer: {
//     backgroundColor: "#F6F7FA",
//     borderRadius: "20px",
//   },
// }));
export const AllLeaguesComp = () => {
  // const classes = useStyles();

  return (
    <AllLeaguesContainer
      item
      container
      // className={classes.allLeaguesContainer}
      direction="column"
    >
      <AllLeaguesHeader />
      <LeagueContainer />
    </AllLeaguesContainer>
  );
};
