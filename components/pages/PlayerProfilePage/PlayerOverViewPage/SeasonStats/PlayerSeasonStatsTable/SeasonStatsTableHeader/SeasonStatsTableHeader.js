import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const SeasonStatsTableHeaderContainer = styled(Grid)(() => ({
  display: "flex",
  width: "fit-content",
  background: "#F6F7FA",
  padding: "10px 10px 10px 16px",
  borderRadius: "12px",
  marginBottom: "10px",
  "& .rowHeader": {
    width: "220px",
    paddingLeft: "32px",
    position: "sticky",
    left: 0,
    background: "#F6F7FA",
    zIndex: 2,
  },
  "& .dataText": {
    fontSize: 12,
    fontWeight: 600,
  },
  "& .rowDataCell": {
    width: "220px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  "& .statsPrenctileContainer": {
    display: "flex",
    alignSelf: "stretch",
    padding: "8px 0px 0px 32px",
    marginTop: "8px",
    color: "rgba(2, 42, 84, 0.6)",
    borderTop: "0.5px solid rgba(161, 181, 201, 0.4)",
    "& > div:nth-child(2)": {
      marginLeft: "28px",
    },
  },
}));

export const SeasonStatsTableHeader = ({ leaguesCount }) => {
  return (
    <SeasonStatsTableHeaderContainer>
      <Grid item className="rowHeader">
        <Typography className="dataText">Stats</Typography>
      </Grid>

      {new Array(leaguesCount).fill().map((val, index) => (
        <Grid item className="rowDataCell" key={index}>
          <Grid item>
            <Typography className="dataText">Premier League</Typography>
          </Grid>
          <Grid item className="statsPrenctileContainer">
            <Grid item>
              <Typography className="dataText">Stat</Typography>
            </Grid>
            <Grid item>
              <Typography className="dataText">Percentile</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </SeasonStatsTableHeaderContainer>
  );
};
