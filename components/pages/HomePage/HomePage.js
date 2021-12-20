import { Grid } from "@mui/material";
import { memo } from "react";
// import makeStyles from "@mui/styles/makeStyles";
import { styled } from "@mui/material/styles";

// import KeyStatistics from "./KeyStatistics/KeyStatistics";
import { AllLeaguesComp } from "./AllLeaguesComp/AllLeaguesComp";
import { TopComp } from "./TopComp/TopComp";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // marginTop: '4em',
//     "& > div": {
//       marginBottom: "20px !important",
//     },
//     "@media (max-width: 640px)": {
//       "& > div": {
//         marginBottom: "14px !important",
//       },
//     },
//   },
// }));

const HomePageContainer = styled(Grid)(() => ({
  "& > div": {
    marginBottom: "20px !important",
  },
  "@media (max-width: 640px)": {
    "& > div": {
      marginBottom: "14px !important",
    },
  },
}));

const HomePage = memo(() => {
  // const classes = useStyles();

  return (
    <HomePageContainer
      item
      container
      // className={classes.root}
      direction="column"
    >
      {/* <KeyStatistics /> */}
      <TopComp />
      <AllLeaguesComp />
      {/* <Matches /> */}
    </HomePageContainer>
  );
});

export default HomePage;
