import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";
import { ScoutingFilterButton } from "../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";
import { SelectionItem } from "../../SelectionItem/SelectionItem";

export const GeneralInfo = () => {
  return (
    <ResultWrapper title="general info">
      <Grid container>
        <Grid xs={12} md={6} container direction="column">
          <Typography
            variant="h2"
            fontWeight="500"
            marginTop="22px"
            fontSize="11px"
            color="#677F98"
            marginBottom="10px"
          >
            # of played days in a country
          </Typography>
          <ScoutingFilterButton
            text="choose"
            width="165px"
          ></ScoutingFilterButton>
        </Grid>
        <Grid xs={12} md={6} container direction="column">
          <SelectionItem item="EU National" noArrow />
          <SelectionItem item="Preferred Foot" noArrow />
        </Grid>
      </Grid>
    </ResultWrapper>
  );
};
