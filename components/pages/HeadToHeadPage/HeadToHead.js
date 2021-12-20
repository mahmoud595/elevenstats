import dynamic from "next/dynamic";
import { memo, useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, CircularProgress } from "@mui/material";
import { FirstComp } from "./FirstComp/FirstComp";
import { ScorePredictionLeagueComps } from "./ScorePredictionLeagueComps/ScorePredictionLeagueComps";
import { TabsComp } from "./TabsComp/TabsComp";
import { SeasonStatsSwitch } from "./SeasonStatsSwitch/SeasonStatsSwitch";

// import { CardsContainer } from "./CardsContainer/CardsContainer";

const Suspense = dynamic(
  import("react").then((mod) => mod.Suspense),
  { ssr: false }
);
const DynamicCardsContainer = dynamic(
  () =>
    import("./ScreensContainer/ScreensContainer").then(
      (mod) => mod.ScreensContainer
    ),
  { ssr: false }
);

const useStyles = makeStyles(({ palette }) => ({
  root: {
    // flex: 1,
    // height: "fit-content",
    "& > div:not(:last-child)": {
      marginBottom: "5em",
      width: "100%",
    },
    "& > div:nth-child(3)": {
      width: "100%",
      marginBottom: "0 !important",
    },
  },
}));

export const HeadToHead = memo(() => {
  const [screenSelected, setScreenSelected] = useState("statistics");
  const [selected, setSelected] = useState("all");
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      setHidden(false);
    }
  }
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="column"
      className={classes.root}
      alignItems="center"
      wrap="nowrap"
    >
      <FirstComp />
      <TabsComp
        setScreenSelected={setScreenSelected}
        setSelected={setSelected}
        screenSelected={screenSelected}
      />
      <SeasonStatsSwitch />
      <ScorePredictionLeagueComps />

      {!hidden ? (
        <Suspense fallback={`loading`}>
          <DynamicCardsContainer
            screenSelected={screenSelected}
            selected={selected}
          />
        </Suspense>
      ) : (
        <></>
      )}
    </Grid>
  );
});
