import { Grid, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '2.5em',
    // position: ({ h2h }) => {
    //   return h2h ? "sticky" : "static";
    // },
    // top: 49,
    // backgroundColor: ({ h2h }) => {
    //   return h2h ? "#FFF" : "transparent";
    // },
    // zIndex: ({ h2h }) => {
    //   return h2h ? 2 : "auto";
    // },
    // padding: ({ h2h }) => {
    //   return h2h ? 15 : 0;
    // },
    // boxShadow: ({ h2h }) => {
    //   return h2h ? "0 8px 6px -6px rgba(0,0,0,0.1)" : "none";
    // },
  },
  btn: {
    // borderColor: ({ h2h }) => {
    //   let val;
    //   h2h ? (val = '#43093C') : (val = '#fff');
    //   return val;
    // },
    marginLeft: "14px",

    border: "0.5px solid rgba(2, 42, 84, 0.5) ",
    // boxShadow: '0 0 3px 0 #43093C',
    color: "rgba(2, 42, 84, 0.5)",
    borderRadius: "20px",

    padding: "0.5rem 4rem",
    "@media (max-width: 1550px)": {
      padding: "6px 33px",
      // minWidth: '0',
    },
    "@media (max-width: 1280px)": {
      padding: "0.4rem 2.6rem",
    },

    "@media (max-width: 1190px)": {
      padding: "0.4rem 2rem",
      // minWidth: '0',
    },
    "@media (max-width: 900px)": {
      padding: "0.2rem 1rem",
      minWidth: "0",
      marginLeft: "0",
    },
  },
  firstBtn: {
    // backgroundColor: ({ h2h }) => {
    //   let val;
    //   h2h ? (val = '#43093C') : (val = '#fff');
    //   return val;
    // },
    backgroundColor: "rgba(36, 107, 253, 0.1)  !important",
    color: "#246BFD  !important",
    // borderColor: "transparent",
    border: "none !important",
  },

  link: {
    color: "inherit",
    textDecoration: "none",
  },
}));
const btns = ["all", "goals", "corners", "cards", "half", "players"];
const StatisticsBotHeader = ({ h2h, changeSelected }) => {
  const classes = useStyles({ h2h });
  const [selected, setSelected] = useState(0);

  const btnHandler = (i, name) => {
    setSelected(i);
    changeSelected(name);
  };
  return (
    <Grid
      item
      container
      alignItems="center"
      className={classes.root}
      // justifyContent="space-around"
      // wrap={h2h ? 'wrap' : 'nowrap'}
      wrap="nowrap"
    >
      {btns.map((btn, i) => (
        <a href={"#cardsContainer"} className={classes.link} key={i}>
          <Grid item>
            <Button
              className={`${classes.btn} ${i === selected && classes.firstBtn}`}
              variant="outlined"
              onClick={() => btnHandler(i, btn)}
            >
              <Typography
                // className={`${classes.txt} ${i === selected && classes.firstTxt}`}
                variant="caption"
              >
                {btn}
              </Typography>
            </Button>
          </Grid>
        </a>
      ))}
    </Grid>
  );
};

export default StatisticsBotHeader;
