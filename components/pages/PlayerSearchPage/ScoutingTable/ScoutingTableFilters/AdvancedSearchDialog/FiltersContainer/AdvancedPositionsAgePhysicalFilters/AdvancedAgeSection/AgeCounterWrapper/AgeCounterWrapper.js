import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";
import { Btn } from "components";
import { Add, Subtract } from "public";
import { AdvancedInput } from "../../../../AdvancedInput/AdvancedInput";
const AgeCounterContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "41.4%",
  flexBasis: "41.4%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .ageDropDown": {
    maxWidth: "44.8%",
    flexBasis: "44.8%",
  },
  "& .btnGrid": {
    // marginLeft: "1.3em",
    "@media (max-width:960px)": {
      //   marginLeft: "0.8em",
    },
  },
  "& .icon": {
    "@media (max-width:960px)": {
      width: "18px",
      height: "18px",
    },
  },
}));
export const AgeCounterWrapper = memo(({ age, setAge }) => {
  const handleClick = (i) => {
    i === 0 ? setAge(++age) : setAge((age &&= --age));
  };
  return (
    <AgeCounterContainer>
      <Grid item className="ageDropDown">
        <AdvancedInput value={age} setValue={setAge} />
      </Grid>
      {["add", "subtract"].map((type, i) => (
        <Grid item key={i} className="btnGrid">
          <Btn
            padding="4px"
            backgroundColor="#EAEDF2"
            borderRadius="8px"
            onClick={() => handleClick(i)}
            lowSizePadding="0px"
          >
            {i === 0 ? <Add className="icon" /> : <Subtract className="icon" />}
          </Btn>
        </Grid>
      ))}
    </AgeCounterContainer>
  );
});
