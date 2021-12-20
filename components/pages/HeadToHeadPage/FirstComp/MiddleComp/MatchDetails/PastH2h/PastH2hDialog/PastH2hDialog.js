import { Fragment } from "react";
import { Grid, Typography, Dialog } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import { useSelector, shallowEqual } from "react-redux";

import Btn from "components/Layout/Btn/Btn";
import { X } from "public/";
import { Row } from "../Row/Row";
const useStyles = makeStyles(({ breakpoints, palette }) => ({
  title: {
    fontSize: "1.8em",
    fontWeight: 700,
    lineHeight: "16px",
    "@media (max-width: 960px)": {
      fontSize: "3em",
    },
    "@media (max-width: 600px)": {
      fontSize: "8px",
    },
  },

  container: {
    background: "#FFF",

    width: "434px",
    height: "400px",

    "@media (min-width: 1660px)": {
      width: "600px",
      height: "552px",
    },
    "@media (max-width: 600px)": {
      width: "80vw",
      height: "80vh",
    },
  },
  paperWidthSm: {
    // maxWidth: 700,
    "@media (max-width: 960px)": {
      width: "434px ",
      height: "400px ",
    },
    "@media (max-width: 600px)": {
      width: "80vw !important",
      height: "50vh !important",
    },
    borderRadius: 16,
  },
  dialogContainer: {
    background: "rgba(2, 42, 84, .15)",
  },
  titleContainer: {
    background: "#F6F7FA",
    borderRadius: "0px 0px 20px 20px",
    padding: "12px 4.6em ",
    "@media (max-width: 600px)": {
      padding: "2px 16px 7px 15px",
      borderRadius: "0px 0px 4px 5px",
    },
  },
  RowsContainer: {
    marginTop: 20,
    overflowY: "auto",

    padding: " 0 6.6em",
    "@media (max-width: 640px)": {
      padding: "0 10px",
    },
  },
  header: {
    top: "0",
    position: "sticky",
    background: "#fff",
    zIndex: 2,
  },

  closeGrid: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: "12px 0px 5px",
    padding: "5px 8px 5px 6px",
    backgroundColor: " #EFF1F5",
    transform: "matrix(-1, 0, 0, 1, 0, 0)",
  },
}));

export const PastH2hDialog = ({ toggleDialogState }) => {
  const classes = useStyles();
  let { openPastH2hDialog, fixtures } = useSelector(({ h2h }) => {
    let {
      openPastH2hDialog,
      headToheadStats: { fixtures },
    } = h2h;
    return { openPastH2hDialog, fixtures };
  }, shallowEqual);

  return (
    <Dialog
      open={openPastH2hDialog}
      scroll="body"
      onClose={toggleDialogState}
      classes={{
        container: classes.dialogContainer,
        paperWidthSm: classes.paperWidthSm,
      }}
      aria-labelledby="responsive-dialog-title"
    >
      <Grid item container className={classes.header} justifyContent="center">
        <Grid item className={classes.titleContainer}>
          <Typography color="primary" className={classes.title}>
            Past H2H Results & Fixtures
          </Typography>
        </Grid>

        <Grid item className={classes.closeGrid}>
          <Btn onClick={toggleDialogState}>
            <X />
          </Btn>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap="nowrap"
        className={classes.container}
      >
        <Grid
          item
          container
          direction="column"
          wrap="nowrap"
          className={classes.RowsContainer}
        >
          {openPastH2hDialog && fixtures?.length ? (
            fixtures.map((fixture, i) => (
              <Fragment key={i}>
                <Row k={i} fixture={fixture} />
              </Fragment>
            ))
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
};
