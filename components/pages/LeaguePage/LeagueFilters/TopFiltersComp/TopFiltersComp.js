import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { LeftTabsComp } from "./LeftTabsComp/LeftTabsComp";
import { RightSearchComp } from "./RightSearchComp/RightSearchComp";

const useStyles = makeStyles(({ palette }) => ({}));

export const TopFiltersComp = ({ setSelectedLeague, selectedLeague }) => {
  return (
    <Grid item container justifyContent="space-between" wrap="nowrap">
      <LeftTabsComp
        setSelectedLeague={setSelectedLeague}
        selectedLeague={selectedLeague}
      />
      <RightSearchComp />
    </Grid>
  );
};
