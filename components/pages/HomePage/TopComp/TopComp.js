import React from "react";
// import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const DateComp = dynamic(
  import("./DateComp/DateComp").then((mod) => mod.DateComp)
);
import { MatchesFilter } from "./MatchesFilter/MatchesFilter";
// const useStyles = makeStyles((theme) => ({
//   topComp: {
//     background: "#fff",
//     padding: "14px 5em 0 4em",
//     borderRadius: 20,
//     "@media (max-width: 640px)": {
//       borderRadius: "8px",
//       padding: "10px 10px 0px 12px",
//     },
//   },
// }));

const TopCompContainer = styled(Grid)(() => ({
  background: "#fff",
  padding: "14px 5em 0 4em",
  borderRadius: 20,
  "@media (max-width: 640px)": {
    borderRadius: "8px",
    padding: "10px 10px 0px 12px",
  },
}));

export const TopComp = () => {
  // const classes = useStyles();

  return (
    <TopCompContainer
      item
      container
      direction="column"
      // className={classes.topComp}
      wrap="nowrap"
    >
      <DateComp />
      <MatchesFilter />
    </TopCompContainer>
  );
};
