import { Grid, Typography, InputBase } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import SearchIcon from "@mui/icons-material/Search";
import { Search } from "components";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.8em",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#022A54",
  },
  searchGrid: {
    borderRadius: "35px",
    backgroundColor: "#F6F7FA",
    padding: "13px 0 13px 12px",
    width: "36.3em",
  },
  inputGrid: {
    marginLeft: "10px",
  },
  inputRoot: {
    fontSize: "2.1em",
    lineHeight: "17px",
    color: "#022A54",
  },
  input: {
    padding: 0,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    "&>svg": {
      fill: "#A1B5C9",
    },
  },
}));

export const AdvancedSearchHeader = () => {
  const classes = useStyles();
  return (
    <Grid item container justifyContent="flex-end">
      <Search
        title="Find similar Player to ..."
        width="20%"
        backgroundColor="#F6F7FA"
        borderRadius="35px"
        padding="9px 0 8px 2em"
        color="#022A54"
        fontSize="2em"
      />
    </Grid>
  );
};
