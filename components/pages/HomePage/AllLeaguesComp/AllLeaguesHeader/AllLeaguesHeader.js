import React, { useState } from "react";
// import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography, Hidden, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";

import { DropDownSortItem } from "./DropDownSortItem/DropDownSortItem";

const AllLeaguesHeaderContainer = styled(Grid)(() => ({
  padding: "10px 0",
  background: "#022A54",
  borderRadius: "25px",
  position: "sticky",
  top: "0",
  zIndex: 1,
  "@media (max-width: 640px)": {
    padding: "4px 0",
  },
  "& .title": {
    fontWeight: 600,
    lineHeight: "22px",
    color: "#fff",
    fontSize: "2em",
    whiteSpace: "nowrap",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
    },
    "@media (max-width: 640px)": {
      fontSize: 8,
    },
  },

  "& .mobileHeader": {
    width: "100%",
  },
}));

// const useStyles = makeStyles((theme) => ({
// allLeaguesHeader: {
//   padding: '10px 0',
//   background: '#022A54',
//   borderRadius: '25px',
//   position: 'sticky',
//   top: '0',
//   zIndex: 1,
//   '@media (max-width: 640px)': {
//     padding: '4px 0',
//   },
// },
//   title: {
//     fontWeight: 600,
//     lineHeight: "22px",
//     color: "#fff",
//     fontSize: "2em",
//     whiteSpace: "normal",
//     "@media (max-width:1280px)": {
//       fontSize: "1.7em",
//     },
//     "@media (max-width:960px)": {
//       fontSize: "1.4em",
//     },
//     "@media (max-width: 640px)": {
//       fontSize: 8,
//     },
//   },
//   mobileHeader: {
//     width: "100%",
//   },
// }));

const tabs1 = ["BTTS"];
const tabs2 = ["AVG"];

const headerMobile = [
  {
    title: "Home",
    size: 6,
    direction: "center",
    maxWidth: "30%",
    flexBasis: "30%",
  },
  { title: "Form", size: 2, direction: "center", maxWidth: "48px" },

  { title: "Time", size: 2, direction: "flex-end", maxWidth: "48px" },
  { title: "Form", size: 2, direction: "flex-end", maxWidth: "48px" },

  {
    title: "Away",
    size: 5,
    direction: "center",
    maxWidth: "37%",
    flexBasis: "37%",
  },
];

const header = [
  {
    title: "Home",
    size: 6,
    direction: "flex-end",
    maxWidth: "24%",
    flexBasis: "24%",
  },
  { title: "Form", direction: "flex-start", maxWidth: "13.8em" },
  { title: "Form", direction: "center", maxWidth: "7.8em" },

  {
    title: "Away",
    size: 5,
    direction: "flex-start",
    maxWidth: "28%",
    flexBasis: "28%",
  },
  {
    title: "Odds",
    size: 1,
    direction: "center",
    maxWidth: "10%",
    flexBasis: "10%",
  },
  {
    title: "AVG",
    size: 1,
    direction: "center",
    maxWidth: "11.1%",
    flexBasis: "11.1%",
  },
  {
    title: "AVG",
    size: 1,
    direction: "center",
    maxWidth: "11.1%",
    flexBasis: "6%",
  },
];
export const AllLeaguesHeader = () => {
  // const classes = useStyles();
  const [keySelected, setKey] = useState();
  const sm = useMediaQuery("(max-width:640px)");
  return (
    <AllLeaguesHeaderContainer
      item
      container
      className="allLeaguesHeader"
      alignItems="center"
      wrap="nowrap"
      justifyContent="space-between"
    >
      {!sm ? (
        <Grid
          item
          container
          // xs={2}
          justifyContent="flex-start"
          sx={{
            paddingLeft: "3.3em",
            maxWidth: "12.6%",
            flexBasis: "12.6%",
          }}
        >
          <Typography className="title" variant="body2">
            Time
          </Typography>
        </Grid>
      ) : (
        <></>
      )}

      <Hidden smUp implementation="css" className="mobileHeader">
        <Grid item container justifyContent="space-between" wrap="nowrap">
          {headerMobile.map(
            ({ title, size, direction, maxWidth, flexBasis }, i) => (
              <Grid
                item
                container
                xs={size}
                key={i}
                alignItems="center"
                justifyContent={direction}
                sx={{
                  maxWidth: `${maxWidth ?? maxWidth}`,
                  flexBasis: `${flexBasis ?? flexBasis}`,
                }}
              >
                <Typography className="title" variant="body2">
                  {title}
                </Typography>
              </Grid>
            )
          )}
        </Grid>
      </Hidden>
      <Hidden smDown>
        <>
          <Grid
            item
            container
            xs={6}
            justifyContent="space-between"
            wrap="nowrap"
            // style={{ maxWidth: '39%', flexBasis: '39%' }}
          >
            {header
              .slice(0, 4)
              .map(({ title, size, direction, maxWidth, flexBasis }, i) => (
                <Grid
                  item
                  container
                  xs={size}
                  key={i}
                  alignItems="center"
                  justifyContent={direction}
                  sx={{
                    maxWidth: `${maxWidth ?? maxWidth}`,
                    flexBasis: `${flexBasis ?? flexBasis}`,
                  }}
                >
                  <Typography className="title" variant="body2">
                    {title}
                  </Typography>
                </Grid>
              ))}
          </Grid>
          {header
            .slice(4)
            .map(({ title, size, direction, maxWidth, flexBasis }, i) => (
              <Grid
                item
                container
                xs={size}
                key={i}
                alignItems="center"
                justifyContent="flex-start"
                sx={{
                  maxWidth: `${maxWidth ?? maxWidth}`,
                  flexBasis: `${flexBasis ?? flexBasis}`,
                }}
                wrap="nowrap"
              >
                <DropDownSortItem
                  index={i}
                  keySelected={keySelected}
                  setKey={setKey}
                />
              </Grid>
            ))}
        </>
      </Hidden>
      <Grid item></Grid>
    </AllLeaguesHeaderContainer>
  );
};
