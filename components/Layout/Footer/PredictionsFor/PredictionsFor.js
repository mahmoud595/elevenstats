import React from "react";
import { LinksContainer } from "../LinksContainer/LinksContainer";

const links = [
  "LIVE",
  "Today",
  "Tomorrow",
  "England Premier League",
  "Spain La Liga",
  "Germany Bundesliga",
  "Italy Serie A",
  "France Ligue 1",
];
export const PredictionsFor = ({ clicked, setClicked }) => {
  return (
    <LinksContainer
      title="PREDICTIONS FOR"
      links={links}
      clicked={clicked}
      setClicked={setClicked}
    />
  );
};
