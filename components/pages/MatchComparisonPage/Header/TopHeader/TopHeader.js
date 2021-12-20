import { Grid } from "@mui/material";

import { NavBar, BreadCrumb } from "../../../..";

const TopHeader = () => {
  return (
    <Grid item container direction="column">
      <NavBar />

      {/* <BreadCrumb /> */}
    </Grid>
  );
};

export default TopHeader;
