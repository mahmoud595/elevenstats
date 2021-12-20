import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { Btn } from "components";
import Image from "next/image";

import selectPositionsPlayground from "public/selectPositionsPlayground.png";
import { PositionPlayGround } from "./PositionPlayGround/PositionPlayGround";
const useStyles = makeStyles((theme) => ({
  positionsLeftGrid: {
    paddingRight: "4em",
    display: "flex",
    flexDirection: "column",
    maxWidth: "20.5%",
    flexBasis: "20.5%",
    borderRight: "1px solid #EAEDF2",
    "@media (max-width:1200px)": {
      paddingRight: "2em",
    },
  },
  SelectionGrid: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "rgba(246, 247, 250, 0.7)",
    borderRadius: "12px",
    "@media (max-width:1200px)": {
      padding: 6,
    },
  },
  btnGrid: {
    minWidth: "13.8em",
    "@media (max-width:960px)": {
      minWidth: "5em",
    },
  },
  btnText: {
    color: "#fff",
    fontSize: "1.8em",
    lineHeight: "10px",
    fontWeight: "600",
    whiteSpace: "nowrap",
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
  },
  clearBtnGrid: {
    marginLeft: "2.1em",
  },
  btnsContainer: {
    marginTop: "11px",
  },
  clearText: {
    color: "#022A54",
  },
  positionsText: {
    fontSize: "1.8em",
    lineHeight: "30px",
    fontWeight: 600,
    color: "rgba(2, 42, 84, 0.6)",
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
  },
}));

export const AdvancedPositionsLeftGrid = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.positionsLeftGrid}>
      <Grid item>
        <Typography className={classes.positionsText}>POSITIONS</Typography>
      </Grid>
      <Grid
        item
        container
        className={classes.SelectionGrid}
        direction="column"
        alignItems="center"
      >
        <Grid item sx={{ position: "relative" }}>
          <Image src={selectPositionsPlayground} />
          <PositionPlayGround />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          wrap="nowrap"
          className={classes.btnsContainer}
          justifyContent="center"
        >
          <Grid item className={classes.btnGrid}>
            <Btn
              padding="9px 2em 8px 2.1em"
              borderRadius="6px"
              backgroundColor="#022A54"
              fullWidth
              lowSizePadding="5px 1em 5px 1em"
            >
              <Typography className={classes.btnText}>Select All</Typography>
            </Btn>
          </Grid>
          <Grid item className={`${classes.btnGrid} ${classes.clearBtnGrid}`}>
            <Btn
              padding="9px 2em 8px 2.1em"
              borderRadius="6px"
              backgroundColor="#EAEDF2"
              fullWidth
              lowSizePadding="5px 1em 5px 1em"
            >
              <Typography className={`${classes.btnText} ${classes.clearText}`}>
                Clear
              </Typography>
            </Btn>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
