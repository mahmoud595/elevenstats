import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { SingleLeague } from "./SingleLeague/SingleLeague";

const useStyles = makeStyles(({ palette }) => ({}));

const data1 = [
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "champions league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "Premier league",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
];
export const BottomFiltersComp = ({ data = data1, onClick, selectedItem }) => {
  return (
    <Grid container>
      {data.map((item, i) => (
        <SingleLeague
          index={i}
          item={item}
          onClick={onClick}
          selectedItem={selectedItem}
        />
      ))}
    </Grid>
  );
};
