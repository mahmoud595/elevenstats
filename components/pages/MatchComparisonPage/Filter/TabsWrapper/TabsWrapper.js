import React from "react";
import PropTypes from "prop-types";
import makeStyles from "@mui/styles/makeStyles";
import { Tabs, Tab, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StatisticsBotHeader from "components/Layout/StatisticsBotHeader/StatisticsBotHeader";

import { Btn } from "components/index";
import DatePicker from "../DatePicker/DatePicker";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ height: "88%" }}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    flexGrow: 1,
    backgroundColor: palette.background,
    height: "100%",
  },
  tabs: {
    borderBottom: "1px solid #E0E0E0",
    backgroundColor: "#FFF",
    color: "#6B7281",
    position: ({ h2h }) => {
      return h2h ? "sticky" : "static";
    },
    top: 0,
    zIndex: ({ h2h }) => {
      return h2h ? 2 : "auto";
    },
  },
  tab: {
    fontWeight: 700,
    fontSize: ({ h2h }) => h2h && "1.6rem",
    "@media (max-width: 1400px)": {
      fontSize: ({ h2h }) => h2h && "1.1rem",
    },
  },
  rootTab: {
    minWidth: 0,
    marginRight: ({ marginRight }) => marginRight || "0px",
    "@media (min-width: 600px)": {
      minWidth: 0,
    },
  },
  flexContainer: {
    width: ({ h2h }) => (h2h ? "70vw" : "100%"),
    justifyContent: ({ h2h }) => {
      return h2h ? "flex-start" : "space-between";
    },
  },
  selected: {
    color: ({ color }) => {
      return color ? color : palette.primary.main;
    },
  },
  btns: {
    marginRight: -90,
    marginLeft: 90,
  },
}));

export default function SimpleTabs({ data, main, ...props }) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //comment
  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
        className={classes.tabs}
        classes={{ flexContainer: classes.flexContainer }}
      >
        {data?.map(({ label, index }) => (
          <Tab
            key={label}
            label={label}
            {...a11yProps(label)}
            classes={{
              wrapper: classes.tab,
              root: classes.rootTab,
              selected: classes.selected,
            }}
          />
        ))}
        {props.h2h && <StatisticsBotHeader h2h />}
        {main && (
          <Grid
            item
            xs={6}
            container
            alignItems="center"
            justifyContent="space-between"
            // className={classes.btns}
            wrap="nowrap"
          >
            {/* <Grid item></Grid> */}
            <Grid item XS={6}>
              <DatePicker />
            </Grid>
            <Grid item>
              <Btn backgroundColor="#769C3E" text="Save" color="#FFF" />
            </Grid>
            <Grid item XS={2} style={{ justifySelf: "flex-end" }}>
              <Btn>
                <CloseIcon fontSize="large" />
              </Btn>
            </Grid>
          </Grid>
        )}
      </Tabs>

      {data?.map(({ index, label, component }) => (
        <div key={index}>
          <TabPanel value={value} index={index} key={label}>
            {component}
          </TabPanel>
        </div>
      ))}
    </div>
  );
}
