import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";
import React from "react";

const Container = styled(Grid)(({ theme }) => ({
  marginTop: "8px",
  flexDirection: "column",
  alignItems: "flex-end",
  display: "flex",
  "& .conditionGrid": {
    width: "23.3em",
  },
  "& .btnText": {
    fontSize: "2.3em",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#fff",
  },
}));
export const AddConditionOkContainer = () => {
  return (
    <Container item>
      <Grid item className="conditionGrid">
        <ScoutingFilterButton
          text="Add Condition"
          color="rgba(2, 42, 84, 0.6)"
        />
      </Grid>

      <Btn
        borderRadius="8px"
        backgroundColor="#022A54"
        padding="10px  5.1em 9px 5.1em"
        margin="24px 0 0 0"
      >
        <Typography variant="h4" className="btnText">
          Ok
        </Typography>
      </Btn>
    </Container>
  );
};
