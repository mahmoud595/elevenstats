import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { ProfileArrow, Sort, ArrowDown } from "../../../../../public";
import { Btn, DropDownSelect } from "../../../..";

const useStyles = makeStyles((theme) => ({
  arrow: {
    width: 8,
    height: 4,
    color: ({ textColor }) => textColor,
  },
  text: {
    // color: "#6B7281",
    color: ({ textColor }) => textColor,
    fontSize: "1.2em",
    fontWeight: 600,
    lineHeight: "16px",
    whiteSpace: "nowrap",
  },
  sort: {
    fontSize: "1.1em",
    color: "#fff",
    whiteSpace: "nowrap",
    letterSpacing: "2.5px",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  sortIcon: {
    width: "3em",
    height: "3em",
    "@media (max-width: 960px)": {
      height: "5em",
      width: "5em",
    },
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
}));
const SortBy = ({
  h2h,
  search,
  fullWidth,
  backgroundColor,
  name,
  options,
  ...props
}) => {
  const classes = useStyles(props);

  return (
    <>
      {!h2h && (
        <Grid item>
          <Typography className={classes.sort}>Sort By</Typography>
        </Grid>
      )}

      <>
        <Grid item style={{ width: "100%" }}>
          <Btn
            backgroundColor={backgroundColor}
            // padding="0.6em 1em"
            height="37px"
            margin="0"
            fontSize="1em"
            // width={props.width}
            fullWidth={fullWidth}
          >
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <Grid item>
                <Typography className={classes.text}>{name}</Typography>
              </Grid>
              <Grid item>
                <ProfileArrow className={classes.arrow} />
                {/* <ArrowDown className={classes.arrow} /> */}
              </Grid>
            </Grid>
          </Btn>
        </Grid>
      </>

      {!h2h && (
        <Grid item className={classes.sortIcon}>
          <Sort />
        </Grid>
      )}
    </>
  );
};

export default SortBy;
