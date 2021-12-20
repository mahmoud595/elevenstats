import React from "react";
import { useDispatch } from "react-redux";

import Head from "next/head";

import { HeadToHead } from "../../components";
import apiAxios from "utils/apiAxios";
import { fetchH2hData } from "store/actions/h2hActions";
import {
  structureTeamStats,
  structureFixture,
  structureHeadToHeadStats,
  structureSeasonStats,
  structureTeamPercentile,
} from "utils/helperFunctions/h2hHelperFunctions";

function H2h(props) {
  const dispatch = useDispatch();
  dispatch(fetchH2hData(props));

  return (
    <>
      <Head>
        <title>{`${props.localTeamStats.team.name} vs ${props.visitorTeamStats.team.name} h2h stats, odds and predictions - Elevenstats.com`}</title>
        <meta
          name="description"
          content={`Find ${props.localTeamStats.team.name} vs  ${props.visitorTeamStats.team.name} - ${props.fixture.league.country.name} ${props.fixture.league.name} detailed head to head stats, betting odds, and most accurate predictions `}
        />
      </Head>

      <HeadToHead />
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],

    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  try {
    // call end points

    let params = ctx.params.slug;
    let slug = encodeURI(params[0]);
    let statsEndPoint = `/stats/teams/fixtures/${slug}`;

    if (params.length === 2) {
      let secondParam = params[1];
      if (secondParam === "season") {
        statsEndPoint = `/stats/teams/fixtures/${slug}?seasonStats=true`;
      }
    }
    // console.log(statsEndPoint);
    // console.log(statsEndPoint);
    // return;
    const [
      statsResponse,
      seasonResponse,
      h2hResponse,
      lastFixtures,
      leagueResponse,
      fixtureResponse,
    ] = await Promise.allSettled([
      apiAxios.get(statsEndPoint),
      apiAxios.get(`/stats/seasons/fixtures/${slug}`),
      apiAxios.get(`/stats/headtoheads/fixtures/${slug}`),
      apiAxios.get(`/fixtures/past/${slug}`),
      apiAxios.get(`/standings/fixtures/${slug}`),
      apiAxios.get(`/fixtures/${slug}?includes=stats,events,venue`),
    ]);

    // validate all response
    if (statsResponse.status !== "fulfilled") {
      return { notFound: true };
    }
    const stats = statsResponse?.value?.data?.data;
    let fixture = fixtureResponse?.value?.data?.data;
    // console.log(fixture?.odds);
    if (
      !stats?.localTeamStats?.stats ||
      !stats?.visitorTeamStats?.stats ||
      !fixture?.localTeam ||
      !fixture?.visitorTeam
    ) {
      return { notFound: true };
    }

    const leagueStandings =
      leagueResponse?.status === "fulfilled" &&
      leagueResponse?.value?.data?.data?.standings?.length
        ? leagueResponse?.value?.data?.data?.standings
        : [];

    // sort league accoridng standing
    if (leagueStandings?.length) {
      leagueStandings.sort((a, b) => {
        if (!a.overall.position || !b.overall.position) {
          return null;
        }
        return +a.overall.position - +b.overall.position;
      });
    }

    // add each team object info to it`s stats from fixture object
    stats.localTeamStats.stats.team = stats.localTeamStats.team;
    stats.visitorTeamStats.stats.team = stats.visitorTeamStats.team;

    stats.localTeamStats.percentile
      ? (stats.localTeamStats.percentile.team = stats.localTeamStats.team)
      : null;
    stats.localTeamStats.percentile
      ? (stats.visitorTeamStats.percentile.team = stats.visitorTeamStats.team)
      : null;
    // add stats from fixture to team stats
    const obj = {};
    if (fixture?.stats?.length === 2) {
      for (let team of fixture?.stats) {
        obj[team?.team] = team;
        if (obj[fixture?.localTeam?._id]) {
          stats.localTeamStats.stats.stats = obj[fixture?.localTeam?._id];
        }
        if (obj[fixture?.visitorTeam?._id]) {
          stats.visitorTeamStats.stats.stats = obj[fixture?.visitorTeam?._id];
        }
      }
    }
    fixture = structureFixture(fixture);
    // get the desired value from response and  structure it and validate for errors
    const h2hStats = structureHeadToHeadStats(
      h2hResponse?.value?.data?.data ?? {}
    );

    const isSeasonStats = stats.localTeamStats.isSeasonStats ?? false;

    const localTeamFixtures =
      lastFixtures.value?.data?.data?.localTeamFixtures || [];

    const visitorTeamFixtures =
      lastFixtures.value?.data?.data?.visitorTeamFixtures || [];

    const localTeamStats = structureTeamStats(stats.localTeamStats.stats);
    const visitorTeamStats = structureTeamStats(stats.visitorTeamStats.stats);

    const localTeamPercentile = structureTeamPercentile(
      stats.localTeamStats?.percentile
    );
    const visitorTeamPercentile = structureTeamPercentile(
      stats.visitorTeamStats?.percentile
    );

    const seasonStats = structureSeasonStats(
      seasonResponse?.value?.data?.data ?? {}
    );
    // const data = {
    //   isSeasonStats,
    //   localTeamFixtures: [...localTeamFixtures],
    //   visitorTeamFixtures: [...visitorTeamFixtures],
    //   headToheadStats: { ...h2hStats },
    //   fixture: {
    //     ...fixture,
    //   },
    //   localTeamStats: {
    //     ...localTeamStats,
    //   },
    //   visitorTeamStats: {
    //     ...visitorTeamStats,
    //   },

    //   seasonStats: { ...seasonStats },
    //   leagueStandings: [...leagueStandings],
    // };
    // fs.writeFile(`${slug}.json`, JSON.stringify(data), function (err) {
    //   if (err) return console.log(err);
    // });
    return {
      props: {
        isSeasonStats,
        localTeamFixtures: [...localTeamFixtures],
        visitorTeamFixtures: [...visitorTeamFixtures],
        headToheadStats: { ...h2hStats },
        fixture: {
          ...fixture,
        },
        localTeamStats: {
          ...localTeamStats,
        },
        visitorTeamStats: {
          ...visitorTeamStats,
        },
        localTeamPercentile: {
          ...localTeamPercentile,
        },
        visitorTeamPercentile: {
          ...visitorTeamPercentile,
        },
        seasonStats: { ...seasonStats },
        leagueStandings: [...leagueStandings],
      },
      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
      props: {},
    };
  }
}

export default React.memo(H2h);
