import React, { useCallback, useMemo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Button, useMediaQuery } from "@mui/material";

import { WinLoseComp } from "components/pages/HeadToHeadPage/FirstComp/SideComp/WinLoseComp/WinLoseComp";
import Btn from "components/Layout/Btn/Btn";
const useStyles = makeStyles(({ palette }) => ({
  root: {
    // height: "194px",
    borderTop: "0px",
    marginTop: "2em",
  },
  headerTxt: {
    textAlign: "center",
    color: "#A0B0CB",
    fontSize: "1.6rem",
    fontWeight: "600",
    "@media only screen and (max-width:1630px)": {
      fontSize: "1.4rem",
    },
    "@media only screen and (max-width:1480px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.5rem",
    },
    "@media only screen and (max-width:640px)": {
      fontSize: "2.5em",
    },
  },
  headerGrid: {
    color: "rgba(130, 149, 170, 1)",
    borderRadius: "15px",
    // padding: "2px 6px",
  },
  btnTxt: {
    "@media only screen and (max-width:1630px)": {
      fontSize: "1.2rem",
    },
    "@media only screen and (max-width:1480px)": {
      fontSize: "1rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.3rem",
    },
    "@media only screen and (max-width:640px)": {
      fontSize: "2.5em",
    },
    textTransform: "uppercase",
  },
  dataGrid: {
    padding: "0.6em 0 0.8em 0",
    borderRadius: "40px",
    "@media only screen and (max-width:960px)": {
      padding: "0",
    },
    "@media only screen and (max-width:640px)": {
      margin: "2em 0",
    },
  },
  ppg: {
    fontSize: "1.4rem",

    fontWeight: "600",
    textAlign: "center",
    lineHeight: "13px",

    "@media only screen and (max-width:1680px)": {
      fontSize: "1.1rem",
    },
    "@media only screen and (max-width:1280px)": {
      fontSize: "1.4rem",
    },
    // '@media only screen and (max-width:1480px)': {
    //   fontSize: '1.2rem',
    // },
    "@media only screen and (max-width:640px)": {
      fontSize: "2em",
    },
  },
  ppgGrid: {
    width: "45px",
    padding: "0.3rem 1.3rem",
    "@media only screen and (max-width:1480px)": {
      padding: "0.3rem 0.8rem",
    },
    "@media only screen and (max-width:1280px)": {
      padding: "0.3rem 0.4rem",
    },
    "@media only screen and (max-width:640px)": {
      width: "31px",
      padding: 0,
    },
    // backgroundColor: "#75B169",
    borderRadius: "50px",
  },
}));
const header = [
  { label: "FORM", size: 2 },
  { label: "LAST 5 MATCHES", size: 5 },
  { label: "PPG", size: 1 },
];
const data = [
  {
    label: "overAll",
    form: "overAll",
    ppg: "total",

    ppgColor: "#FF8A48",
    ppgbgColor: "rgba(255, 138, 72, 0.18)",
  },
  {
    form: "home",
    label: "home",
    ppg: "home",

    ppgColor: "#1BD47B",
    ppgbgColor: "#DEF9EC",
  },
  {
    form: "away",
    label: "away",
    ppg: "away",

    ppgColor: "#FB5266",
    ppgbgColor: "rgba(251, 82, 102, 0.14)",
  },
];
export const MidComp = ({ points, form }) => {
  const classes = useStyles();
  const sm = useMediaQuery("(max-width:640px)");

  // console.log(form);
  const renderHeader = useCallback(() => {
    return header.map(({ label, size }, i) => (
      <Grid item xs={size} key={i}>
        <Typography className={classes.headerTxt}>{label}</Typography>
      </Grid>
    ));
  }, [header]);
  const headerMemo = useMemo(() => renderHeader(), [header]);

  const renderData = useCallback(() => {
    return data.map((data, i) => (
      <Grid
        item
        container
        justifyContent="space-around"
        alignItems="center"
        key={i}
        className={classes.dataGrid}
      >
        <Grid
          item
          md={2}
          xs={3}
          container
          justifyContent="center"
          className={classes.headerGrid}
          style={{
            backgroundColor: "#F1F4F6",
            padding: "0.3rem 0",
          }}
        >
          {/* <Btn
            
       
          > */}
          <Typography variant="h5" className={classes.btnTxt}>
            {data.label}
          </Typography>
          {/* </Btn> */}
        </Grid>
        <Grid item md={5} xs={6} container wrap="nowrap" container>
          <WinLoseComp
            fontColor="#fff"
            fontSize="1.3rem"
            fontWeight="700"
            lineHeight="18px"
            size={26}
            midFontSize="1.1rem"
            lowFontSize="1.1rem"
            mobileFontSize="2em"
            form={form[data.form].split("")}
            teamComp
          />
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          className={classes.ppgGrid}
          style={{
            backgroundColor: `${data.ppgbgColor}`,
          }}
        >
          <Typography
            className={classes.ppg}
            style={{ color: `${data.ppgColor}` }}
          >
            {points[data.ppg]}
          </Typography>
        </Grid>
      </Grid>
    ));
  }, [data, points, form]);

  const dataMemo = useMemo(() => renderData(), [data, points, form]);
  return (
    <Grid
      item
      container
      className={classes.root}
      alignItems="center"
      direction="column"
      justifyContent="space-around"
    >
      <Grid
        item
        container
        className={classes.header}
        justifyContent="space-around"
        alignItems="center"
      >
        {headerMemo}
      </Grid>

      {dataMemo}
    </Grid>
  );
};
