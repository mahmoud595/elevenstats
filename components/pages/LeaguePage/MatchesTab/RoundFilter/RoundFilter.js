import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Btn from "components/Layout/Btn/Btn";
const useStyles = makeStyles(({ palette }) => ({
  roundFilerWrapper: {
    "&>div": {
      margin: "10px 5px 0 5px",
    },
  },
  roundText: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "29px",
    textTransform: "capitalize",
  },
}));

export const RoundFilter = ({
  rounds,
  selectedRound,
  setSelectedRound,
  selected,
}) => {
  const classes = useStyles();

  const selectRoundHandler = (i) => {
    setSelectedRound(i);
  };

  return (
    <Grid
      item
      container
      // justifyContent="space-between"
      alignItems="center"
      className={classes.roundFilerWrapper}
    >
      {rounds.map(({ name, start, end }, i) => (
        <Grid item key={i}>
          <Btn
            borderColor={selectedRound === i ? "transparent" : "#F4F6F8"}
            backgroundColor={selectedRound === i ? "#E9F0FF" : "#fff"}
            padding="0.5em 2.3em"
            borderRadius="18px"
            onClick={() => selectRoundHandler(i)}
          >
            <Typography
              className={classes.roundText}
              style={{
                color: `${selectedRound === i ? "#246BFD" : "#A1B5C9"}`,
              }}
            >
              {selected === "round" ? name : `${start} - ${end}`}
            </Typography>
          </Btn>
        </Grid>
      ))}
    </Grid>
  );
};
