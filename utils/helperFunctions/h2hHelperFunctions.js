export const structureTeamStats = (teamStats) => {
  let structuredTeamStats = {
    records: {
      currentForm: {
        overAll: teamStats?.records?.currentForm?.overAll ?? null,
        home: teamStats?.records?.currentForm?.home ?? null,
        away: teamStats?.records?.currentForm?.away ?? null,
      },
      winsPercentage: {
        total: Math.round(teamStats?.records?.winsPercentage?.total ?? 0),
        home: Math.round(teamStats?.records?.winsPercentage?.home ?? 0),
        away: Math.round(teamStats?.records?.winsPercentage?.away ?? 0),
      },
      drawsPercentage: {
        total: Math.round(teamStats?.records?.drawsPercentage?.total) ?? 0,
      },
      leadingHTPercentage: {
        total: Math.round(teamStats?.records?.leadingHTPercentage?.total ?? 0),
      },
      wins2HTPercentage: {
        total: Math.round(teamStats?.records?.wins2HTPercentage?.total ?? 0),
      },
      drawingHTPercentage: {
        total: Math.round(teamStats?.records?.drawingHTPercentage?.total ?? 0),
      },
      draws2HTPercentage: {
        total: Math.round(teamStats?.records?.draws2HTPercentage?.total ?? 0),
      },
      trailingHTPercentage: {
        total: Math.round(teamStats?.records?.trailingHTPercentage?.total ?? 0),
      },
      losses2HTPercentage: {
        total: Math.round(teamStats?.records?.losses2HTPercentage?.total ?? 0),
      },
    },
    players: {
      playersParticipants: teamStats?.players?.playersParticipants || 0,
      topScorers: teamStats?.players?.topScorers || [],
      topCardsHolders: teamStats?.players?.topCardsHolders || [],
      topScorersPerMatch: teamStats?.players?.topScorersPerMatch || [],
      topCardsPerMatchHolders:
        teamStats?.players?.topCardsPerMatchHolders || [],
      topMostPlayed: teamStats?.players?.topMostPlayed || [],
    },
    points: {
      PPG: {
        total: teamStats?.points?.PPG?.total?.toFixed(1) ?? 0,
        home: teamStats?.points?.PPG?.home?.toFixed(1) ?? 0,
        away: teamStats?.points?.PPG?.away?.toFixed(1) ?? 0,
      },
      PPGHT: {
        total: teamStats?.points?.PPGHT?.total.toFixed(1) ?? 0,
        home: teamStats?.points?.PPGHT?.home.toFixed(1) ?? 0,
        away: teamStats?.points?.PPGHT?.away.toFixed(1) ?? 0,
      },
    },
    goals: {
      expected: {
        total: teamStats?.goals?.expected?.total?.toFixed(1)
          ? teamStats?.goals?.expected?.total === -1
            ? "-"
            : teamStats?.goals?.expected?.total?.toFixed(1)
          : 0,
        home: teamStats?.goals?.expected?.home?.toFixed(1)
          ? teamStats?.goals?.expected?.home === -1
            ? "-"
            : teamStats?.goals?.expected?.home?.toFixed(1)
          : 0,
        away: teamStats?.goals?.expected?.away?.toFixed(1)
          ? teamStats?.goals?.expected?.away === -1
            ? "-"
            : teamStats?.goals?.expected?.away?.toFixed(1)
          : 0,
      },
      expectedAgainst: {
        total: teamStats?.goals?.expectedAgainst?.total?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.total === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.total?.toFixed(1)
          : 0,
        home: teamStats?.goals?.expectedAgainst?.home?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.home === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.home?.toFixed(1)
          : 0,
        away: teamStats?.goals?.expectedAgainst?.away?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.away === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.away?.toFixed(1)
          : 0,
      },
      firstScoredPercentage: {
        total: Math.round(teamStats?.goals?.firstScoredPercentage?.total ?? 0),
        home: Math.round(teamStats?.goals?.firstScoredPercentage?.home ?? 0),
        away: Math.round(teamStats?.goals?.firstScoredPercentage?.away ?? 0),
      },
      scoredMatchesPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredMatchesPercentage?.total ?? 0
        ),
        home: Math.round(teamStats?.goals?.scoredMatchesPercentage?.home ?? 0),
        away: Math.round(teamStats?.goals?.scoredMatchesPercentage?.away ?? 0),
      },
      scoredBothHalvesPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredBothHalvesPercentage?.total ?? 0
        ),
      },
      scoredHTPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredHTMatchesPercentage?.total ?? 0
        ),
      },
      scored2HTPercentage: {
        total: Math.round(
          teamStats?.goals?.scored2HTMatchesPercentage?.total ?? 0
        ),
      },
      scoredHTAverage: {
        total: teamStats?.goals?.scoredHTAverage?.total.toFixed(1) ?? 0,
      },
      scored2HTAverage: {
        total: teamStats?.goals?.scored2HTAverage?.total.toFixed(1) ?? 0,
      },
      conceded2HTAverage: {
        total: teamStats?.goals?.conceded2HTAverage?.total.toFixed(1) ?? 0,
      },
      concededHTAverage: {
        total: teamStats?.goals?.concededHTAverage?.total.toFixed(1) ?? 0,
      },
      underPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["4_5"]?.total)) ??
            0,
        },
      },
      underHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      under2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      overPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["4_5"]?.total)) ??
            0,
        },
      },
      overHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      concededOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      concededOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      concededOverPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOverPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.total
              )) ??
            0,
          home:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.home
              )) ??
            0,
          away:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.away
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOver2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      goalsAverage: {
        total: teamStats?.goals?.goalsAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.goalsAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.goalsAverage?.away.toFixed(1) ?? 0,
      },
      scoredAverage: {
        total: teamStats?.goals?.scoredAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.scoredAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.scoredAverage?.away.toFixed(1) ?? 0,
      },
      concededAverage: {
        total: teamStats?.goals?.concededAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.concededAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.concededAverage?.away.toFixed(1) ?? 0,
      },
      timingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
      scoredTimingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
      concededTimingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
    },
    BTTS: {
      BTTSPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSPercentage?.total ?? 0),
        home: Math.round(teamStats?.BTTS?.BTTSPercentage?.home ?? 0),
        away: Math.round(teamStats?.BTTS?.BTTSPercentage?.away ?? 0),
      },
      BTTSAndWinPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSAndWinPercentage?.total ?? 0),
      },
      BTTSAndDrawPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSAndDrawPercentage?.total ?? 0),
      },
      BTTSHTPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSHTPercentage?.total ?? 0),
      },
      BTTS2HTPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTS2HTPercentage?.total ?? 0),
      },
      BTTSBothHalvesPercentage: {
        total: Math.round(
          teamStats?.BTTS?.BTTSBothHalvesPercentage?.total ?? 0
        ),
      },
      BTTSNoAndOverPercentage: {
        "2_5": {
          total: Math.round(
            (teamStats?.BTTS?.BTTSNoAndOverPercentage &&
              teamStats?.BTTS?.BTTSNoAndOverPercentage["2_5"]?.total) ??
              0
          ),
        },
      },
      BTTSAndOverPercentage: {
        "2_5": {
          total:
            (teamStats?.BTTS?.BTTSAndOverPercentage &&
              Math.round(
                teamStats?.BTTS?.BTTSAndOverPercentage["2_5"]?.total
              )) ??
            0,
        },
      },
    },
    cleanSheets: {
      cleanSheetsPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.total ?? 0
        ),
        home: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.home ?? 0
        ),
        away: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.away ?? 0
        ),
      },
      cleanSheetsHTPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheetsHTPercentage?.total ?? 0
        ),
      },
      cleanSheets2HTPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheets2HTPercentage?.total ?? 0
        ),
      },
    },
    failedToScore: {
      failedToScorePercentage: {
        total: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.total ?? 0
        ),
        home: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.home ?? 0
        ),
        away: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.away ?? 0
        ),
      },
    },
    shots: {
      shotsAverage: {
        total: teamStats?.shots?.shotsAverage?.total.toFixed(1) ?? 0,
      },
      conversionRatePercentage: {
        total:
          Math.round(
            teamStats?.shots?.conversionRatePercentage?.total &&
              teamStats?.shots?.conversionRatePercentage?.total
          ) ?? 0,
      },
      shotsOnTargetAverage: {
        total: teamStats?.shots?.shotsOnTargetAverage?.total.toFixed(1) ?? 0,
      },
      shotsOffTargetAverage: {
        total: teamStats?.shots?.shotsOffTargetAverage?.total.toFixed(1) ?? 0,
      },
      shotsPerGoal: {
        total: teamStats?.shots?.shotsPerGoal?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "10_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["10_5"]?.total) ??
              0
          ),
        },
        "11_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["11_5"]?.total) ??
              0
          ),
        },
        "12_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["12_5"]?.total) ??
              0
          ),
        },
        "13_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["13_5"]?.total) ??
              0
          ),
        },
        "14_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["14_5"]?.total) ??
              0
          ),
        },
        "15_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["15_5"]?.total) ??
              0
          ),
        },
      },
      overOnTargetForPercentage: {
        "3_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["4_5"]?.total
              )) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["5_5"]?.total
              )) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["6_5"]?.total
              )) ??
            0,
        },
      },
      overPercentage: {
        "23_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["23_5"]?.total) ??
              0
          ),
        },
        "24_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["24_5"]?.total) ??
              0
          ),
        },
        "25_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["25_5"]?.total) ??
              0
          ),
        },
        "26_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["26_5"]?.total) ??
              0
          ),
        },
      },
      overOnTargetPercentage: {
        "7_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["7_5"]?.total
              )) ??
            0,
        },
        "8_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["8_5"]?.total
              )) ??
            0,
        },
        "9_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["9_5"]?.total
              )) ??
            0,
        },
      },
    },
    offsides: {
      offsidesAverage: {
        total: teamStats?.offsides?.offsidesAverage?.total.toFixed(1) ?? 0,
      },
      overPercentage: {
        "2_5": {
          total:
            (teamStats?.offsides?.overPercentage &&
              Math.round(teamStats?.offsides?.overPercentage["2_5"].total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.offsides?.overPercentage &&
              Math.round(teamStats?.offsides?.overPercentage["3_5"].total)) ??
            0,
        },
      },
      offsidesForAverage: {
        total: teamStats?.offsides?.offsidesForAverage?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "2_5": {
          total: Math.round(
            (teamStats?.offsides?.overForPercentage &&
              teamStats?.offsides?.overForPercentage["2_5"].total) ??
              0
          ),
        },
        "3_5": {
          total: Math.round(
            (teamStats?.offsides?.overForPercentage &&
              teamStats?.offsides?.overForPercentage["3_5"].total) ??
              0
          ),
        },
      },
    },
    fouls: {
      // for: {
      //   total: teamStats?.fouls?.for?.total?? 0,
      // },
      foulsAverage: {
        total: teamStats?.fouls?.foulsAverage?.total.toFixed(1) ?? 0,
      },
      foulsAgainstAverage: {
        total: teamStats?.fouls?.foulsAgainstAverage?.total.toFixed(1) ?? 0,
      },
    },
    possession: {
      possession: {
        total: Math.round(teamStats?.possession?.possession?.total ?? 0),
      },
    },
    cards: {
      cardsForHTAverage: {
        total: teamStats?.cards?.cardsForHTAverage?.total.toFixed(1) ?? 0,
      },
      cardsFor2HTAverage: {
        total: teamStats?.cards?.cardsFor2HTAverage?.total.toFixed(1) ?? 0,
      },
      cardsHTAverage: {
        total: teamStats?.cards?.cardsHTAverage?.total.toFixed(1) ?? 0,
      },
      cards2HTAverage: {
        total: teamStats?.cards?.cards2HTAverage?.total.toFixed(1) ?? 0,
      },
      moreHTPercentage: {
        total: Math.round(teamStats?.cards?.moreHTPercentage?.total ?? 0),
      },
      more2HTPercentage: {
        total: Math.round(teamStats?.cards?.more2HTPercentage?.total ?? 0),
      },
      overForHTPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overForHTPercentage &&
              Math.round(
                teamStats?.cards?.overForHTPercentage["0_5"]?.total
              )) ??
            0,
        },
      },
      overFor2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overFor2HTPercentage &&
              Math.round(
                teamStats?.cards?.overFor2HTPercentage["0_5"]?.total
              )) ??
            0,
        },
      },
      overHTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.overHTPercentage &&
              Math.round(teamStats?.cards?.overHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overHTPercentage &&
              Math.round(teamStats?.cards?.overHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.over2HTPercentage &&
              Math.round(teamStats?.cards?.over2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.over2HTPercentage &&
              Math.round(teamStats?.cards?.over2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      underHTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.underHTPercentage &&
              Math.round(teamStats?.cards?.underHTPercentage["1_5"]?.total)) ??
            0,
        },
      },
      under2HTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.under2HTPercentage &&
              Math.round(teamStats?.cards?.under2HTPercentage["1_5"]?.total)) ??
            0,
        },
      },
      cardsAverage: {
        total: teamStats?.cards?.cardsAverage?.total?.toFixed(1) ?? 0,
      },
      cardsForAverage: {
        total: teamStats?.cards?.cardsForAverage?.total?.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["3_5"]?.total)) ??
            0,
        },
      },
      overPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["4_5"]?.total)) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["5_5"]?.total)) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["6_5"]?.total)) ??
            0,
        },
      },

      overAgainst: {
        "0_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["0_5"]?.total.toFixed(1)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["1_5"]?.total.toFixed(1)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["2_5"]?.total.toFixed(1)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["3_5"]?.total.toFixed(1)) ??
            0,
        },
      },
    },
    corners: {
      overPercentage: {
        "6_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["6_5"]?.total)) ??
            0,
        },
        "7_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["7_5"]?.total)) ??
            0,
        },
        "8_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["8_5"]?.total)) ??
            0,
        },
        "9_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["9_5"]?.total)) ??
            0,
        },
        "10_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["10_5"]?.total)) ??
            0,
        },
        "11_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["11_5"]?.total)) ??
            0,
        },
        "12_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["12_5"]?.total)) ??
            0,
        },
        "13_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["13_5"]?.total)) ??
            0,
        },
      },
      cornersAverage: {
        total: teamStats?.corners?.cornersAverage?.total.toFixed(1) ?? 0,
      },
      cornersForAverage: {
        total: teamStats?.corners?.cornersForAverage?.total.toFixed(1) ?? 0,
      },
      cornersAgainstAverage: {
        total: teamStats?.corners?.cornersAgainstAverage?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "2_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["4_5"]?.total
              )) ??
            0,
        },
      },
      overAgainstPercentage: {
        "2_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["4_5"]?.total
              )) ??
            0,
        },
      },
      cornersHTAverage: {
        total: teamStats?.corners?.cornersHTAverage?.total.toFixed(1) ?? 0,
      },
      corners2HTAverage: {
        total: teamStats?.corners?.corners2HTAverage?.total.toFixed(1) ?? 0,
      },
      overHTPercentage: {
        "4_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["4_5"]?.total)) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["5_5"]?.total)) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["6_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "4_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["4_5"]?.total
              )) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["5_5"]?.total
              )) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["6_5"]?.total
              )) ??
            0,
        },
      },
    },
    team: {
      _id: teamStats?.team?._id ?? "-",
      name: teamStats?.team?.name ?? "-",
      logoPath: "",
      nationalTeam: teamStats?.team?.nationalTeam ?? "",
      country: {
        extra: {
          iso2: teamStats?.team?.country?.extra?.iso2 ?? "",
          iso: teamStats?.team?.country?.extra?.iso ?? "",
        },
        imagePath: teamStats?.team?.country?.imagePath ?? null,
      },
    },
    stats: {
      substitutions: teamStats?.stats?.substitutions ?? 0,
      corners: teamStats?.stats?.corners ?? 0,
      possessionTime: teamStats?.stats?.possessionTime ?? 0,
      penalties: teamStats?.stats?.penalties ?? 0,
      goals: teamStats?.stats?.goals ?? 0,
      goalAttempts: teamStats?.stats?.goalAttempts ?? 0,
      shots: {
        offGoal: teamStats?.stats?.shots?.offGoal ?? 0,
        onGoal: teamStats?.stats?.shots?.onGoal ?? 0,
        total: teamStats?.stats?.shots?.total ?? 0,
        blocked: teamStats?.stats?.shots?.blocked ?? 0,
        insideBox: teamStats?.stats?.shots?.insideBox ?? 0,
        outsideBox: teamStats?.stats?.shots?.outsideBox ?? 0,
      },
      goalKick: teamStats?.stats?.goalKick ?? 0,
      freeKick: teamStats?.stats?.freeKick ?? 0,
      offside: teamStats?.stats?.offsides ?? 0,
      throwIn: teamStats?.stats?.throwIn ?? 0,
      saves: teamStats?.stats?.saves ?? 0,
      yellowCards: teamStats?.stats?.yellowCards ?? 0,
      redCards: teamStats?.stats?.redCards ?? 0,
      attacks: {
        attacks: teamStats?.stats?.attacks?.attacks ?? 0,
        dangerousAttacks: teamStats?.stats?.attacks?.dangerousAttacks ?? 0,
      },
      team: teamStats?.stats?.team ?? 0,
      fixture: teamStats?.stats?.fixture ?? 0,

      fouls: teamStats?.stats?.fouls ?? 0,
      passes: {
        total: teamStats?.stats?.passes?.total ?? 0,
        accurate: teamStats?.stats?.passes?.accurate ?? 0,
        percentage: teamStats?.stats?.passes?.percentage ?? 0,
      },
      //{
      //   fouls: {
      //     home: teamStats?.stats?.fouls?.fouls?.home ?? 0,
      //     away: teamStats?.stats?.fouls?.fouls?.away ?? 0,
      //   },
      // },
    },
  };
  let countryImage = teamStats?.team?.country?.imagePath;
  let teamImage = teamStats?.team?.logoPath;

  structuredTeamStats.team.logoPath = teamStats?.team?.nationalTeam
    ? countryImage
      ? countryImage
      : teamImage
    : teamImage ?? "https://cdn.sportmonks.com/images//soccer/teams/8/8.png";

  return structuredTeamStats;
};
export const structureTeamPercentile = (teamStats) => {
  let structuredTeamStats = {
    records: {
      currentForm: {
        overAll: teamStats?.records?.currentForm?.overAll ?? null,
        home: teamStats?.records?.currentForm?.home ?? null,
        away: teamStats?.records?.currentForm?.away ?? null,
      },
      winsPercentage: {
        total: Math.round(teamStats?.records?.winsPercentage?.total ?? 0),
        home: Math.round(teamStats?.records?.winsPercentage?.home ?? 0),
        away: Math.round(teamStats?.records?.winsPercentage?.away ?? 0),
      },
      drawsPercentage: {
        total: Math.round(teamStats?.records?.drawsPercentage?.total) ?? 0,
      },
      leadingHTPercentage: {
        total: Math.round(teamStats?.records?.leadingHTPercentage?.total ?? 0),
      },
      wins2HTPercentage: {
        total: Math.round(teamStats?.records?.wins2HTPercentage?.total ?? 0),
      },
      drawingHTPercentage: {
        total: Math.round(teamStats?.records?.drawingHTPercentage?.total ?? 0),
      },
      draws2HTPercentage: {
        total: Math.round(teamStats?.records?.draws2HTPercentage?.total ?? 0),
      },
      trailingHTPercentage: {
        total: Math.round(teamStats?.records?.trailingHTPercentage?.total ?? 0),
      },
      losses2HTPercentage: {
        total: Math.round(teamStats?.records?.losses2HTPercentage?.total ?? 0),
      },
    },
    players: {
      playersParticipants: teamStats?.players?.playersParticipants || 0,
      topScorers: teamStats?.players?.topScorers || [],
      topCardsHolders: teamStats?.players?.topCardsHolders || [],
      topScorersPerMatch: teamStats?.players?.topScorersPerMatch || [],
      topCardsPerMatchHolders:
        teamStats?.players?.topCardsPerMatchHolders || [],
      topMostPlayed: teamStats?.players?.topMostPlayed || [],
    },
    points: {
      PPG: {
        total: teamStats?.points?.PPG?.total?.toFixed(1) ?? 0,
        home: teamStats?.points?.PPG?.home?.toFixed(1) ?? 0,
        away: teamStats?.points?.PPG?.away?.toFixed(1) ?? 0,
      },
      PPGHT: {
        total: teamStats?.points?.PPGHT?.total?.toFixed(1) ?? 0,
        home: teamStats?.points?.PPGHT?.home?.toFixed(1) ?? 0,
        away: teamStats?.points?.PPGHT?.away?.toFixed(1) ?? 0,
      },
    },
    goals: {
      expected: {
        total: teamStats?.goals?.expected?.total?.toFixed(1)
          ? teamStats?.goals?.expected?.total === -1
            ? "-"
            : teamStats?.goals?.expected?.total?.toFixed(1)
          : 0,
        home: teamStats?.goals?.expected?.home?.toFixed(1)
          ? teamStats?.goals?.expected?.home === -1
            ? "-"
            : teamStats?.goals?.expected?.home?.toFixed(1)
          : 0,
        away: teamStats?.goals?.expected?.away?.toFixed(1)
          ? teamStats?.goals?.expected?.away === -1
            ? "-"
            : teamStats?.goals?.expected?.away?.toFixed(1)
          : 0,
      },
      expectedAgainst: {
        total: teamStats?.goals?.expectedAgainst?.total?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.total === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.total?.toFixed(1)
          : 0,
        home: teamStats?.goals?.expectedAgainst?.home?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.home === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.home?.toFixed(1)
          : 0,
        away: teamStats?.goals?.expectedAgainst?.away?.toFixed(1)
          ? teamStats?.goals?.expectedAgainst?.away === -1
            ? "-"
            : teamStats?.goals?.expectedAgainst?.away?.toFixed(1)
          : 0,
      },
      firstScoredPercentage: {
        total: Math.round(teamStats?.goals?.firstScoredPercentage?.total ?? 0),
        home: Math.round(teamStats?.goals?.firstScoredPercentage?.home ?? 0),
        away: Math.round(teamStats?.goals?.firstScoredPercentage?.away ?? 0),
      },
      scoredMatchesPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredMatchesPercentage?.total ?? 0
        ),
        home: Math.round(teamStats?.goals?.scoredMatchesPercentage?.home ?? 0),
        away: Math.round(teamStats?.goals?.scoredMatchesPercentage?.away ?? 0),
      },
      scoredBothHalvesPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredBothHalvesPercentage?.total ?? 0
        ),
      },
      scoredHTPercentage: {
        total: Math.round(
          teamStats?.goals?.scoredHTMatchesPercentage?.total ?? 0
        ),
      },
      scored2HTPercentage: {
        total: Math.round(
          teamStats?.goals?.scored2HTMatchesPercentage?.total ?? 0
        ),
      },
      scoredHTAverage: {
        total: teamStats?.goals?.scoredHTAverage?.total.toFixed(1) ?? 0,
      },
      scored2HTAverage: {
        total: teamStats?.goals?.scored2HTAverage?.total.toFixed(1) ?? 0,
      },
      conceded2HTAverage: {
        total: teamStats?.goals?.conceded2HTAverage?.total.toFixed(1) ?? 0,
      },
      concededHTAverage: {
        total: teamStats?.goals?.concededHTAverage?.total.toFixed(1) ?? 0,
      },
      underPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.goals?.underPercentage &&
              Math.round(teamStats?.goals?.underPercentage["4_5"]?.total)) ??
            0,
        },
      },
      underHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.underHTPercentage &&
              Math.round(teamStats?.goals?.underHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      under2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.under2HTPercentage &&
              Math.round(teamStats?.goals?.under2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      overPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.goals?.overPercentage &&
              Math.round(teamStats?.goals?.overPercentage["4_5"]?.total)) ??
            0,
        },
      },
      overHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.overHTPercentage &&
              Math.round(teamStats?.goals?.overHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.over2HTPercentage &&
              Math.round(teamStats?.goals?.over2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      concededOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      concededOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverHTPercentage &&
              Math.round(
                teamStats?.goals?.concededOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      concededOverPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.concededOverPercentage &&
              Math.round(
                teamStats?.goals?.concededOverPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOverPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.total
              )) ??
            0,
          home:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.home
              )) ??
            0,
          away:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["0_5"]?.away
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOverPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOverHTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOverHTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOverHTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      scoredOver2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["0_5"]?.total
              )) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["1_5"]?.total
              )) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.goals?.scoredOver2HTPercentage &&
              Math.round(
                teamStats?.goals?.scoredOver2HTPercentage["3_5"]?.total
              )) ??
            0,
        },
      },
      goalsAverage: {
        total: teamStats?.goals?.goalsAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.goalsAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.goalsAverage?.away.toFixed(1) ?? 0,
      },
      scoredAverage: {
        total: teamStats?.goals?.scoredAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.scoredAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.scoredAverage?.away.toFixed(1) ?? 0,
      },
      concededAverage: {
        total: teamStats?.goals?.concededAverage?.total.toFixed(1) ?? 0,
        home: teamStats?.goals?.concededAverage?.home.toFixed(1) ?? 0,
        away: teamStats?.goals?.concededAverage?.away.toFixed(1) ?? 0,
      },
      timingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.timingsTotalPercentage &&
            teamStats?.goals?.timingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
      scoredTimingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.scoredTimingsTotalPercentage &&
            teamStats?.goals?.scoredTimingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
      concededTimingsTotalPercentage: {
        "0:10": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["0:10"]?.total) ??
            0
        ),
        "11:20": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["11:20"]?.total) ??
            0
        ),
        "21:30": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["21:30"]?.total) ??
            0
        ),
        "31:40": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["31:40"]?.total) ??
            0
        ),
        "41:50": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["41:50"]?.total) ??
            0
        ),
        "51:60": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["51:60"]?.total) ??
            0
        ),
        "61:70": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["61:70"]?.total) ??
            0
        ),
        "71:80": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["71:80"]?.total) ??
            0
        ),
        "81:90": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["81:90"]?.total) ??
            0
        ),
        "0:15": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["0:15"]?.total) ??
            0
        ),
        "16:30": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["16:30"]?.total) ??
            0
        ),
        "31:45": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["31:45"]?.total) ??
            0
        ),
        "46:60": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["46:60"]?.total) ??
            0
        ),
        "61:75": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["61:75"]?.total) ??
            0
        ),
        "76:90": Math.round(
          (teamStats?.goals?.concededTimingsTotalPercentage &&
            teamStats?.goals?.concededTimingsTotalPercentage["76:90"]?.total) ??
            0
        ),
      },
    },
    BTTS: {
      BTTSPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSPercentage?.total ?? 0),
        home: Math.round(teamStats?.BTTS?.BTTSPercentage?.home ?? 0),
        away: Math.round(teamStats?.BTTS?.BTTSPercentage?.away ?? 0),
      },
      BTTSAndWinPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSAndWinPercentage?.total ?? 0),
      },
      BTTSAndDrawPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSAndDrawPercentage?.total ?? 0),
      },
      BTTSHTPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTSHTPercentage?.total ?? 0),
      },
      BTTS2HTPercentage: {
        total: Math.round(teamStats?.BTTS?.BTTS2HTPercentage?.total ?? 0),
      },
      BTTSBothHalvesPercentage: {
        total: Math.round(
          teamStats?.BTTS?.BTTSBothHalvesPercentage?.total ?? 0
        ),
      },
      BTTSNoAndOverPercentage: {
        "2_5": {
          total: Math.round(
            (teamStats?.BTTS?.BTTSNoAndOverPercentage &&
              teamStats?.BTTS?.BTTSNoAndOverPercentage["2_5"]?.total) ??
              0
          ),
        },
      },
      BTTSAndOverPercentage: {
        "2_5": {
          total:
            (teamStats?.BTTS?.BTTSAndOverPercentage &&
              Math.round(
                teamStats?.BTTS?.BTTSAndOverPercentage["2_5"]?.total
              )) ??
            0,
        },
      },
    },
    cleanSheets: {
      cleanSheetsPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.total ?? 0
        ),
        home: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.home ?? 0
        ),
        away: Math.round(
          teamStats?.cleanSheets?.cleanSheetsPercentage?.away ?? 0
        ),
      },
      cleanSheetsHTPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheetsHTPercentage?.total ?? 0
        ),
      },
      cleanSheets2HTPercentage: {
        total: Math.round(
          teamStats?.cleanSheets?.cleanSheets2HTPercentage?.total ?? 0
        ),
      },
    },
    failedToScore: {
      failedToScorePercentage: {
        total: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.total ?? 0
        ),
        home: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.home ?? 0
        ),
        away: Math.round(
          teamStats?.failedToScore?.failedToScorePercentage?.away ?? 0
        ),
      },
    },
    shots: {
      shotsAverage: {
        total: teamStats?.shots?.shotsAverage?.total.toFixed(1) ?? 0,
      },
      conversionRatePercentage: {
        total:
          Math.round(
            teamStats?.shots?.conversionRatePercentage?.total &&
              teamStats?.shots?.conversionRatePercentage?.total
          ) ?? 0,
      },
      shotsOnTargetAverage: {
        total: teamStats?.shots?.shotsOnTargetAverage?.total.toFixed(1) ?? 0,
      },
      shotsOffTargetAverage: {
        total: teamStats?.shots?.shotsOffTargetAverage?.total.toFixed(1) ?? 0,
      },
      shotsPerGoal: {
        total: teamStats?.shots?.shotsPerGoal?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "10_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["10_5"]?.total) ??
              0
          ),
        },
        "11_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["11_5"]?.total) ??
              0
          ),
        },
        "12_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["12_5"]?.total) ??
              0
          ),
        },
        "13_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["13_5"]?.total) ??
              0
          ),
        },
        "14_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["14_5"]?.total) ??
              0
          ),
        },
        "15_5": {
          total: Math.round(
            (teamStats?.shots?.overForPercentage &&
              teamStats?.shots?.overForPercentage["15_5"]?.total) ??
              0
          ),
        },
      },
      overOnTargetForPercentage: {
        "3_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["4_5"]?.total
              )) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["5_5"]?.total
              )) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.shots?.overOnTargetForPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetForPercentage["6_5"]?.total
              )) ??
            0,
        },
      },
      overPercentage: {
        "23_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["23_5"]?.total) ??
              0
          ),
        },
        "24_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["24_5"]?.total) ??
              0
          ),
        },
        "25_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["25_5"]?.total) ??
              0
          ),
        },
        "26_5": {
          total: Math.round(
            (teamStats?.shots?.overPercentage &&
              teamStats?.shots?.overPercentage["26_5"]?.total) ??
              0
          ),
        },
      },
      overOnTargetPercentage: {
        "7_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["7_5"]?.total
              )) ??
            0,
        },
        "8_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["8_5"]?.total
              )) ??
            0,
        },
        "9_5": {
          total:
            (teamStats?.shots?.overOnTargetPercentage &&
              Math.round(
                teamStats?.shots?.overOnTargetPercentage["9_5"]?.total
              )) ??
            0,
        },
      },
    },
    offsides: {
      offsidesAverage: {
        total: teamStats?.offsides?.offsidesAverage?.total.toFixed(1) ?? 0,
      },
      overPercentage: {
        "2_5": {
          total:
            (teamStats?.offsides?.overPercentage &&
              Math.round(teamStats?.offsides?.overPercentage["2_5"].total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.offsides?.overPercentage &&
              Math.round(teamStats?.offsides?.overPercentage["3_5"].total)) ??
            0,
        },
      },
      offsidesForAverage: {
        total: teamStats?.offsides?.offsidesForAverage?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "2_5": {
          total: Math.round(
            (teamStats?.offsides?.overForPercentage &&
              teamStats?.offsides?.overForPercentage["2_5"].total) ??
              0
          ),
        },
        "3_5": {
          total: Math.round(
            (teamStats?.offsides?.overForPercentage &&
              teamStats?.offsides?.overForPercentage["3_5"].total) ??
              0
          ),
        },
      },
    },
    fouls: {
      // for: {
      //   total: teamStats?.fouls?.for?.total?? 0,
      // },
      foulsAverage: {
        total: teamStats?.fouls?.foulsAverage?.total.toFixed(1) ?? 0,
      },
      foulsAgainstAverage: {
        total: teamStats?.fouls?.foulsAgainstAverage?.total.toFixed(1) ?? 0,
      },
    },
    possession: {
      possession: {
        total: Math.round(teamStats?.possession?.possession?.total ?? 0),
      },
    },
    cards: {
      cardsForHTAverage: {
        total: teamStats?.cards?.cardsForHTAverage?.total.toFixed(1) ?? 0,
      },
      cardsFor2HTAverage: {
        total: teamStats?.cards?.cardsFor2HTAverage?.total.toFixed(1) ?? 0,
      },
      cardsHTAverage: {
        total: teamStats?.cards?.cardsHTAverage?.total.toFixed(1) ?? 0,
      },
      cards2HTAverage: {
        total: teamStats?.cards?.cards2HTAverage?.total.toFixed(1) ?? 0,
      },
      moreHTPercentage: {
        total: Math.round(teamStats?.cards?.moreHTPercentage?.total ?? 0),
      },
      more2HTPercentage: {
        total: Math.round(teamStats?.cards?.more2HTPercentage?.total ?? 0),
      },
      overForHTPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overForHTPercentage &&
              Math.round(
                teamStats?.cards?.overForHTPercentage["0_5"]?.total
              )) ??
            0,
        },
      },
      overFor2HTPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overFor2HTPercentage &&
              Math.round(
                teamStats?.cards?.overFor2HTPercentage["0_5"]?.total
              )) ??
            0,
        },
      },
      overHTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.overHTPercentage &&
              Math.round(teamStats?.cards?.overHTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overHTPercentage &&
              Math.round(teamStats?.cards?.overHTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.over2HTPercentage &&
              Math.round(teamStats?.cards?.over2HTPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.over2HTPercentage &&
              Math.round(teamStats?.cards?.over2HTPercentage["2_5"]?.total)) ??
            0,
        },
      },
      underHTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.underHTPercentage &&
              Math.round(teamStats?.cards?.underHTPercentage["1_5"]?.total)) ??
            0,
        },
      },
      under2HTPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.under2HTPercentage &&
              Math.round(teamStats?.cards?.under2HTPercentage["1_5"]?.total)) ??
            0,
        },
      },
      cardsAverage: {
        total: teamStats?.cards?.cardsAverage?.total?.toFixed(1) ?? 0,
      },
      cardsForAverage: {
        total: teamStats?.cards?.cardsForAverage?.total?.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "0_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["0_5"]?.total)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overForPercentage &&
              Math.round(teamStats?.cards?.overForPercentage["3_5"]?.total)) ??
            0,
        },
      },
      overPercentage: {
        "1_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["3_5"]?.total)) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["4_5"]?.total)) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["5_5"]?.total)) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.cards?.overPercentage &&
              Math.round(teamStats?.cards?.overPercentage["6_5"]?.total)) ??
            0,
        },
      },

      overAgainst: {
        "0_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["0_5"]?.total.toFixed(1)) ??
            0,
        },
        "1_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["1_5"]?.total.toFixed(1)) ??
            0,
        },
        "2_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["2_5"]?.total.toFixed(1)) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.cards?.overAgainst &&
              teamStats?.cards?.overAgainst["3_5"]?.total.toFixed(1)) ??
            0,
        },
      },
    },
    corners: {
      overPercentage: {
        "6_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["6_5"]?.total)) ??
            0,
        },
        "7_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["7_5"]?.total)) ??
            0,
        },
        "8_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["8_5"]?.total)) ??
            0,
        },
        "9_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["9_5"]?.total)) ??
            0,
        },
        "10_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["10_5"]?.total)) ??
            0,
        },
        "11_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["11_5"]?.total)) ??
            0,
        },
        "12_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["12_5"]?.total)) ??
            0,
        },
        "13_5": {
          total:
            (teamStats?.corners?.overPercentage &&
              Math.round(teamStats?.corners?.overPercentage["13_5"]?.total)) ??
            0,
        },
      },
      cornersAverage: {
        total: teamStats?.corners?.cornersAverage?.total.toFixed(1) ?? 0,
      },
      cornersForAverage: {
        total: teamStats?.corners?.cornersForAverage?.total.toFixed(1) ?? 0,
      },
      cornersAgainstAverage: {
        total: teamStats?.corners?.cornersAgainstAverage?.total.toFixed(1) ?? 0,
      },
      overForPercentage: {
        "2_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.corners?.overForPercentage &&
              Math.round(
                teamStats?.corners?.overForPercentage["4_5"]?.total
              )) ??
            0,
        },
      },
      overAgainstPercentage: {
        "2_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["2_5"]?.total
              )) ??
            0,
        },
        "3_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["3_5"]?.total
              )) ??
            0,
        },
        "4_5": {
          total:
            (teamStats?.corners?.overAgainstPercentage &&
              Math.round(
                teamStats?.corners?.overAgainstPercentage["4_5"]?.total
              )) ??
            0,
        },
      },
      cornersHTAverage: {
        total: teamStats?.corners?.cornersHTAverage?.total.toFixed(1) ?? 0,
      },
      corners2HTAverage: {
        total: teamStats?.corners?.corners2HTAverage?.total.toFixed(1) ?? 0,
      },
      overHTPercentage: {
        "4_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["4_5"]?.total)) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["5_5"]?.total)) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.corners?.overHTPercentage &&
              Math.round(teamStats?.corners?.overHTPercentage["6_5"]?.total)) ??
            0,
        },
      },
      over2HTPercentage: {
        "4_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["4_5"]?.total
              )) ??
            0,
        },
        "5_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["5_5"]?.total
              )) ??
            0,
        },
        "6_5": {
          total:
            (teamStats?.corners?.over2HTPercentage &&
              Math.round(
                teamStats?.corners?.over2HTPercentage["6_5"]?.total
              )) ??
            0,
        },
      },
    },
    team: {
      _id: teamStats?.team?._id ?? "-",
      name: teamStats?.team?.name ?? "-",
      logoPath: "",
      nationalTeam: teamStats?.team?.nationalTeam ?? "",
      country: {
        extra: {
          iso2: teamStats?.team?.country?.extra?.iso2 ?? "",
          iso: teamStats?.team?.country?.extra?.iso ?? "",
        },
        imagePath: teamStats?.team?.country?.imagePath ?? null,
      },
    },
    stats: {
      substitutions: teamStats?.stats?.substitutions ?? 0,
      corners: teamStats?.stats?.corners ?? 0,
      possessionTime: teamStats?.stats?.possessionTime ?? 0,
      penalties: teamStats?.stats?.penalties ?? 0,
      goals: teamStats?.stats?.goals ?? 0,
      goalAttempts: teamStats?.stats?.goalAttempts ?? 0,
      shots: {
        offGoal: teamStats?.stats?.shots?.offGoal ?? 0,
        onGoal: teamStats?.stats?.shots?.onGoal ?? 0,
        total: teamStats?.stats?.shots?.total ?? 0,
        blocked: teamStats?.stats?.shots?.blocked ?? 0,
        insideBox: teamStats?.stats?.shots?.insideBox ?? 0,
        outsideBox: teamStats?.stats?.shots?.outsideBox ?? 0,
      },
      goalKick: teamStats?.stats?.goalKick ?? 0,
      freeKick: teamStats?.stats?.freeKick ?? 0,
      offside: teamStats?.stats?.offsides ?? 0,
      throwIn: teamStats?.stats?.throwIn ?? 0,
      saves: teamStats?.stats?.saves ?? 0,
      yellowCards: teamStats?.stats?.yellowCards ?? 0,
      redCards: teamStats?.stats?.redCards ?? 0,
      attacks: {
        attacks: teamStats?.stats?.attacks?.attacks ?? 0,
        dangerousAttacks: teamStats?.stats?.attacks?.dangerousAttacks ?? 0,
      },
      team: teamStats?.stats?.team ?? 0,
      fixture: teamStats?.stats?.fixture ?? 0,

      fouls: teamStats?.stats?.fouls ?? 0,
      passes: {
        total: teamStats?.stats?.passes?.total ?? 0,
        accurate: teamStats?.stats?.passes?.accurate ?? 0,
        percentage: teamStats?.stats?.passes?.percentage ?? 0,
      },
      //{
      //   fouls: {
      //     home: teamStats?.stats?.fouls?.fouls?.home ?? 0,
      //     away: teamStats?.stats?.fouls?.fouls?.away ?? 0,
      //   },
      // },
    },
  };
  let countryImage = teamStats?.team?.country?.imagePath;
  let teamImage = teamStats?.team?.logoPath;

  structuredTeamStats.team.logoPath = teamStats?.team?.nationalTeam
    ? countryImage
      ? countryImage
      : teamImage
    : teamImage ?? "https://cdn.sportmonks.com/images//soccer/teams/8/8.png";

  return structuredTeamStats;
};

export const structureFixture = (fixture) => {
  const structuredFixture = {
    league: {
      _id: fixture?.league?._id ?? "-",
      isCup: fixture?.league?.isCup ?? "-",
      logoPath:
        fixture?.league?.logoPath ??
        "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
      name: fixture?.league?.name ?? "-",
      country: {
        _id: fixture?.league?.country?._id ?? "-",
        name: fixture?.league?.country?.name ?? "-",
        imagePath: fixture?.league?.country?.imagePath ?? null,
      },
    },
    slug: fixture?.slug ?? "-",
    scores: {
      localTeamScore: fixture?.scores?.localTeamScore ?? "-",
      visitorTeamScore: fixture?.scores?.visitorTeamScore ?? "-",
      htScore: fixture?.scores?.htScore ?? "-",
      ftScore: fixture?.scores?.ftScore ?? "-",
      localTeamPenScore: fixture?.scores?.localTeamPenScore ?? "",
      visitorTeamPenScore: fixture?.scores?.visitorTeamPenScore ?? "",
    },
    time: {
      status: fixture?.time?.status ?? "-",
      startingAt: {
        date: fixture?.time?.startingAt?.date ?? "-",
        timezone: fixture?.time?.startingAt?.timezone ?? "-",
      },
      minute: fixture?.time?.minute ?? "-",
      second: fixture?.time?.second ?? "-",
      addedTime: fixture?.time?.addedTime ?? "-",
    },
    odds: {
      wayResult: {
        1: {
          value:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["1"]?.value) ??
            0,
          probability:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["1"]?.probability) ??
            0,
        },
        2: {
          value:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["1"]?.value) ??
            0,
          probability:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["1"]?.probability) ??
            0,
        },
        X: {
          value:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["X"]?.value) ??
            0,
          probability:
            (fixture?.odds?.wayResult &&
              fixture?.odds?.wayResult["X"]?.probability) ??
            0,
        },
      },
      over: {
        0.5: {
          value:
            (fixture?.odds?.over && fixture?.odds?.over["0.5"]?.value) ?? 0,
          probability:
            (fixture?.odds?.over && fixture?.odds?.over["0.5"]?.probability) ??
            0,
        },
        1.5: {
          value:
            (fixture?.odds?.over && fixture?.odds?.over["1.5"]?.value) ?? 0,
          probability:
            (fixture?.odds?.over && fixture?.odds?.over["1.5"]?.probability) ??
            0,
        },
        2.5: {
          value:
            (fixture?.odds?.over && fixture?.odds?.over["2.5"]?.value) ?? 0,
          probability:
            (fixture?.odds?.over && fixture?.odds?.over["2.5"]?.probability) ??
            0,
        },
        3.5: {
          value:
            (fixture?.odds?.over && fixture?.odds?.over["3.5"]?.value) ?? 0,
          probability:
            (fixture?.odds?.over && fixture?.odds?.over["3.5"]?.probability) ??
            0,
        },
        4.5: {
          value:
            (fixture?.odds?.over && fixture?.odds?.over["4.5"]?.value) ?? 0,
          probability:
            (fixture?.odds?.over && fixture?.odds?.over["4.5"]?.probability) ??
            0,
        },
      },
      BTTS: {
        Yes: {
          value: fixture?.odds?.BTTS?.Yes?.value ?? 0,
          probability: fixture?.odds?.BTTS?.Yes?.probability ?? 0,
        },
      },
    },

    venue: {
      _id: fixture?.venue?._id ?? "",
      // city: fixture?.venue?.city ?? "-",
      name: fixture?.venue?.name ?? "",
    },
    events: fixture?.events ? [...fixture?.events] : [],
    colors: {
      localTeam: {
        color: "#1BD47B",
      },
      visitorTeam: {
        color: "#FB5266",
      },
    },
    tvStations: fixture?.tvStations || [],
    attendance: fixture?.attendance ?? "-",
  };

  return structuredFixture;
};

export const structureHeadToHeadStats = (stats) => {
  return {
    fixtures: stats?.fixtures?.length ? [...stats?.fixtures] : [],
    matches: {
      matchesPlayed: {
        total: stats?.stats?.matches?.matchesPlayed?.total ?? 0,
      },
    },
    records: {
      wins: {
        home: stats?.stats?.records?.wins?.home ?? 0,
        away: stats?.stats?.records?.wins?.away ?? 0,
      },
      draws: {
        home: stats?.stats?.records?.draws?.home ?? 0,
      },
    },
    goals: {
      overPercentage: {
        "1_5": {
          total:
            (stats?.stats?.goals?.overPercentage &&
              Math.round(stats?.stats?.goals?.overPercentage["1_5"]?.total)) ??
            0,
        },
        "2_5": {
          total:
            (stats?.stats?.goals?.overPercentage &&
              Math.round(stats?.stats?.goals?.overPercentage["2_5"]?.total)) ??
            0,
        },
        "3_5": {
          total:
            (stats?.stats?.goals?.overPercentage &&
              Math.round(stats?.stats?.goals?.overPercentage["3_5"]?.total)) ??
            0,
        },
      },
      over: {
        "1_5": {
          total:
            (stats?.stats?.goals?.over &&
              stats?.stats?.goals?.over["1_5"]?.total) ??
            0,
        },
        "2_5": {
          total:
            (stats?.stats?.goals?.over &&
              stats?.stats?.goals?.over["2_5"]?.total) ??
            0,
        },
        "3_5": {
          total:
            (stats?.stats?.goals?.over &&
              stats?.stats?.goals?.over["3_5"]?.total) ??
            0,
        },
      },
      goalsAverage: {
        total: stats?.stats?.goals?.goalsAverage?.total?.toFixed(1) ?? 0,
      },
    },
    BTTS: {
      BTTSPercentage: {
        total: Math.round(stats?.stats?.BTTS?.BTTSPercentage?.total ?? 0),
      },
      BTTS: {
        total: Math.round(stats?.stats?.BTTS?.BTTS?.total ?? 0),
      },
    },
    cleanSheets: {
      cleanSheetsPercentage: {
        home: Math.round(
          stats?.stats?.cleanSheets?.cleanSheetsPercentage?.home ?? 0
        ),
        away: Math.round(
          stats?.stats?.cleanSheets?.cleanSheetsPercentage?.away ?? 0
        ),
      },
    },
  };
};

export const structureSeasonStats = (stats) => {
  return {
    stats: {
      goals: {
        overPercentage: {
          "1_5": {
            total: Math.round(
              (stats?.goals?.overPercentage &&
                stats?.goals?.overPercentage["1_5"]?.total) ??
                0
            ),
          },
          "2_5": {
            total: Math.round(
              (stats?.goals?.overPercentage &&
                stats?.goals?.overPercentage["2_5"]?.total) ??
                0
            ),
          },
        },
        goalsAverage: {
          total: stats?.goals?.goalsAverage?.total?.toFixed(1) ?? 0,
        },
      },
      BTTS: {
        BTTSPercentage: {
          total: Math.round(stats?.BTTS?.BTTSPercentage?.total ?? 0),
        },
      },
      corners: {
        cornersAverage: {
          total: stats?.corners?.cornersAverage?.total.toFixed(1) ?? 0,
        },
      },
      cards: {
        cardsAverage: {
          total: stats?.cards?.cardsAverage?.total.toFixed(1) ?? 0,
        },
      },
    },
  };
};

export const calculateAvg = (num1, num2, noRound, toFixedNumber = 2) => {
  if (noRound) {
    return +num1 + +num2 > 0 ? ((+num1 + +num2) / 2).toFixed(toFixedNumber) : 0;
  }
  return +num1 + +num2 > 0 ? Math.round((+num1 + +num2) / 2) : 0;
};

export const getColor = (num) => {
  let color;
  switch (true) {
    case +num < 10:
      color = "rgba(251, 82, 102, 1)";
      break;
    case 10 <= +num && +num < 20:
      color = "rgba(251, 82, 102, 0.5)";
      break;
    case 20 <= +num && +num < 30:
      color = "rgba(251, 82, 102, 0.2)";
      break;
    case 30 <= +num && +num < 40:
      color = "rgba(246, 194, 5, 0.2)";
      break;
    case 40 <= +num && +num < 50:
      color = "rgba(246, 194, 5, 0.5)";
      break;
    case 50 <= +num && +num < 60:
      color = "rgba(246, 194, 5, 1)";
      break;
    case 60 <= +num && +num < 70:
      color = "rgba(246, 194, 5, 1)";
      break;
    case 70 <= +num && +num < 80:
      color = "rgba(27, 212, 123, 0.4)";
      break;
    case 80 <= +num && +num < 90:
      color = "rgba(27, 212, 123, 0.6)";
      break;
    case 90 <= +num:
      color = "rgba(27, 212, 123, 1)";
      break;
  }
  return color;
};
