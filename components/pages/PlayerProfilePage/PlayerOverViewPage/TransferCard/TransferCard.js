import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";

import { CompWrapper } from "components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper";
import { CheckedAttributes, FiltersArrow } from "public";
import { InfoIconWrapper } from "../InfoIconWrapper/InfoIconWrapper";
const Transfer = styled(Grid)(() => ({
  "& .transferInfoIconGrid": {
    marginLeft: "10px",
    padding: "2px 4px",
    borderRadius: "50%",
    backgroundColor: "#fff",
  },

  marginTop: "21px",

  "& .transferAdjustText": {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 600,
    color: "#A1B5C9",
    marginLeft: "11px",
  },
  "& .transferBtnGrid": {
    padding: "25px 28px 0 28px",
    "& >button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  "& .transferLeagueText": {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 600,
    color: "#204367",
  },
}));

export const TransferCard = () => {
  const head = (
    <Grid
      item
      sx={{
        backgroundColor: "#355576",
        borderRadius: "12px 0px 12px 0px",
        padding: "7px 15px",
        textTransform: "uppercase",
        marginBottom: "1.5em",
        display: "flex",
      }}
      alignItems="center"
    >
      <Grid item sx={{ marginRight: "5px" }}>
        <Typography
          variant="h2"
          sx={{
            lineHeight: "11px",
            letterSpacing: "1.5px",
            fontSize: "12px",
            "@media (max-width: 1280px)": {
              fontSize: "1rem",
            },
            "@media (max-width: 960px)": {
              fontSize: "0.7rem",
            },
          }}
        >
          TRANSFER
        </Typography>
      </Grid>
      <InfoIconWrapper backgroundColor="#fff" />
    </Grid>
  );

  return (
    <CompWrapper head={head} backgroundColor="#022A54" gridArea="transfer">
      <Transfer container item direction="column">
        <Grid
          item
          container
          className="adjustContainer"
          justifyContent="center"
          alignItems="center"
        >
          <CheckedAttributes />
          <Typography className="transferAdjustText">
            Adjust attributes to:
          </Typography>
        </Grid>
        <Grid item className="transferBtnGrid">
          <Btn
            backgroundColor="#fff"
            borderRadius="8px"
            fullWidth
            padding="9px 12px 10px 10px"
          >
            <Typography
              className="transferLeagueText"
              sx={{ color: "#204367" }}
            >
              English Premier League
            </Typography>
            <FiltersArrow />
          </Btn>
        </Grid>
      </Transfer>
    </CompWrapper>
  );
};
