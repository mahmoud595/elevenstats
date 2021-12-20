import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SelectionColumn } from "./SelectionColumn/SelectionColumn";

const TopSelectionContainer = styled(Grid)(({ theme }) => ({
  borderBottom: "1px solid #EAEDF2",
  paddingRight: "20px",
  "@media (max-width:950px)": {
    paddingRight: "5px",
  },
  "& .title": {
    color: "#677F98",
    fontSize: "11px",
    fontWeight: 500,
    textTransform: "uppercase",
  },
  "& .container": {
    marginTop: "22px",
  },
}));

const leftSideSelectionItems = [
  "attributes",
  "general stats",
  "advanced stats",
  "pros & cons",
  "overall rating",
  "club",
  "general info",
];
const rightSideSelectionItems = [
  "international",
  "nationality",
  "playerStatus",
  "country",
  "Home-grown Status",
  "Contract",
];

export const TopSelection = memo(({ setSelected, selected }) => {
  return (
    <TopSelectionContainer container direction="column">
      <Grid item>
        <Typography variant="h2" className="title">
          Select Stats
        </Typography>
      </Grid>
      <Grid item container justifyContent="space-between" className="container">
        <Grid item xs={6} lg={5}>
          <SelectionColumn
            items={leftSideSelectionItems}
            setSelected={setSelected}
            selected={selected}
          />
        </Grid>
        <Grid item xs={6} lg={5}>
          <SelectionColumn
            items={rightSideSelectionItems}
            setSelected={setSelected}
            selected={selected}
          />
        </Grid>
      </Grid>
    </TopSelectionContainer>
  );
});
