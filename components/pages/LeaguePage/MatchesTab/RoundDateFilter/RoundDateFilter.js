import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Btn from "components/Layout/Btn/Btn";

const useStyles = makeStyles(({ palette }) => ({
  roundDateFilter: {
    padding: "3px",
    border: "0.711874px solid #EAEDF2",
    borderRadius: "21px",
    alignSelf: "flex-start",
    display: "flex",
  },
  text: {
    fontSize: "2em",
    fontWeight: 600,
    lineHeight: "29px",
    textTransform: "capitalize",
  },
  btnsGrid: {
    "&:last-of-type": {
      marginLeft: "2.3em",
    },
  },
}));
const filters = ["date", "round"];

export const RoundDateFilter = ({ selected, setSelected }) => {
  const classes = useStyles();
  const clickHandler = (val) => {
    setSelected(val);
  };
  return (
    <Grid item className={classes.roundDateFilter} alignItems="center">
      {filters.map((val, i) => (
        <Grid item key={i} className={classes.btnsGrid}>
          <Btn
            borderRadius="18px"
            padding="0 4em"
            onClick={() => clickHandler(val)}
            backgroundColor={val === selected ? "#E9F0FF" : "#F6F7FA"}
          >
            <Typography
              className={classes.text}
              style={{ color: `${val === selected ? "#246BFD" : "#A1B5C9"}` }}
            >
              By {val}
            </Typography>
          </Btn>
        </Grid>
      ))}
    </Grid>
  );
};
