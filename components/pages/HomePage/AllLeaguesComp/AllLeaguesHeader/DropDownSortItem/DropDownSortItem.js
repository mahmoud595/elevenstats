import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener } from "@mui/material";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { SortUp, SortDown, DropDownArrow } from "public/";
import { Btn } from "components";
import { sortData, changeSort } from "store/actions/homeActions";

const DropDownSortItemContainer = styled(Grid)(() => ({
  position: "relative",
  // "& .title": {
  //   // fontWeight: 600,
  //   // lineHeight: 1,
  //   // color: "#fff",
  //   // fontSize: "2em",
  //   // whiteSpace: "nowrap",
  //   "@media (max-width:1280px)": {
  //     fontSize: "1.7em",
  //   },
  //   "@media (max-width:960px)": {
  //     fontSize: "1.4em",
  //   },
  //   "@media (max-width: 640px)": {
  //     fontSize: 8,
  //   },
  // },

  "& .arrowGrid": {
    width: "100%",
    flex: 1,
    cursor: "pointer",
    "&:hover": {
      // background: "#A1B5C9",
    },
  },

  "& .item": {
    fontSize: "1.2rem",
    fontWeight: 400,
    color: "#022A54",
  },
  "& .itemContainer": {
    margin: "0 0 3em 0",
    "&:hover": {
      background: "#F6F7FA",
    },
  },
  "& .dataContainer": {
    position: "absolute",
    top: "150%",
    left: 0,
    width: "150%",
    background: "#fff",
    width: 140,
    padding: "3em 0",
    borderRadius: "12px",
    boxShadow: "1px 1px 8px rgba(134, 134, 134, 0.1)",

    "& > div:last-child": {
      margin: "0",
    },
  },

  "& .sortWrapper": {
    borderRadius: "25px",
    marginLeft: "1.5em",
    // background: "#fff",
    width: 25,
    height: 24,
    border: "0.5px dashed #A1B5C9",

    zIndex: 1400,
  },

  "& .titleContainer": {
    border: "0.5px dashed #A1B5C9",
    borderRadius: 25,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  "& .dropDown": {
    "& svg": {
      width: "10px",
      height: "6px",
      stroke: "#fff",
    },
    marginLeft: "1em",
  },
}));

// const useStyles = makeStyles((theme) => ({
//   title: {
//     fontWeight: 600,
//     lineHeight: 1,
//     color: "#fff",
//     fontSize: "2em",
//     whiteSpace: "nowrap",
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

//   arrowGrid: {
//     width: "100%",
//     flex: 1,
//     cursor: "pointer",
//     "&:hover": {
//       // background: "#A1B5C9",
//     },
//   },

//   item: {
//     fontSize: "1.2rem",
//     fontWeight: 400,
//     color: "#022A54",
//   },
//   itemContainer: {
//     margin: "0 0 3em 0",
//     "&:hover": {
//       background: "#F6F7FA",
//     },
//   },
//   dataContainer: {
//     position: "absolute",
//     top: "150%",
//     left: 0,
//     width: "150%",
//     background: "#fff",
//     width: 140,
//     padding: "3em 0",
//     borderRadius: "12px",
//     boxShadow: "1px 1px 8px rgba(134, 134, 134, 0.1)",

//     "& > div:last-child": {
//       margin: "0",
//     },
//   },

//   sortWrapper: {
//     borderRadius: "25px",
//     marginLeft: "1.5em",
//     // background: "#fff",
//     width: 25,
//     height: 24,
//     border: "0.5px dashed #A1B5C9",

//     zIndex: 1400,
//   },
//   btnContainer: {
//     position: "relative",
//   },

//   titleContainer: {
//     border: "0.5px dashed #A1B5C9",
//     borderRadius: 25,
//     height: 24,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 5,
//   },
//   dropDown: {
//     "& svg": {
//       width: "10px",
//       height: "6px",
//       stroke: "#fff",
//     },
//     marginLeft: "1em",
//   },
// }));

const tabs1 = ["xG (H)", "over 0.5", "over 1.5", "over 2.5", "over 3.5"];
const tabs2 = ["xG (A)", "BTTS", "AVG", "cards AVG", "corners AVG"];

export const DropDownSortItem = ({ index, keySelected, setKey }) => {
  console.log(index);
  // const classes = useStyles();
  const { firstColumnSortValue, secondColumnSortValue, sort } = useSelector(
    ({ home }) => {
      const { firstColumnSortValue, secondColumnSortValue, sort } = home;

      return { firstColumnSortValue, secondColumnSortValue, sort };
    },
    shallowEqual
  );

  const [clicked, setClicked] = useState(null);
  const dispatch = useDispatch();

  const changeSortBy = (name, i) => {
    setClicked(null);
    dispatch(changeSort(name, i));
  };

  const sortHandler = (typeOfSort, title, i) => {
    dispatch(sortData(typeOfSort, title));
    setKey(i);
  };
  const tabs = index === 1 ? tabs1 : index === 2 ? tabs2 : null;
  return (
    <>
      <DropDownSortItemContainer
        item
        container
        alignItems="center"
        justifyContent="flex-start"
        // className={classes.btnContainer}
        wrap="nowrap"
      >
        <Grid item className="titleContainer">
          <Btn onClick={(e) => setClicked(true)}>
            <Typography className="title">
              {index === 1
                ? firstColumnSortValue
                : index === 2
                ? secondColumnSortValue
                : "Odds"}
            </Typography>
          </Btn>
          {index !== 0 ? (
            <Grid item className="dropDown">
              <DropDownArrow />
            </Grid>
          ) : (
            <></>
          )}
        </Grid>
        {/* 
        <Grid
          item
          container
          // direction="column"
          alignItems="center"
          className="sortWrapper"
          wrap="nowrap"
          sx={{
            background: `${
              sort.order === "asc" && keySelected === index
                ? "#146667"
                : sort.order === "desc" && keySelected === index
                ? "#6F4262"
                : "transparent"
            }`,
          }}
        >
          {sort.order && keySelected === index ? (
            <>
              {sort.order === "asc" ? (
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  container
                  className="arrowGrid"
                  sx={{
                    borderRadius: "0px 0px 25px 25px",
                    // background:
                    //   sort.order === "desc" && i === 1
                    //     ? sort.by === firstColumnSortValue
                    //       ? "#A1B5C9"
                    //       : "transparent"
                    //     : sort.order === "desc" && sort.by === secondColumnSortValue
                    //     ? "#A1B5C9"
                    //     : "transparent",
                  }}
                  onClick={() =>
                    sortHandler(
                      "desc",
                      index === 1
                        ? firstColumnSortValue
                        : index === 2
                        ? secondColumnSortValue
                        : null,
                      index
                    )
                  }
                >
                  <Btn
                    padding="0px"
                    width="100%"
                    height="100%"
                    borderRadius="0px 0px 25px 25px"
                  >
                    <SortUp />
                  </Btn>
                </Grid>
              ) : (
                <Grid
                  item
                  container
                  justifyContent="center"
                  alignItems="center"
                  className="arrowGrid"
                  sx={{
                    borderRadius: "0px 0px 25px 25px",
                    // background:
                    //   sort.order === "asc" && i === 1
                    //     ? sort.by === firstColumnSortValue
                    //       ? "#A1B5C9"
                    //       : "transparent"
                    //     : sort.order === "asc" && sort.by === secondColumnSortValue
                    //     ? "#A1B5C9"
                    //     : "transparent",
                  }}
                >
                  <Btn
                    padding="0px"
                    width="100%"
                    height="100%"
                    borderRadius="0px 0px 25px 25px"
                    onClick={() =>
                      sortHandler(
                        "desc",
                        index === 1
                          ? firstColumnSortValue
                          : index === 2
                          ? secondColumnSortValue
                          : null,
                        index
                      )
                    }
                  >
                    <SortDown />
                  </Btn>
                </Grid>
              )}
            </>
          ) : (
            <>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                className="arrowGrid"
                sx={{
                  borderRadius: "0px 0px 25px 25px",
                  // background:
                  //   sort.order === "asc" && i === 1
                  //     ? sort.by === firstColumnSortValue
                  //       ? "#A1B5C9"
                  //       : "transparent"
                  //     : sort.order === "asc" && sort.by === secondColumnSortValue
                  //     ? "#A1B5C9"
                  //     : "transparent",
                }}
              >
                <Btn
                  padding="0px"
                  width="100%"
                  height="100%"
                  borderRadius="0px 0px 25px 25px"
                  onClick={() =>
                    sortHandler(
                      "desc",
                      index === 1
                        ? firstColumnSortValue
                        : index === 2
                        ? secondColumnSortValue
                        : null,
                      index
                    )
                  }
                >
                  <SortUp />
                </Btn>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                alignItems="center"
                container
                className="arrowGrid"
                sx={{
                  borderRadius: "0px 0px 25px 25px",
                  // background:
                  //   sort.order === "desc" && i === 1
                  //     ? sort.by === firstColumnSortValue
                  //       ? "#A1B5C9"
                  //       : "transparent"
                  //     : sort.order === "desc" && sort.by === secondColumnSortValue
                  //     ? "#A1B5C9"
                  //     : "transparent",
                }}
                onClick={() =>
                  sortHandler(
                    "desc",
                    index === 1
                      ? firstColumnSortValue
                      : index === 2
                      ? secondColumnSortValue
                      : null,
                    index
                  )
                }
              >
                <Btn
                  padding="0px"
                  width="100%"
                  height="100%"
                  borderRadius="0px 0px 25px 25px"
                >
                  <SortDown />
                </Btn>
              </Grid>
            </>
          )}
        </Grid> */}

        {clicked ? (
          <ClickAwayListener onClickAway={() => setClicked(false)}>
            {tabs ? (
              <Grid container className="dataContainer" direction="column">
                {tabs?.map((name, i) => (
                  <Grid item key={i} className="itemContainer">
                    <Btn
                      fullWidth={true}
                      onClick={() => changeSortBy(name, index)}
                    >
                      <Typography className="item">{name}</Typography>
                    </Btn>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <></>
            )}
          </ClickAwayListener>
        ) : null}
      </DropDownSortItemContainer>
    </>
  );
};
