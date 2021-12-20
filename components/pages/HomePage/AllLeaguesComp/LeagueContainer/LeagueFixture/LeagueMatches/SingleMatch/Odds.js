import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const OddsComp = styled(Grid)(({ theme }) => ({
  "& .oddsTxt": {
    fontSize: "2em",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
  },

  maxWidth: "10%",
  flexBasis: "10%",
  "@media (max-width:600px)": {
    display: "none",
  },
}));
export const Odds = ({ odds }) => {
  return (
    <OddsComp item container xs={1} justifyContent="center" alignItems="center">
      {odds && !Array.isArray(odds) ? (
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography className="oddsTxt">
              {odds?.wayResult["1"]?.value || "-"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="oddsTxt">
              {odds?.wayResult["X"]?.value || "-"}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="oddsTxt">
              {odds?.wayResult["2"]?.value || "-"}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid item container justifyContent="space-between" alignItems="center">
          {new Array(3).fill("-").map((val, i) => (
            <Grid item key={i}>
              <Typography className="oddsTxt">{val}</Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </OddsComp>
  );
};
