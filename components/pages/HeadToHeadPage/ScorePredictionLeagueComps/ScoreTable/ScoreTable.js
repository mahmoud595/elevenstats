import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { CompWrapper } from "../CompWrapper/CompWrapper";
import { ResultsComp } from "./ResultsComp/ResultsComp";
import Btn from "components/Layout/Btn/Btn";

const Score = styled(Grid)(() => ({
  position: "absolute",

  "& .container": {
    flex: 1,
    overflowX: "auto",
    // '& > div': {
    //   // height: "50% !important",
    // },
  },

  "& .tabTitle": {
    lineHeight: "8px",
    fontSize: "10px",
    fontWeight: 600,
    textTransform: "capitalize",

    // "@media (max-width: 1280px)": {
    //   fontSize: "1rem",
    // },
    // "@media (max-width: 960px)": {
    //   fontSize: "0.7rem",
    // },
  },
  "& .tabs": {
    marginLeft: "2px",
    marginTop: "-60px",
  },
}));

export const ScoreTable = () => {
  const [selectedTab, setSelectedTab] = useState("Goals");
  const clickHandler = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <CompWrapper
      title="score table"
      titleBackgroundColor="#1BD47B"
      height="fit-content"
      marginBottom="5em"
      outside
    >
      <Score item container alignItems="center" justifyContent="flex-end">
        {["Misc", "Cards&Corners", "Passes", "Shots", "Goals"].map((tab, i) => (
          <Grid item key={i} className="tabs">
            <Btn
              padding="10px 12px"
              lowSizePadding="5px 10px"
              backgroundColor={
                tab === selectedTab
                  ? " rgba(36, 107, 253, 0.08)"
                  : "transparent"
              }
              onClick={() => clickHandler(tab)}
              borderRadius="10px"
            >
              <Typography
                sx={{
                  color:
                    tab === selectedTab ? "#246BFD" : "rgba(103, 127, 152, 1)",
                }}
                className="tabTitle"
              >
                {tab}
              </Typography>
            </Btn>
          </Grid>
        ))}
      </Score>
      <Grid
        container
        direction="column"
        className="container"
        sx={{ overflow: "auto" }}
      >
        <ResultsComp selectedTab={selectedTab} />
      </Grid>
    </CompWrapper>
  );
};
