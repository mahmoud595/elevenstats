import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { Btn, LinearDeterminate } from "components";
import { FiltersArrow } from "public";
import { InfoIconWrapper } from "../../../../InfoIconWrapper/InfoIconWrapper";
const SingleRowDataContainer = styled(Grid)(() => ({
  flexWrap: "nowrap",
  width: "fit-content",
  paddingLeft: "16px",
  position: "relative",
  "& .rowHeader": {
    display: "flex",
    alignItems: "center",

    width: "220px",
    height: "45px",
    "& .iconInfoContainer": {
      marginRight: "16px",
      display: "flex",
    },
  },
  "& .rowHeaderText": {
    fontSize: "12px",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  "& .arrowDownContainer": {
    display: "flex",
    marginLeft: "12px",
  },
  "& .rowData": {
    display: "flex",
    alignItems: "center",
    width: "220px",
    justifyContent: "center",
    height: "45px",
  },
  "& .numStatContainer": {
    background: "#EFF1F5",
    borderRadius: "5px",
    padding: "1px 4px",
    marginRight: "24px",
  },
  "& .linearProgressContainer": {
    width: "81px",
    marginRight: "5px",
  },
  "& .columnContainer": {
    display: "flex",
    flexDirection: "column",
  },
  "& .sticky": {
    position: "sticky",
    left: 0,
    background: "#FFF",
    zIndex: 2,
  },
  "& .extraHeaderTextcontainer": {
    background: "rgba(36, 107, 253, 0.1)",
    marginLeft: "20px",
    color: "#246BFD",
    width: "104px",
    display: "flex",
    padding: "4px 0px 4px 24px",
    clipPath: "polygon(82% 0%, 100% 50%, 82% 100%, 0% 100%, 0 49%, 0% 0%)",
  },
}));

export const SingleRowData = ({ color = "#1BD47B", leaguesCount = 5 }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <SingleRowDataContainer container>
      <Grid className="columnContainer sticky">
        {new Array(expanded ? 3 : 1).fill("-").map((val, i) => {
          return i === 0 ? (
            <Grid item className="rowHeader">
              <Grid item className="iconInfoContainer">
                <InfoIconWrapper />
              </Grid>
              <Grid item>
                <Typography className="rowHeaderText">goals</Typography>
              </Grid>
              <Grid
                item
                className="arrowDownContainer"
                sx={{
                  transform: `${expanded ? "rotate(180deg)" : "rotate(0deg)"}`,
                }}
              >
                <Btn onClick={() => setExpanded(!expanded)} borderRadius="50%">
                  <FiltersArrow />
                </Btn>
              </Grid>
            </Grid>
          ) : (
            <Grid
              item
              className="rowHeader"
              sx={{
                backgroundColor: "rgba(36, 107, 253, 0.03)",
                borderBottom: i === 1 ? "1px solid #EAEDF2" : "none",
              }}
            >
              <Grid item className="extraHeaderTextcontainer">
                <Typography className="rowHeaderText">
                  {i === 1 ? "Percent" : "Total"}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Grid>

      {new Array(leaguesCount).fill().map((val, index) => (
        <Grid className="columnContainer" key={index}>
          {new Array(expanded ? 3 : 1).fill().map((val, i) => (
            <Grid
              item
              className="rowData"
              key={i}
              sx={{
                backgroundColor:
                  expanded & (i > 0)
                    ? "rgba(36, 107, 253, 0.03)"
                    : "transparent",

                borderBottom: i === 1 ? "1px solid #EAEDF2" : "none",
              }}
            >
              <Grid item className="numStatContainer">
                <Typography className="rowHeaderText">0.09</Typography>
              </Grid>
              <Grid item className="linearProgressContainer">
                <LinearDeterminate
                  height="14px"
                  colorPrimary={color}
                  colorSecondary="#EFF1F5"
                />
              </Grid>
              <Grid item>
                <Typography className="rowHeaderText" sx={{ color }}>
                  50%
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      ))}
    </SingleRowDataContainer>
  );
};
