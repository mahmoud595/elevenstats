import { Typography, Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { ScoutingFilterButton } from "../ScoutingFilterButton/ScoutingFilterButton";
import { SortArrow } from "public";

const useStyles = makeStyles((theme) => ({
  dropDown: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",
    padding: "24px 4.3em 24px 2.3em",
    width: "35.3em",
    height: 380,
    overflow: "auto",
    zIndex: 2,
    "&>div:not(:first-child)": {
      marginTop: "6px",
    },
    "&>div:nth-child(2)": {
      marginTop: "10px",
    },
  },
  value: {
    fontSize: "2em",
    lineHeight: "16px",
    fontWeight: 600,
    color: "rgba(2, 42, 84, 0.6)",
  },
  sortBy: {
    color: "rgba(2, 42, 84, 0.5)",
  },
  valueGrid: {
    cursor: "pointer",
    padding: "4px 1em 5px 1.6em",
    borderRadius: "8px",
    "&:hover": {
      background:
        " linear-gradient(270deg, rgba(54, 84, 220, 0.02) 0%, rgba(54, 84, 220, 0.08) 100%)",
      "& p": {
        color: "#246BFD",
      },
    },
  },
  arrowsGrid: {
    display: "flex",
    padding: 6,
    borderRadius: "50%",
    border: "0.5px dashed rgba(2, 42, 84, 0.6)",
  },
  descArrow: {
    transform: "rotate(180deg)",
  },
}));
const data = [
  "Age",
  "Dribbling",
  "Shooting",
  "Passing",
  "Defending",
  "Set Pieces",
  "Goalkeeping",
  // "Dribbling",
  // "Shooting",
  // "Passing",
  // "Defending",
  // "Set Pieces",
  // "Goalkeeping",
];
export const SortByFilter = () => {
  const classes = useStyles();
  return (
    <ScoutingFilterButton
      text="Sort by"
      type="Sort by"
      pointerRight="100px"
      dropDownTop="45px"
    >
      <Grid
        item
        className={classes.dropDown}
        container
        direction="column"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <Typography className={`${classes.value} ${classes.sortBy}`}>
            Sort By:
          </Typography>
        </Grid>
        {data.map((val, i) => (
          <Grid
            item
            key={i}
            className={classes.valueGrid}
            container
            alignItems="center"
            justifyContent="space-between"
            wrap="nowrap"
          >
            <Grid item>
              <Typography className={classes.value}>{val}</Typography>
            </Grid>
            <Grid item className={classes.arrowsGrid}>
              <Grid item>
                <SortArrow />
              </Grid>
              <Grid item className={classes.descArrow}>
                <SortArrow />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </ScoutingFilterButton>
  );
};
