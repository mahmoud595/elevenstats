import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { RoundDateFilter } from "./RoundDateFilter/RoundDateFilter";
import { RoundFilter } from "./RoundFilter/RoundFilter";
import { FilteredFixtures } from "./FilteredFixtures/FilteredFixtures";

const useStyles = makeStyles(({ palette }) => ({
  matchesTabWrapper: {
    marginTop: 30,
    padding: "16px 0 0.8em 4em",
    background: "#FDFDFD",
    borderRadius: "14px",
  },
  roundDatesFilterGrid: {
    marginTop: 13,
  },
}));
const rounds = [
  { name: "round 1", start: "29 APRIL", end: "26 MAY" },
  { name: "round 2", start: "29 APRIL", end: "26 MAY" },
  { name: "round 3", start: "29 APRIL", end: "26 MAY" },
  { name: "round 4", start: "29 APRIL", end: "26 MAY" },
  { name: "round 5", start: "29 APRIL", end: "26 MAY" },
  { name: "round 6", start: "29 APRIL", end: "26 MAY" },
  { name: "round 7", start: "29 APRIL", end: "26 MAY" },
  { name: "round 8", start: "29 APRIL", end: "26 MAY" },
  { name: "round 9", start: "29 APRIL", end: "26 MAY" },
  { name: "round 10", start: "29 APRIL", end: "26 MAY" },
  { name: "round 11", start: "29 APRIL", end: "26 MAY" },
  { name: "round 12", start: "29 APRIL", end: "26 MAY" },
  { name: "round  13", start: "29 APRIL", end: "26 MAY" },
  { name: "round 14", start: "29 APRIL", end: "26 MAY" },
  { name: "round 15", start: "29 APRIL", end: "26 MAY" },
  { name: "round 16", start: "29 APRIL", end: "26 MAY" },
  { name: "round 17", start: "29 APRIL", end: "26 MAY" },
];

const round1 = {
  fixtures: [
    { date: "Thursday, 29 April 2021" },
    { date: "Thursday, 29 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Thursday, 29 April 2021" },
    { date: "Thursday, 29 April 2021" },
    { date: "Thursday, 29 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Saturday, 31 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Friday, 30 April 2021" },
    { date: "Thursday, 29 April 2021" },
  ],
};

const mappedObj = {};

const mapping = () => {
  for (let fixture of round1.fixtures) {
    mappedObj[fixture.date] = (mappedObj[fixture.date] || 0) + 1;
  }
};
export const MatchesTab = () => {
  const [selected, setSelected] = useState("round");
  //at integration we replace selectedRound with name or id of round and pass it to mapping function
  const [selectedRound, setSelectedRound] = useState(0);
  useEffect(() => {
    mapping();
  }, []);
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.matchesTabWrapper}
      direction="column"
    >
      <RoundDateFilter selected={selected} setSelected={setSelected} />
      <Grid item container className={classes.roundDatesFilterGrid}>
        <RoundFilter
          rounds={rounds}
          selectedRound={selectedRound}
          setSelectedRound={setSelectedRound}
          selected={selected}
        />

        <FilteredFixtures data={mappedObj} />
      </Grid>
    </Grid>
  );
};
