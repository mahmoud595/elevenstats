import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { Wrapper } from "../../../Layout/Wrapper/Wrapper";
// import { FixturesTable } from './FixturesTable/FixturesTable';
import { FixturesHeader } from "./FixturesHeader/FixturesHeader";

const useStyles = makeStyles(({ palette }) => ({}));
export const Fixtures = () => {
  const classes = useStyles();

  return (
    <Grid container style={{ flex: 1, margin: "2em 0 0 0" }}>
      <Wrapper
        title="Fixtures"
        headerColor="#8D367D"
        textColor="#FFFFFF"
        backgroundColor="#43093C"
        id="Fixtures"
      >
        <Grid
          item
          container
          direction="column"
          style={{ flex: 1, padding: "1em" }}
        >
          <FixturesHeader />
          {/* <FixturesTable /> */}
        </Grid>
      </Wrapper>
    </Grid>
  );
};
