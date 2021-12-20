import { Grid } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { Search, MainTable, Filter, SortBy } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "95vh",
    //  height: '00px',
    backgroundColor: theme.palette.primary.main,
    borderRadius: "15px",
    padding: "1em",
  },
  inputsRow: {
    //  height: '5vh',
  },
}));

const options = [
  {
    label: "KO TIME",
  },
  {
    label: "HOME FROM",
  },
  { label: "AWAY FROM" },
  { label: "BTTS %" },
  {
    label: "AVG GOALS",
  },
  {
    label: "AVG CARDS",
  },
];

const TableCard = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      className={classes.root}
      direction="column"
      justifyContent="space-between"
    >
      <Grid
        item
        container
        className={classes.inputsRow}
        justifyContent="space-between"
      >
        <Grid xs={2} item>
          <Search backgroundColor="#6B2262" color="#FFFFFF" title="search" />
        </Grid>

        <Filter />
        <Grid xs={3} item></Grid>
        <Grid
          xs={3}
          md={3}
          item
          container
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          spacing={1}
        >
          <SortBy
            search={true}
            backgroundColor="#FFF"
            textColor="#6B7281"
            name="KO TIME"
            options={options}
          />
        </Grid>
      </Grid>
      {/* <MainTable /> */}
    </Grid>
  );
};

export default TableCard;
