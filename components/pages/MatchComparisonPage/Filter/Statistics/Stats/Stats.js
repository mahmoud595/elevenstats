import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";

import RangeSlider from "./Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: 12,
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "#707070",
    // fontWeight: 500,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionRoot: {
    boxShadow: "none",
    border: "none",
    minHeight: 75,
  },
  expanded: {
    //  minHeight: 0,
  },
  summaryRoot: {
    minHeight: 0,
    padding: 0,
    "&.Mui-expanded": {
      minHeight: 0,
    },
  },
  accrDetails: {
    paddingTop: 0,
    paddingBottom: 0,
    padding: 0,
  },
  content: {
    "&.Mui-expanded": {
      margin: 0,
    },
  },
  icon: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  box: {
    border: "1px solid #D1D5DB",
    color: "#2B5198",
    fontSize: 12,
    padding: "0px 5px",
  },
}));

const arr = [
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   65,
  //   6414,
  //   7547647,
  //   84564356,
  //   8546345,
  //   3465349,
  //   734534,
  //   634545,
  //   4745755,
  //   654457,
  //   435635657,
  53546534745, 635663445, 643553245, 6534456, 5765746, 65246, 3764376, 54573456,
  436456, 454656, 44564567, 44554677, 43476457627674, 7747456, 77323747,
];

const Stats = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid container>
      {arr.map((index) => (
        <Grid
          item
          xs={3}
          key={index}
          style={{ minWidth: 200, marginRight: 40 }}
        >
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            className={classes.accordionRoot}

            // classes={{ expanded: classes.expanded }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              classes={{
                // expanded: classes.expanded,
                root: classes.summaryRoot,
                content: classes.content,
                //  expandIcon: classes.icon,
              }}
            >
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography className={classes.heading}>
                    Points Per Game
                  </Typography>
                </Grid>
                <Grid item className={classes.box}>
                  <Typography variant="caption">0-100</Typography>
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails className={classes.accrDetails}>
              <RangeSlider />
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
};

export default Stats;
