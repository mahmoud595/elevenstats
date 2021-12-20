import { Grid } from "@mui/material";
import { useSelector, shallowEqual } from "react-redux";

import { Team } from "./Team/Team";
import { MatchDetails } from "./MatchDetails/MatchDetails";

export const MiddleComp = () => {
  const {
    localTeamName,
    localTeamLogo,
    visitorTeamName,
    visitorTeamLogo,
    fixtureLeague,
    localTeamIso,
    visitorTeamIso,
    localNationalTeam,
    visitorNationalTeam,
  } = useSelector(({ h2h }) => {
    const {
      localTeamStats: {
        team: {
          name: localTeamName,
          logoPath: localTeamLogo,

          country: {
            extra: { iso2: localTeamIso },
          },
          nationalTeam: localNationalTeam,
        },
      },
      visitorTeamStats: {
        team: {
          name: visitorTeamName,
          logoPath: visitorTeamLogo,
          country: {
            extra: { iso2: visitorTeamIso },
          },
          nationalTeam: visitorNationalTeam,
        },
      },
      fixture: { league: fixtureLeague },
    } = h2h;
    return {
      localTeamName,
      localTeamLogo,
      visitorTeamName,
      visitorTeamLogo,
      fixtureLeague,
      localTeamIso,
      visitorTeamIso,
      localNationalTeam,
      visitorNationalTeam,
    };
  }, shallowEqual);

  return (
    <>
      <Grid item xs={3}>
        <Team
          title="home"
          teamName={localTeamName}
          teamLogo={localTeamLogo}
          iso={localTeamIso}
          nationalTeam={localNationalTeam}
        />
      </Grid>

      <MatchDetails league={fixtureLeague} />
      <Grid item xs={3}>
        <Team
          title="away"
          teamName={visitorTeamName}
          teamLogo={visitorTeamLogo}
          iso={visitorTeamIso}
          nationalTeam={visitorNationalTeam}
        />
      </Grid>
    </>
  );
};
