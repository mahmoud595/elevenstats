import { calculateAvg } from "./h2hHelperFunctions";
import { zonedTimeToUtc } from "date-fns-tz";

export const startEndDate = (timeZone, date) => {
  let localStartDate = date,
    localEndDate = date + "T23:59:59.999";
  let endDate = zonedTimeToUtc(localEndDate, timeZone);
  let startDate = zonedTimeToUtc(localStartDate, timeZone);

  const formattedStartDate = `${
    new Date(startDate).toISOString().split(".")[0]
  }z`;
  const formattedEndDate = `${new Date(endDate).toISOString().split(".")[0]}z`;

  return [formattedStartDate, formattedEndDate];
};

export const getMatchTime = (date) => {
  return new Date(date).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const calculateAverageValues = (
  newValue,
  localTeamStats,
  visitorTeamStats,
  firstColumn
) => {
  let calculatedValue;

  if (newValue === "BTTS") {
    calculatedValue = calculateAvg(
      localTeamStats?.BTTS ?? 0,
      visitorTeamStats?.BTTS ?? 0
    );
  } else if (newValue === "xG (H)" && firstColumn) {
    calculatedValue = (localTeamStats?.xg ?? 0).toFixed(3);
  } else if (newValue === "xG (A)" && !firstColumn) {
    calculatedValue = (visitorTeamStats?.xg ?? 0).toFixed(3);
  } else if (newValue === "over 0.5") {
    calculatedValue = calculateAvg(
      localTeamStats?.over0_5 ?? 0,
      visitorTeamStats?.over0_5 ?? 0
    );
  } else if (newValue === "over 1.5") {
    calculatedValue = calculateAvg(
      localTeamStats?.over1_5 ?? 0,
      visitorTeamStats?.over1_5 ?? 0
    );
  } else if (newValue === "over 2.5") {
    calculatedValue = calculateAvg(
      localTeamStats?.over2_5 ?? 0,
      visitorTeamStats?.over2_5 ?? 0
    );
  } else if (newValue === "over 3.5") {
    calculatedValue = calculateAvg(
      localTeamStats?.over3_5 ?? 0,
      visitorTeamStats?.over3_5 ?? 0
    );
  } else if (newValue === "AVG") {
    calculatedValue = calculateAvg(
      localTeamStats?.goalsAVG ?? 0,
      visitorTeamStats?.goalsAVG ?? 0
    );
  } else if (newValue === "cards AVG") {
    calculatedValue = calculateAvg(
      localTeamStats?.goalsAVG ?? 0,
      visitorTeamStats?.goalsAVG ?? 0
    );
  } else if (newValue === "corners AVG") {
    calculatedValue = calculateAvg(
      localTeamStats?.corners ?? 0,
      visitorTeamStats?.corners ?? 0
    );
  }

  return calculatedValue;
};
