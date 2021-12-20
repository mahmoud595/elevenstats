import { Grid } from "@mui/material";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";
import { SingleAttributeItem } from "../AttributesResult/AttributesColumn/SingleAttributeItem/SingleAttributeItem";

const data = ["Caps", "Goals", "National Team", "Goals per 90"];

export const International = () => {
  return (
    <ResultWrapper title="International">
      <Grid container marginTop="23px">
        {data.map((item, i) => (
          <Grid key={i} item container xs={8} md={5} direction="column">
            <SingleAttributeItem attribute={item} />
          </Grid>
        ))}
      </Grid>
    </ResultWrapper>
  );
};
