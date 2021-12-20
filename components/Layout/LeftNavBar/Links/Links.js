import { useState } from "react";
import { useRouter } from "next/router";
import {
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import {
  Dashboard,
  Team,
  League,
  Matches,
  BettingOdds,
  Scores,
  PlotStats,
  PlayerSearch,
  Referees,
  Inbox,
  DropDownArrow,
} from "../../../../public";

const useStyles = makeStyles(({ palette }) => ({
  expandIcon: {
    padding: 0,
    marginRight: 0,
    marginLeft: 4,
    height: 4,
    width: 8,
    fill: "inherit",
    stroke: "#A1B5C9",
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
  summary: {
    // padding: ({ open }) => (open ? "0 1.96rem 0 1.2rem" : "0 0.5rem"),
    borderRadius: 10,
    minHeight: "5.5em",
    transition: "background .1s linear ",
    color: `#fff`,
    "&.Mui-expanded": {
      minHeight: 0,
    },
    // "@media (max-width: 1280px)": {
    //   padding: "0 0.8rem",
    // },
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   height: "100%",
    //   width: "1%",
    //   borderRadius: 10,
    //   background: `linear-gradient(147.19deg, #355576 0%, ${palette.primary.main} 100%)`,
    //   transform: "scaleY(0)",
    //   // transition: 'transform 0.2s, width 0.2s cubic-bezier(1,0,0,1) 0.2s',
    //   transition: "all .3s linear ",
    // },
    "&:hover": {
      color: "#FFF !important",
      background: `linear-gradient(147.19deg, #355576 0%, ${palette.primary.main} 100%) !important`,
      // "&::before": {
      //   transform: "scaleY(1)",
      //   width: "100%",
      // },
    },
  },
  content: {
    margin: 0,
    // position: 'relative',
    justifyContent: "flex-start",
    alignItems: "center",
    "&.Mui-expanded": {
      margin: "10px 0px 10px 0px",
    },
  },
  accordion: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "inherit",
  },
  linksImage: {
    // width: '2.9em',
    // display: 'flex',
    position: "absolute",
    left: 12,
    // top: '9px',
    marginRight: ".5em",
    height: "100%",
    width: "18px",
    height: "18px",
    // transition: "all .12s cubic-bezier(.31,.75,.54,.78)",
    // transition: 'all .3s linear ',

    // '@media (max-width: 960px)': {
    //   height: '6em',
    //   width: '5em',
    //   marginRight: '1em',
    // },
    // width: "2.9em",
    "& svg": {
      fill: "currentColor",
      // height: '95%',
      // width: "95%",
      width: "18px",
      height: "18px",
      // width: '100%',
      // height: '100%',
    },
  },
  link: {
    // marginBottom: '1.2em',
    // transition: "all .15s linear",
    // transition: 'all .3s linear ',
    padding: ({ open }) => {
      let val;
      val === open ? "0 5px" : "0";
      return val;
    },
    position: "relative",
  },
  accordionDetails: {
    borderRadius: 7,
    fontSize: "1.6rem",
    color: "#A1B5C9",
  },
  typography: {
    marginLeft: "0.5rem",
    // "@media (max-width: 1440px)": {
    //   fontSize: "1.3rem",
    // },
    // "@media (max-width: 821px)": {
    //   fontSize: "0.9rem",
    // },
    // "@media (max-width: 632px)": {
    //   fontSize: "0.7rem",
    // },
  },
  title: {
    visibility: ({ open }) => (open ? "visible" : "hidden"),
    width: ({ open }) => (open ? "100%" : 0),
    marginLeft: ({ open }) => (open ? 25 : 0),
    transition: "all .1s linear ",
    // transitionDelay: '.05s',

    // transition: ({ open }) =>
    //   open
    //     ? "all .1s cubic-bezier(.53,.29,1,.48) 0.2s"
    //     : "all .1s cubic-bezier(.21,.79,.41,.89)",
  },
}));

const links = [
  {
    name: "Home",
    icon: function renderDashBoard() {
      return <Dashboard />;
    },
    routeName: "/",
  },
  {
    name: "Inbox",
    icon: function renderInbox() {
      return <Inbox />;
    },
  },
  {
    name: "Scouting",
    icon: function renderPlayerSearch() {
      return <PlayerSearch />;
    },
  },
  {
    name: "Teams",
    icon: function renderTeam() {
      return <Team />;
    },
  },
  {
    name: "Leagues",
    routeName: "/league",
    icon: function renderLeague() {
      return <League />;
    },
  },
  {
    name: "Matrix",
    icon: function renderMatch() {
      return <Matches />;
    },
    routeName: "/matchComparison",
  },
  {
    name: "Betting Odds",
    icon: function renderBettingOdds() {
      return <BettingOdds />;
    },
  },
  {
    name: "Referees",
    icon: function renderReferees() {
      return <Referees />;
    },
  },
  {
    name: "Plot Stats",
    icon: function renderPlotsStats() {
      return <PlotStats />;
    },
  },
];

const Links = ({ open, handleDrawerOpen }) => {
  const classes = useStyles({ open });
  const [expand, setExpand] = useState(false);
  const router = useRouter();

  const change = (e, index, routeName) => {
    if (
      e.target.tagName.toLowerCase() === "svg" ||
      e.target.tagName.toLowerCase() === "path" ||
      e.target.className.includes("MuiAccordionSummary-expandIcon")
    ) {
      if (expand === index) {
        setExpand(false);
      } else {
        setExpand(index);
        !open && handleDrawerOpen();
      }
    } else {
      if (routeName) {
        router.push(routeName);
      }
    }
  };

  return (
    <>
      {links.map(({ name, icon, routeName }, index) => (
        <Grid
          item
          key={index}
          className={classes.link}
          style={{ position: "relative" }}
        >
          <Accordion
            className={classes.accordion}
            id={index}
            onChange={(e) => change(e, index, routeName)}
            expanded={expand === index && open}
          >
            <AccordionSummary
              expandIcon={<DropDownArrow />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes={{
                content: classes.content,
                expandIcon: classes.expandIcon,
                root: classes.summary,
              }}
              style={{
                background:
                  router.pathname === routeName
                    ? `linear-gradient(147.19deg, #355576 0%, #022A54 100%)`
                    : "none",
                color: router.pathname === routeName ? "white" : "#A1B5C9",
              }}
            >
              {/* <Typography>Accordion 1</Typography> */}
              <Grid
                item
                // xs={open ? 2 : 7}
                className={classes.linksImage}
                container
                justifyContent="center"
                alignItems="center"
              >
                {/* <div >{icon()}</div> */}
                {icon()}
              </Grid>
              <Grid
                container
                justifyContent={open ? "flex-start" : "center"}
                alignItems="center"
                wrap="nowrap"
                style={{ position: "relative" }}
              >
                {/* {open && ( */}
                <Grid item className={classes.title}>
                  <Typography variant="body1" className={classes.typography}>
                    {name}
                  </Typography>
                </Grid>
                {/* )} */}
              </Grid>
            </AccordionSummary>
            {open && (
              <AccordionDetails className={classes.accordionDetails}>
                <ul>
                  <li>Tab1</li>
                  <li>Tab2</li>
                  <li>Tab3</li>
                </ul>
              </AccordionDetails>
            )}
          </Accordion>
        </Grid>
      ))}
    </>
  );
};

export default Links;
