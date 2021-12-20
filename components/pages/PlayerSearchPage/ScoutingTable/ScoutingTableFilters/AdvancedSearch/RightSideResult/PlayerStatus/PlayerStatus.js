import { Grid } from "@mui/material";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";
import { SelectionItem } from "../../SelectionItem/SelectionItem";

const data = ["Important Player", "Back Up", "Rotational Player", "Fringe"];

export const PlayerStatus = () => {
  return (
    <ResultWrapper title="player status">
      <Grid container marginTop="20px">
        {data.map((item, i) => (
          <Grid key={i} item container xs={7} md={5} direction="column">
            <SelectionItem item={item} noArrow />
          </Grid>
        ))}
      </Grid>
    </ResultWrapper>
  );
};
