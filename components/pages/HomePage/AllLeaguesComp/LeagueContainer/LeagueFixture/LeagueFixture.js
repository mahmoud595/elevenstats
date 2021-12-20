import { memo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import dynamic from "next/dynamic";

import { LeagueContainerHeader } from "./LeagueContainerHeader/LeagueContainerHeader";
const LeagueMatches = dynamic(import("./LeagueMatches/LeagueMatches"));

const MainLeagueContainer = styled(Grid)(() => ({
  marginTop: "50px",
  borderRadius: 12,
  background: "#fff",
  boxShadow: "12.8811px 7.11487px 75.0136px rgba(134, 134, 134, 0.1)",

  "@media (max-width:600px)": {
    marginTop: 18,
  },
}));

export const LeagueFixture = memo(
  ({
    isPopular,
    leagueType,
    country,
    slug,
    fixturesCount,
    fixtures,
    name,
    leagueImage,
    index,
  }) => {
    const [hiddenLeague, setHiddenLeague] = useState(false);
    const [collapsed, setCollapsed] = useState();
    const [newFixtures, setNewFixtures] = useState();

    const [count, setCount] = useState();

    return (
      <MainLeagueContainer
        item
        container
        direction="column"
        // className={classes.leagueContainer}

        sx={{
          display: `${hiddenLeague ? "none" : "flex"}`,
        }}
      >
        <LeagueContainerHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          leagueImage={leagueImage}
          name={name}
          fixturesCount={fixturesCount}
          fixturesLength={fixtures?.length}
          slug={slug}
          newFixturesLength={newFixtures?.length}
          setNewFixtures={setNewFixtures}
          countryLeague={country}
          count={count}
          i={index}
        />
        <LeagueMatches
          fixtures={fixtures && fixtures}
          setNewFixtures={setNewFixtures}
          fixturesCount={fixturesCount}
          slug={slug}
          newFixtures={newFixtures}
          collapsed={collapsed}
          setHiddenLeague={setHiddenLeague}
          slug={slug}
          leagueType={leagueType}
          isPopular={isPopular}
          setCount={setCount}
        />
      </MainLeagueContainer>
    );
  }
);
