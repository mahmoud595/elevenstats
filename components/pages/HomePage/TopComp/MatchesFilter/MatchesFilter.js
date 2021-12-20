import React, { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Btn from "components/Layout/Btn/Btn";
import { getMatchesType } from "store/actions/homeActions";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

const FiltersContainer = styled(Grid)(() => ({
  marginTop: "15px",
  paddingBottom: "2px",
  // maxWidth: "37%",
  // flexBasis: "37%",
  "@media (max-width: 640px)": {
    maxWidth: "80%",
    flexBasis: "80%",
  },
  "& .text": {
    fontSize: "2em",
    color: "#022A54",
    lineHeight: "27px",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
    "@media (max-width: 640px)": {
      fontSize: "9px",
      lineHeight: "7px",
    },
  },
  "& .hr": {
    border: "1px solid #A1B5C9",
    // width: "6.6em",
    width: "100%",
    borderRadius: "5px 5px 0px 0px",
    position: "absolute",
    bottom: "-6px",
    height: "3px",
    backgroundColor: "#A1B5C9",
    "@media (max-width: 640px)": {
      borderRadius: "3px 3px 0px 0px",
      height: "2px",
      width: "90%",
      left: 5,
    },
  },

  "& .filterGrid": {
    position: "relative",
  },
  "& .liveNotification": {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#F4C2CA",
    // padding: '0.5em',
    marginRight: "0.8em",
    animation: "$mymove 3s infinite",
  },
  "@keyframes mymove": {
    "0%": { backgroundColor: "white" },
    "50%": { backgroundColor: "#F4C2CA" },
    "100%": { backgroundColor: "white" },
  },
  "& .liveNotificationCenter": {
    borderRadius: "50%",
    width: "6px",
    height: "6px",
    backgroundColor: "#FB5266",
  },
}));

const useStyles = makeStyles((theme) => ({
  // filtersContainer: {
  //   marginTop: "15px",
  //   paddingBottom: "2px",
  //   // maxWidth: "37%",
  //   // flexBasis: "37%",
  //   "@media (max-width: 640px)": {
  //     maxWidth: "80%",
  //     flexBasis: "80%",
  //   },
  // },
  // text: {
  //   fontSize: "2em",
  //   color: "#022A54",
  //   lineHeight: "27px",
  //   "@media (max-width:1280px)": {
  //     fontSize: "1.7em",
  //     // lineHeight: "1px",
  //   },
  //   "@media (max-width:960px)": {
  //     fontSize: "1.4em",
  //     // lineHeight: "1px",
  //   },
  //   "@media (max-width: 640px)": {
  //     fontSize: "9px",
  //     lineHeight: "7px",
  //   },
  // },
  // hr: {
  //   border: "1px solid #A1B5C9",
  //   // width: "6.6em",
  //   width: "100%",
  //   borderRadius: "5px 5px 0px 0px",
  //   position: "absolute",
  //   bottom: "-6px",
  //   height: "3px",
  //   backgroundColor: "#A1B5C9",
  //   "@media (max-width: 640px)": {
  //     borderRadius: "3px 3px 0px 0px",
  //     height: "2px",
  //     width: "90%",
  //     left: 5,
  //   },
  // },
  // filterGrid: {
  //   position: "relative",
  // },
  // liveNotification: {
  //   width: "12px",
  //   height: "12px",
  //   borderRadius: "50%",
  //   backgroundColor: "#F4C2CA",
  //   // padding: '0.5em',
  //   marginRight: "0.8em",
  //   animation: "$mymove 3s infinite",
  // },
  // "@keyframes mymove": {
  //   "0%": { backgroundColor: "white" },
  //   "50%": { backgroundColor: "#F4C2CA" },
  //   "100%": { backgroundColor: "white" },
  // },
  // liveNotificationCenter: {
  //   borderRadius: "50%",
  //   width: "6px",
  //   height: "6px",
  //   backgroundColor: "#FB5266",
  // },
}));
const filters = ["Popular", "International", "All Leagues", "Live"];
export const MatchesFilter = () => {
  const router = useRouter();

  const type = useSelector(({ home }) => home.type);
  const [selected, setSelected] = useState(
    router.pathname === "/live" ? "Live" : type
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  const clickHandler = (val) => {
    if (val === "Live") {
      router.push(`/live`);
    } else {
      if (router.pathname === "/live") {
        router.push(`/`);
      }
      dispatch(getMatchesType(val));
    }
    setSelected(val);
  };

  return (
    <FiltersContainer item sm={5}>
      <Grid
        item
        container
        justifyContent="space-between"
        xs={12}
        md={5}
        alignItems="center"
      >
        {filters.map((val, i) => (
          <Grid item key={i} className="filterGrid">
            <Btn onClick={() => clickHandler(val)}>
              {val === "Live" && (
                <Grid
                  item
                  className="liveNotification"
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item className="liveNotificationCenter"></Grid>
                </Grid>
              )}
              <Typography
                className="text"
                variant="body2"
                style={{
                  fontWeight: `${selected === val ? "600" : "400"}`,
                }}
              >
                {val}
              </Typography>
            </Btn>
            {selected === val ? <hr className="hr" /> : null}
          </Grid>
        ))}
      </Grid>
    </FiltersContainer>
  );
};
