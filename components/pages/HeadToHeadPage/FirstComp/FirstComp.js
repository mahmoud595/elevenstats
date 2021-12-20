import { memo } from "react";
import { Grid, Hidden, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SideComp } from "./SideComp/SideComp";
import { MiddleComp } from "./MiddleComp/MiddleComp";
import { useSelector, shallowEqual } from "react-redux";

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => (WrappedComponent) => (props) =>
  <WrappedComponent {...props} width="xs" />;

const FirstComponent = styled(Grid)(({ theme }) => ({
  height: "fit-content",
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: "16px",
  // "@media (max-width: 1680px)": {
  //   padding: "3.5em",
  // },
  // "@media (max-width: 1450px)": {
  //   padding: "3em",
  // },
  "@media (max-width: 960px)": {
    padding: "1rem 1rem 2rem 1rem",
  },
  // "@media (max-width: 752px)": {
  //   padding: "1rem",
  // },

  "& .firstCompMiddleCompContainer": {
    padding: "0 .5em",
  },
  "& .firstCompMiddleCompMobileContainer": {
    marginBottom: "4em",
    // "@media (min-width: 1440px)": {
    //   maxWidth: "49.4em",
    // },
  },
  "& .firstCompSideComp": {
    maxWidth: "39.6em",
    "@media (min-width: 1440px)": {
      maxWidth: "49.4em",
    },
    "@media (max-width: 1220px)": {
      maxWidth: "35em",
    },
  },
}));

export const FirstComp = memo(() => {
  const {
    localTeamForm,
    localTeamPPG,
    localTeamScoredAverage,
    localTeamConcededAverage,
    visitorTeamForm,
    visitorTeamPPG,
    visitorTeamScoredAverage,
    visitorTeamConcededAverage,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        records: {
          currentForm: { home: localTeamForm },
        },
        points: {
          PPG: { home: localTeamPPG },
        },
        goals: {
          scoredAverage: { home: localTeamScoredAverage },
          concededAverage: { home: localTeamConcededAverage },
        },
      },
      visitorTeamStats: {
        records: {
          currentForm: { home: visitorTeamForm },
        },
        points: {
          PPG: { home: visitorTeamPPG },
        },
        goals: {
          scoredAverage: { home: visitorTeamScoredAverage },
          concededAverage: { home: visitorTeamConcededAverage },
        },
      },
    } = h2h;
    return {
      localTeamForm,
      localTeamPPG,
      localTeamScoredAverage,
      localTeamConcededAverage,
      visitorTeamForm,
      visitorTeamPPG,
      visitorTeamScoredAverage,
      visitorTeamConcededAverage,
    };
  }, shallowEqual);
  // console.log(localTeamStats.records.currentForm.overAll);
  // console.log(localTeamStats);
  const sm = useMediaQuery("(max-width:600px)");
  // console.log(sm);
  return (
    <>
      <Hidden mdUp implementation="css">
        <FirstComponent container direction="column" wrap="nowrap">
          <Grid
            item
            container
            className="firstCompMiddleCompMobileContainer"
            justifyContent="space-between"
            wrap="nowrap"
          >
            <MiddleComp />
          </Grid>
          <Grid container wrap="nowrap">
            <Grid item xs={6} style={{ marginRight: 5 }}>
              <SideComp
                type="left"
                small={false}
                form={localTeamForm.split("")}
                PPG={localTeamPPG}
                goalsScoredPerMatch={localTeamScoredAverage}
                goalsConcededPerMatch={localTeamConcededAverage}
              />
            </Grid>

            <Grid item xs={6} style={{ marginLeft: 5 }}>
              <SideComp
                type="right"
                small={false}
                form={visitorTeamForm.split("")}
                PPG={visitorTeamPPG}
                goalsScoredPerMatch={visitorTeamScoredAverage}
                goalsConcededPerMatch={visitorTeamConcededAverage}
              />
            </Grid>
          </Grid>
        </FirstComponent>
      </Hidden>
      <Hidden mdDown implementation="css">
        <FirstComponent container wrap="nowrap" justifyContent="space-between">
          <Grid item xs={3} className="firstCompSideComp">
            <SideComp
              type="left"
              small={false}
              form={localTeamForm.split("")}
              PPG={localTeamPPG}
              goalsScoredPerMatch={localTeamScoredAverage}
              goalsConcededPerMatch={localTeamConcededAverage}
            />
          </Grid>
          <Grid
            item
            container
            className="firstCompMiddleCompContainer"
            xs={6}
            justifyContent="space-between"
            wrap="nowrap"
          >
            <MiddleComp />
          </Grid>
          <Grid item xs={3} className="firstCompSideComp">
            <SideComp
              type="right"
              small={false}
              form={visitorTeamForm.split("")}
              PPG={visitorTeamPPG}
              goalsScoredPerMatch={visitorTeamScoredAverage}
              goalsConcededPerMatch={visitorTeamConcededAverage}
            />
          </Grid>
        </FirstComponent>
      </Hidden>
    </>
  );
});
